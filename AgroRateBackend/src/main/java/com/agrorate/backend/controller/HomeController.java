package com.agrorate.backend.controller;

import com.agrorate.backend.entity.Address;
import com.agrorate.backend.entity.User;
import com.agrorate.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HomeController {

    @Autowired
    private UserService userService;

    @PostMapping("/saveUser")
    public ResponseEntity<Map<String, String>> saveUser(@RequestBody Map<String, String> requestBody) {

        System.out.println("1");
        Map<String, String> response = new HashMap<>();
        System.out.println("3");

        User user = new User();
        user.setFullname((String) requestBody.get("fullname"));
        user.setFatherName((String) requestBody.get("fatherName"));
        user.setMobileNo((String) requestBody.get("mobileNo"));
        user.setAlternateMobileNo((String) requestBody.get("alternateMobileNo"));
        user.setAadhaarNo((String) requestBody.get("aadhaarNo"));
        user.setPassword((String) requestBody.get("password"));

        Address address = new Address();
        address.setVillage((String) requestBody.get("village"));
        address.setTaluka((String) requestBody.get("taluka"));
        address.setDistrict((String) requestBody.get("district"));
        address.setState((String) requestBody.get("state"));
        address.setPincode((String) requestBody.get("pincode"));

        user.setAddress(address);

        String confirmPassword = (String) requestBody.get("confirmPassword");

        if (confirmPassword.equals(user.getPassword())) {
            User newUser = userService.saveUser(user);
            System.out.println("4");

            if (newUser != null) {
                response.put("status", "success");
                response.put("message", "User registered successfully");
                System.out.println("4");
                return ResponseEntity.ok(response);
            } else {
                response.put("status", "error");
                response.put("message", "User registration faled");
                System.out.println("5");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
            }
        }
        response.put("status", "error");
        response.put("message", "Password and Confirm Password do not match");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }


}
