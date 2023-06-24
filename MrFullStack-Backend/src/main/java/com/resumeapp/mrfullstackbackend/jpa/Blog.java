package com.resumeapp.mrfullstackbackend.jpa;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import jakarta.persistence.Column;
import jakarta.persistence.Id;

@Entity
@Table(name = "\"Blog\"")
public class Blog implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"blog\"")
    @JsonProperty(access = Access.WRITE_ONLY)
    private Integer blogId;

    private String bio;

    private String city;

    private String country;

    private String headline;

    private String picture;

    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "\"userId\"")
    private User user;

    // constructor
    public Blog() {

    }

    // Getter & Setters
    public Integer getBlogId() {
        return blogId;
    }

    public void setBlogId(Integer blogId) {
        this.blogId = blogId;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    // toString()
    @Override
    public String toString() {
        return "Blog [blogId=" + blogId + ", bio=" + bio + ", city=" + city + ", country=" + country + ", headline="
                + headline + ", picture=" + picture + ", user=" + user + "]";
    }

}
