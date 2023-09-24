package com.resumeapp.mrfullstackbackend.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resumeapp.mrfullstackbackend.repository.VisitorRepository;
import com.resumeapp.mrfullstackbackend.jpa.Visitor;

@Service
public class VisitorService {
    
    final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    VisitorRepository visitorRepository;

    public List<Visitor> listVisitors() {
        return this.visitorRepository.findAll();
    }
}
