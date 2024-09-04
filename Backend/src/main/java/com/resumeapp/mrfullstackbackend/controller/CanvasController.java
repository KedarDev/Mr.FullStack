// package com.resumeapp.mrfullstackbackend.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.resumeapp.mrfullstackbackend.jpa.Canvas;
// import com.resumeapp.mrfullstackbackend.service.CanvasService;

// import java.util.List;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;

// @CrossOrigin(exposedHeaders = "Authorization")
// @RestController
// @RequestMapping("/canvas")
// public class CanvasController {

//     final Logger logger = LoggerFactory.getLogger(this.getClass());

//     @Autowired
//     CanvasService canvasService;

//     @GetMapping("/test")
//     public String testController() {

//         logger.debug("The CanvasController() method was invoked!");

//         return "The CanvasController is up and running";
//     }

//     @GetMapping("/{canvasId}")
//     public List<Canvas> listCanvas() {

//         logger.debug("the listVisitors() was invoked!");

//         return this.canvasService.listCanvas();
//     }

// }
