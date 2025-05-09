package com.agrorate.backend.config;

import com.agrorate.backend.entity.User;
import com.agrorate.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserDetailsService implements UserDetailsService {

    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String mobileNo) throws UsernameNotFoundException {
        User user = userRepo.findUserByMobileNo(mobileNo);

        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }else {
            return new CustomUserDetails(user);
        }
    }
}
