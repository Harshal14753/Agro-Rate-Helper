package com.agrorate.backend.repository;

import com.agrorate.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepo extends JpaRepository<User, Integer> {

    public User findByUuid(UUID uuid);

    public User findUserByMobileNo(String mobileNo);
}
