package com.agrorate.backend.services;

import com.agrorate.backend.entity.Role;
import com.agrorate.backend.entity.User;
import com.agrorate.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public User saveUser(User user) {
        user.setRole(Role.ROLE_USER);
        String password = passwordEncoder.encode(user.getPassword());
        user.setPassword(password);
        User newUser = userRepo.save(user);
        return newUser;
    }
}
