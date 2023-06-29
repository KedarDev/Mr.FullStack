package com.resumeapp.mrfullstackbackend.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.resumeapp.mrfullstackbackend.jpa.User;
// import org.springframework.context.annotation.Profile;

// @Profile("Member")
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);

    Optional<User> findByEmailId(String email);
}
