package com.resumeapp.mrfullstackbackend.service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.sql.Timestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import com.resumeapp.mrfullstackbackend.exception.domain.EmailExistException;
import com.resumeapp.mrfullstackbackend.exception.domain.EmailNotVerifiedException;
import com.resumeapp.mrfullstackbackend.exception.domain.UserNotFoundException;
import com.resumeapp.mrfullstackbackend.exception.domain.UsernameExistException;
import com.resumeapp.mrfullstackbackend.jpa.User;
import com.resumeapp.mrfullstackbackend.provider.ResourceProvider;
import com.resumeapp.mrfullstackbackend.repository.UserRepository;
import com.resumeapp.mrfullstackbackend.security.JwtService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;
import java.util.function.Consumer;
import java.util.function.Supplier;
import com.resumeapp.mrfullstackbackend.jpa.Profile;

@Service // Tells spring this is a service class
public class UserService {

	final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
	UserRepository userRepository;

	@Autowired
	EmailService emailService;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtService jwtService;

	@Autowired
	ResourceProvider provider;

	// Retrieve all users
	public List<User> listUsers() {

		return this.userRepository.findAll();

	}

	// Find users by Username
	public Optional<User> findByUsername(String username) {

		return this.userRepository.findByUsername(username);
	}

	// Create User
	public void createUser(User user) {

		// save to the repo
		this.userRepository.save(user);
	}

	// User Sign up creates a user
	public User signup(User user) {

		user.setUsername(user.getUsername().toLowerCase()); // convert username to lower case
		user.setEmailId(user.getEmailId().toLowerCase()); // convert email to lower case

		this.validateUsernameAndEmail(user.getUsername(), user.getEmailId());

		user.setEmailVerified(false); // set emailVerified to false
		user.setPassword(this.passwordEncoder.encode(user.getPassword())); // encode password
		user.setCreatedOn(Timestamp.from(Instant.now())); // timestamp

		this.emailService.sendVerificationEmail(user);

		this.userRepository.save(user); // save the user to the DB
		return user; // return the user object

	}

	private void validateUsernameAndEmail(String username, String emailId) {

		// Call the findByUser() from the UserRepository class
		this.userRepository.findByUsername(username).ifPresent(u -> {
			// if the user name exists throw an exception
			throw new UsernameExistException(String.format("Username already exists, %s", u.getUsername()));
		});

		// Call the findByEmailId() from the UserRepository class
		this.userRepository.findByEmailId(emailId).ifPresent(u -> {
			// if the emil exist throw an exception
			throw new EmailExistException(String.format("Email already exists, %s", u.getEmailId()));
		});

	}

	public void verifyEmail() {

		// retrieve email from ContextHolder
		String username = SecurityContextHolder.getContext().getAuthentication().getName();

		User user = this.userRepository.findByUsername(username)
				.orElseThrow(() -> new UserNotFoundException(String.format("Username doesn't exist, %s", username)));

		user.setEmailVerified(true);

		this.userRepository.save(user);
	}

	private static User isEmailVerified(User user) {

		// check if email is verified if not throw an exception
		if (user.getEmailVerified().equals(false)) {
			throw new EmailNotVerifiedException(String.format("Email requires verification, %s", user.getEmailId()));
		}

		return user;
	}

	// helper methos
	private Authentication authenticate(String username, String password) {
		return this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
	}

	public User authenticate(User user) {

		/* Spring Security Authentication. */
		this.authenticate(user.getUsername(), user.getPassword());

		/* Get User from the DB. */
		return this.userRepository.findByUsername(user.getUsername()).map(UserService::isEmailVerified).get();
	}

	// generates a JWT token for a given username and returns the header with a generated token
	public HttpHeaders generateJwtHeader(String username) {
		HttpHeaders headers = new HttpHeaders();
		headers.add(AUTHORIZATION, this.jwtService.generateJwtToken(username, this.provider.getJwtExpiration()));

		return headers;
	}

	public void sendResetPasswordEmail(String emailId) {

		Optional<User> opt = this.userRepository.findByEmailId(emailId);

		if (opt.isPresent()) {
			this.emailService.sendResetPasswordEmail(opt.get());
		} else {
			logger.debug("Email doesn't exist, {}", emailId);
		}
	}

	// Retrieve the username of the currently logged-in user from the SecurityContextHolder
	public void resetPassword(String password) {

		String username = SecurityContextHolder.getContext().getAuthentication().getName();

		User user = this.userRepository.findByUsername(username)
				.orElseThrow(() -> new UserNotFoundException(String.format("Username doesn't exist, %s", username)));

		user.setPassword(this.passwordEncoder.encode(password));

		this.userRepository.save(user);
	}

	public User getUser() {
		
		// Retrieve the authenticated user's username using SecurityContextHolder


		String username = SecurityContextHolder.getContext().getAuthentication().getName();

		/* Get User from the DB. */
		return this.userRepository.findByUsername(username)
				.orElseThrow(() -> new UserNotFoundException(String.format("Username doesn't exist, %s", username)));
	}

	private void updateValue(Supplier<String> getter, Consumer<String> setter) {

		//  create an Optional instance of the value returned by the getter
		Optional.ofNullable(getter.get())
				// .filter(StringUtils::hasText)
				.map(String::trim)
				.ifPresent(setter);
	}

	private void updatePassword(Supplier<String> getter, Consumer<String> setter) {

		Optional.ofNullable(getter.get())
				.filter(StringUtils::hasText) // check if the Optional value is not null and has text
				.map(this.passwordEncoder::encode) //  apply a password encoding operation to the Optional value.
				.ifPresent(setter);
	}

	private User updateUser(User user, User currentUser) {

		this.updateValue(user::getFirstName, currentUser::setFirstName);
		this.updateValue(user::getLastName, currentUser::setLastName);
		this.updateValue(user::getPhone, currentUser::setPhone);
		this.updateValue(user::getEmailId, currentUser::setEmailId);
		this.updatePassword(user::getPassword, currentUser::setPassword);

		return this.userRepository.save(currentUser);
	}

	public User updateUser(User user) {

		String username = SecurityContextHolder.getContext().getAuthentication().getName();

		/* Validates the new email if provided */
		this.userRepository.findByEmailId(user.getEmailId())
				.filter(u -> !u.getUsername().equals(username))
				.ifPresent(u -> {
					throw new EmailExistException(String.format("Email already exists, %s", u.getEmailId()));
				});

		/* Get and Update User */
		return this.userRepository.findByUsername(username)
				.map(currentUser -> this.updateUser(user, currentUser))
				.orElseThrow(() -> new UserNotFoundException(String.format("Username doesn't exist, %s", username)));
	}

	private User updateUserProfile(Profile profile, User user) {

		Profile currentProfile = user.getProfile();

		if (Optional.ofNullable(currentProfile).isPresent()) {

			this.updateValue(profile::getHeadline, currentProfile::setHeadline);
			this.updateValue(profile::getBio, currentProfile::setBio);
			this.updateValue(profile::getCity, currentProfile::setCity);
			this.updateValue(profile::getCountry, currentProfile::setCountry);
			this.updateValue(profile::getPicture, currentProfile::setPicture);
		} else {
			user.setProfile(profile);
			profile.setUser(user);
		}

		return this.userRepository.save(user);
	}


	public User updateUserProfile(Profile profile) {

		String username = SecurityContextHolder.getContext().getAuthentication().getName();

		/* Get and Update User */
		return this.userRepository.findByUsername(username)
				.map(user -> this.updateUserProfile(profile, user))
				.orElseThrow(() -> new UserNotFoundException(String.format("Username doesn't exist, %s", username)));
	}
}
