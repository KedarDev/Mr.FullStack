package com.resumeapp.mrfullstackbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/visitor")
public class VisitorController {

    final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/test")
    public String testController() {

        logger.debug("The VisitorController() method was invoked!");

        return "The Resume application is up and running";

    }

}