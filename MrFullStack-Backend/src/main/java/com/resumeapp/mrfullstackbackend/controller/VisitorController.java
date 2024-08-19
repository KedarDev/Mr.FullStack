// package com.resumeapp.mrfullstackbackend.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;


// import com.resumeapp.mrfullstackbackend.jpa.User;
// import com.resumeapp.mrfullstackbackend.jpa.Visitor;
// import com.resumeapp.mrfullstackbackend.repository.VisitorRepository;
// import com.resumeapp.mrfullstackbackend.service.VisitorService;

// import jakarta.servlet.http.HttpServlet;
// import jakarta.servlet.http.HttpServletRequest;

// import java.sql.Timestamp;
// import java.time.Instant;
// import java.util.List;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;

// // VisitorController.java
// @CrossOrigin
// @RestController
// @RequestMapping("/visitors")
// public class VisitorController {
//     private final VisitorService visitorService;

//     @Autowired
//     public VisitorController(VisitorService visitorService) {
//         this.visitorService = visitorService;
//     }

//     @PostMapping
//     public ResponseEntity<Visitor> createVisitor(@RequestBody Visitor visitor) {
//         Visitor createdVisitor = visitorService.createVisitor(visitor);
//         return ResponseEntity.status(HttpStatus.CREATED).body(createdVisitor);
//     }

//     @GetMapping
//     public ResponseEntity<List<Visitor>> getAllVisitors() {
//         List<Visitor> visitors = visitorService.getAllVisitors();
//         return ResponseEntity.ok(visitors);
//     }

//     @GetMapping("/")
//     public ResponseEntity<String> getVisitors(HttpServletRequest request) {
//         try {
//             String ipAddress = request.getRemoteAddr(); // Get visitor's IP address
//             String city = "Sample City"; // Simulate fetching city (replace with actual logic)
//             String country = "Sample Country"; // Simulate fetching country (replace with actual logic)

//             Visitor visitor = new Visitor();
//             visitor.setIpAddress(ipAddress);
//             visitor.setCity(city);
//             visitor.setCountry(country);

//             visitorService.createVisitor(visitor); // Save the visitor

//             return ResponseEntity.ok("Visitor tracked successfully");
//         } catch (Exception e) {
//             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                     .body("Error tracking visitor");
//         }
//     }

//     // Other endpoints...
// }





//     // @GetMapping("/visitors")
//     // public ResponseEntity<String> trackVisitor(HttpServletRequest request) {
//     //     String ipAddress = request.getRemoteAddr(); // Get visitor's IP address

//     //     // Use an IP geolocation service to get city and country (e.g., MaxMind GeoIP2)
//     //     String city = "Sample City";
//     //     String country = "Sample Country";

//     //     Visitor visitor = new Visitor();
//     //     visitor.setIpAddress(ipAddress);
//     //     visitor.setCity(city);
//     //     visitor.setCountry(country);

//     //     visitorRepository.save(visitor);

//     //     logger.debug("The trackVisitor() method was invoked!");


//     //     return ResponseEntity.ok("Visitor tracked successfully!");
//     // }

//     // @GetMapping("/{ipAddress}/{city}/{country}/{createdOn}")
//     // public String createVisitor(@PathVariable String ipAddress, @PathVariable String city, @PathVariable String country, @PathVariable Timestamp createdOn ) {
        

//     //     Visitor visitor = new Visitor();

//     //     visitor.setIpAddress(ipAddress);
//     //     visitor.setCity(city);
//     //     visitor.setCountry(country);
//     //     visitor.setCreatedOn(Timestamp.from(Instant.now()));

//     //     logger.debug("The trackVisitor() method was invoked!, visitor={}", visitor.toString());

//     //     this.visitorService.createVisitor(visitor);


//     //     return "Visitor was created";
//     // }

    

//     //    @GetMapping("/{first}/{last}/{username}/{password}/{phone}/{emailId}")
//     // public String createUser(@PathVariable String first, @PathVariable String last, @PathVariable String username,
//     //         @PathVariable String password, @PathVariable String phone, @PathVariable String emailId) {

//     //     User user = new User();

//     //     user.setFirstName(first);
//     //     user.setLastName(last);
//     //     user.setUsername(username);
//     //     user.setPassword(password);
//     //     user.setPhone(phone);
//     //     user.setEmailId(emailId);
//     //     user.setEmailVerified(false);
//     //     user.setCreatedOn(Timestamp.from(Instant.now()));

//     //     logger.debug("The createUser() method was invoked!, user={}", user.toString());

//     //     this.userService.createUser(user);

//     //     return "User Created Successfully";
//     // }

