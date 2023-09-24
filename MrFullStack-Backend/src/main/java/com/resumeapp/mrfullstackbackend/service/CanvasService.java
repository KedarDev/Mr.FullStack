package com.resumeapp.mrfullstackbackend.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resumeapp.mrfullstackbackend.jpa.Canvas;
import com.resumeapp.mrfullstackbackend.repository.CanvasRepository;

@Service
public class CanvasService {
    
    final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    CanvasRepository canvasRepository;

    public List<Canvas> listCanvas() {
        return this.canvasRepository.findAll();
    }
}
