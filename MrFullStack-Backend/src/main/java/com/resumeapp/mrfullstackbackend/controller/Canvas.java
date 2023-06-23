package com.resumeapp.mrfullstackbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/canvas")
public class Canvas {
    
    final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/test")
    public String testController() {

        logger.debug("The CanvasController() method was invoked!");

        return "The CanvasController is up and running";
    }
}
