package com.resumeapp.mrfullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumeapp.mrfullstackbackend.jpa.FeedMetaData;
// import org.springframework.context.annotation.Profile;

// @Profile("Member")
public interface FeedMetaDataRepository extends JpaRepository<FeedMetaData, Integer> {
}
