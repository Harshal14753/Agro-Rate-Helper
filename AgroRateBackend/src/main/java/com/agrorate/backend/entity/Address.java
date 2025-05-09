package com.agrorate.backend.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.IdGeneratorType;

@Entity
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String village;
    private String taluka;
    private String district;
    private String state;
    private String pincode;

    @OneToOne(mappedBy = "address")  // Inverse side
    private User user;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVillage() {
        return village;
    }

    public void setVillage(String village) {
        this.village = village;
    }

    public String getTaluka() {
        return taluka;
    }

    public void setTaluka(String taluka) {
        this.taluka = taluka;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Address() {
    }

    public Address(String pincode, String state, String district, String taluka, String village,User user) {
        this.pincode = pincode;
        this.state = state;
        this.district = district;
        this.taluka = taluka;
        this.village = village;
        this.user = user;
    }
}