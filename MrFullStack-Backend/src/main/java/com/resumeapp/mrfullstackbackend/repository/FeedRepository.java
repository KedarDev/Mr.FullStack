package com.resumeapp.mrfullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import com.resumeapp.mrfullstackbackend.jpa.Feed;
import com.resumeapp.mrfullstackbackend.jpa.User;

public interface FeedRepository extends JpaRepository<Feed, Integer>, PagingAndSortingRepository<Feed, Integer> {
	// methods
	Page<Feed> findByUser(User user, Pageable pageable); 
	Page<Feed> findByUserNot(User user, Pageable pageable); 
}
