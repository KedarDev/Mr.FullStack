package com.resumeapp.mrfullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resumeapp.mrfullstackbackend.jpa.Visitor;
import com.resumeapp.mrfullstackbackend.service.VisitorService;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/visitor")
public class VisitorController {

    final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    VisitorService visitorService;

    @GetMapping("/test")
    public String testController() {

        logger.debug("The VisitorController() method was invoked!");

        return "The VisitorController is up and running";

    }

    @GetMapping("/{visitorId}")
    public List<Visitor> listVisitors() {

        logger.debug("the listVisitors() was invoked!");

        return this.visitorService.listVisitors();
    }
}