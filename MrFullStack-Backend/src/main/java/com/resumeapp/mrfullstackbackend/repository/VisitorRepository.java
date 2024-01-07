package com.resumeapp.mrfullstackbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumeapp.mrfullstackbackend.jpa.Visitor;

// import org.springframework.context.annotation.Profile;

// @Profile("Visitor")
public interface VisitorRepository extends JpaRepository<Visitor, Long> {
    
    Optional<Visitor> findByVisitorId(Long visitorId);
    
}
