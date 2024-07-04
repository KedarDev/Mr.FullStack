// package com.resumeapp.mrfullstackbackend.jpa;

// import java.io.Serializable;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.Table;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;


// @Entity
// @Table(name = "\"Canvas\"")
// public class Canvas implements Serializable {

//     private static final long serialVersionUID = 1L;

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name = "\"canvasId\"")
//     private Long canvasId;

//     @Column(name = "\"initial\"")
//     private String initial;

//     @Column(name = "\"ipAddress\"")
//     private String ipAddress;

//     @Column(name = "\"jobTitle\"")
//     private String jobTitle;

//     @Column(name = "\"picture\"")
//     private String picture;

    
//     public Canvas() {

//     }


//     public Long getCanvasId() {
//         return canvasId;
//     }


//     public void setCanvasId(Long canvasId) {
//         this.canvasId = canvasId;
//     }


//     public String getInitial() {
//         return initial;
//     }


//     public void setInitial(String initial) {
//         this.initial = initial;
//     }


//     public String getIpAddress() {
//         return ipAddress;
//     }


//     public void setIpAddress(String ipAddress) {
//         this.ipAddress = ipAddress;
//     }


//     public String getJobTitle() {
//         return jobTitle;
//     }


//     public void setJobTitle(String jobTitle) {
//         this.jobTitle = jobTitle;
//     }


//     public String getPicture() {
//         return picture;
//     }


//     public void setPicture(String picture) {
//         this.picture = picture;
//     }


//     @Override
//     public String toString() {
//         return "Canvas [canvasId=" + canvasId + ", initial=" + initial + ", ipAddress=" + ipAddress + ", jobTitle="
//                 + jobTitle + ", picture=" + picture + "]";
//     }

    

// }
