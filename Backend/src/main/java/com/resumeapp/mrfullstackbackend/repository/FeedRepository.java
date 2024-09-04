package com.resumeapp.mrfullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
// import org.springframework.context.annotation.Profile;



import com.resumeapp.mrfullstackbackend.jpa.Feed;
import com.resumeapp.mrfullstackbackend.jpa.User;

// @Profile("Member")
public interface FeedRepository extends JpaRepository<Feed, Integer> {
	// methods
	Page<Feed> findByUser(User user, Pageable pageable); 
	Page<Feed> findByUserNot(User user, Pageable pageable); 
}
