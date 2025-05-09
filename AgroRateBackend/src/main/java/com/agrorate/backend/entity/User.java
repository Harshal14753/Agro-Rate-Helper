package com.agrorate.backend.entity;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column(nullable = false, unique = true, updatable = false)
    private UUID uuid = UUID.randomUUID();

    private String fullname;
    private String fatherName;

    @Column(unique = true, nullable = false)
    private String mobileNo;
    private String alternateMobileNo;
    private Gender gender;
    private String aadhaarNo;
    private Role role;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    private Farming farmingType;
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getAlternateMobileNo() {
        return alternateMobileNo;
    }

    public void setAlternateMobileNo(String alternateMobileNo) {
        this.alternateMobileNo = alternateMobileNo;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getAadhaarNo() {
        return aadhaarNo;
    }

    public void setAadhaarNo(String aadhaarNo) {
        aadhaarNo = aadhaarNo;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Farming getFarmingType() {
        return farmingType;
    }

    public void setFarmingType(Farming farmingType) {
        this.farmingType = farmingType;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public User() {
    }

    public User(String fullname, String fatherName, String mobileNo, String alternateMobileNo, Gender gender, String aadhaarNo, Address address, Farming farmingType, String password, Role role) {
        this.fullname = fullname;
        this.fatherName = fatherName;
        this.mobileNo = mobileNo;
        this.alternateMobileNo = alternateMobileNo;
        this.gender = gender;
        this.aadhaarNo = aadhaarNo;
        this.address = address;
        this.farmingType = farmingType;
        this.password = password;
        this.role = role;
    }
}
