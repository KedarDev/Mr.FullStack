package com.resumeapp.mrfullstackbackend.jpa;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity // @Entity lets us know that Profile is an entity in our DB
@Table(name="\"Profile\"") // @table used to specify the name of the DB table associated with this entity
public class Profile implements Serializable { // Serializable interface tells us this class is a serializable 
	
	private static final long serialVersionUID = 1L; // unique identifier used for serialization and deserialization 
	
	@Id // PRIMARY KEY
	@GeneratedValue(strategy=GenerationType.IDENTITY) // Auto generated type IDENTITY
	@Column(name="\"profileId\"") // Mapping feild to a Column in the DB
	// @JsonProperty used to customize the serialization and deserialization when converting to JSON
	@JsonProperty(access = Access.WRITE_ONLY) // WRITE_ONLY access means the field can only be serialized not deserialized 
	private Integer profileId;
	
	
	private String bio;
	private String city;
	private String country;
	private String headline;
	private String picture;
	
	@OneToOne 
	@JsonIgnore // annotation tells spring to ignore while serializing and deserializing
	@JoinColumn(name="\"userId\"") // FK a column that joins two entities together
	// declare user tpye from user class
	private User user;
	
	// default constructor
	public Profile() {
		
		
	}

	// Getters & Setters
	public Integer getProfileId() {
		return profileId;
	}

	public void setProfileId(Integer profileId) {
		this.profileId = profileId;
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

	// toString method
	@Override
	public String toString() {
		return "Profile [profileId=" + profileId + ", bio=" + bio + ", city=" + city + ", country=" + country
				+ ", headline=" + headline + ", picture=" + picture + "]";
	}

	
	
	
}