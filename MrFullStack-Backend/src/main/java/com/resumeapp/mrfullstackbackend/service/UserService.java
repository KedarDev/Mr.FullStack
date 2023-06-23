package com.resumeapp.mrfullstackbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.resumeapp.mrfullstackbackend.jdbc.UserDao;
import com.resumeapp.mrfullstackbackend.jdbc.UserBean;

@Service
public class UserService {


@Autowired
UserDao userDao; // from the UserDao class

public List<UserBean> listUsers() {

    return this.userDao.listUsers();
}

public UserBean findUserByUsername(String username) {

    return this.userDao.findByUsername(username);
}

public void createUser(UserBean user) {

    this.userDao.createUser(user);
}

}