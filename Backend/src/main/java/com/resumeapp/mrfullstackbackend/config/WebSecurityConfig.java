package com.resumeapp.mrfullstackbackend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.beans.factory.annotation.Autowired;
import com.resumeapp.mrfullstackbackend.filter.CustomAuthEntryPoint;
import com.resumeapp.mrfullstackbackend.filter.JwtAuthorizationFilter;
import com.resumeapp.mrfullstackbackend.provider.ResourceProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(exposedHeaders = "Authorization")
@EnableAsync
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

	@Autowired
	ResourceProvider provider;

	@Autowired
	JwtAuthorizationFilter jwtAuthorizationFilter;

	@Autowired
	CustomAuthEntryPoint customAuthEntryPoint;

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
			throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

		http
				.cors().and().csrf().disable()
				.sessionManagement().sessionCreationPolicy(STATELESS)
				.and().authorizeHttpRequests().requestMatchers(this.provider.getJwtExcludedUrls()).permitAll()
				.anyRequest().authenticated()
				.and()
				.exceptionHandling()
				.authenticationEntryPoint(this.customAuthEntryPoint)
				.and()
				.addFilterBefore(this.jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);

		return http.build();

	}

}