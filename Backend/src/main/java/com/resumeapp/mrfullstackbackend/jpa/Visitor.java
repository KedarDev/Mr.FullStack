// package com.resumeapp.mrfullstackbackend.jpa;

// import java.sql.Timestamp;

// import java.io.Serializable;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.Table;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;

// @Entity
// @Table(name = "\"Visitor\"")
// public class Visitor implements Serializable {

//     private static final long serialVersionUID = 1L;

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name = "\"visitorId\"")
//     private Long visitorId;

//     @Column(name = "\"ipAddress\"")
//     private String ipAddress;

//     @Column(name = "\"city\"")
//     private String city;

//     @Column(name = "\"country\"")
//     private String country;

//     @Column(name = "\"createdOn\"")
//     private Timestamp createdOn;


//     public Visitor() {

//     }

//     public Long getVisitorId() {
//         return visitorId;
//     }

//     public void setVisitorId(Long visitorId) {
//         this.visitorId = visitorId;
//     }

//     public String getIpAddress() {
//         return ipAddress;
//     }

//     public void setIpAddress(String ipAddress) {
//         this.ipAddress = ipAddress;
//     }

//     public String getCity() {
//         return city;
//     }

//     public void setCity(String city) {
//         this.city = city;
//     }

//     public String getCountry() {
//         return country;
//     }

//     public void setCountry(String country) {
//         this.country = country;
//     }

//     public Timestamp getCreatedOn() {
//         return createdOn;
//     }

//     public void setCreatedOn(Timestamp createdOn) {
//         this.createdOn = createdOn;
//     }

//     @Override
//     public String toString() {
//         return "Visitor [visitorId=" + visitorId + ", ipAddress=" + ipAddress + ", city=" + city + ", country="
//                 + country + ", createdOn=" + createdOn + ", getCity()=" + getCity() + ", getCountry()=" + getCountry()
//                 + "]";
//     }

// }
