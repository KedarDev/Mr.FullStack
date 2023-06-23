package com.resumeapp.mrfullstackbackend.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.Nullable;

public class UserMapper implements RowMapper<UserBean> {

    @Override
    @Nullable
    public UserBean mapRow(ResultSet rs, int rowNum) throws SQLException {
        /* Create a UserBean object */
        UserBean user = new UserBean();

        /* Populates the UserBean object with data from the resultSet */
        user.setUserId(rs.getInt("userId"));
        user.setFirstName(rs.getString("firstName"));
        user.setLastName(rs.getString("lastName"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password"));
        user.setPhone(rs.getString("phone"));
        user.setEmailId(rs.getString("emailId"));
        user.setEmailVerified(rs.getBoolean("emailVerified"));
        user.setCreatedOn(rs.getTimestamp("createdOn"));

        /* Return the populated UserBean object */
        return user;

    }

}
