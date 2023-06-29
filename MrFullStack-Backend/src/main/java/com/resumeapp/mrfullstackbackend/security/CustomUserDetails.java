package com.resumeapp.mrfullstackbackend.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.resumeapp.mrfullstackbackend.jpa.User;

public class CustomUserDetails implements UserDetails {

    // default serial version ID
    private static final long serialVersionUID = 1L;

    User user;

    // It returns a collection of GrantedAuthority objects representing the
    // authorities granted to the user.
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    // returns user password
    @Override
    public String getPassword() {
        return this.user.getPassword();
    }

    // returns user name
    @Override
    public String getUsername() {
        return this.user.getUsername();
    }

    // return true
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    // returns true
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    // Check credentials
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    // returns true
    @Override
    public boolean isEnabled() {
        return true;
    }

    // constructor
    public CustomUserDetails(User user) {
        super();
        this.user = user;
    }

}