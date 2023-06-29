package com.resumeapp.mrfullstackbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.resumeapp.mrfullstackbackend.domain.PageResponse;
import com.resumeapp.mrfullstackbackend.exception.domain.FeedNotFoundException;
import com.resumeapp.mrfullstackbackend.exception.domain.UserNotFoundException;
import com.resumeapp.mrfullstackbackend.jpa.Feed;
import com.resumeapp.mrfullstackbackend.jpa.User;
import com.resumeapp.mrfullstackbackend.repository.FeedRepository;
import com.resumeapp.mrfullstackbackend.repository.UserRepository;

import java.time.Instant;
import java.sql.Timestamp;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Sort;

@Service
public class FeedService {

    final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    UserRepository userRepository;

    @Autowired
    FeedRepository feedRepository;

    public Feed createFeed(Feed feed) {

        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        User user = this.userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException(String.format("Username doesn't exist, %s", username)));

        feed.setUser(user);
        feed.setCreatedOn(Timestamp.from(Instant.now()));

        return this.feedRepository.save(feed);
    }

    public Feed getFeedById(int feedId) {

        return this.feedRepository.findById(feedId)
                .orElseThrow(() -> new FeedNotFoundException(String.format("Feed doesn't exist, %d", feedId)));
    }

    public PageResponse<Feed> getUserFeeds(int pageNum, int pageSize) {

        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        User user = this.userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException(String.format("Username doesn't exist, %s", username)));

        Page<Feed> paged = this.feedRepository.findByUser(user,
                PageRequest.of(pageNum, pageSize, Sort.by("feedId").descending()));

        return new PageResponse<Feed>(paged);
    }

    public PageResponse<Feed> getOtherUsersFeeds(int pageNum, int pageSize) {

        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = this.userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException(String.format("Username doesn't exist, %s", username)));

        Page<Feed> paged = this.feedRepository.findByUserNot(user,
                PageRequest.of(pageNum, pageSize, Sort.by("feedId").descending()));

        return new PageResponse<Feed>(paged);
    }

}
