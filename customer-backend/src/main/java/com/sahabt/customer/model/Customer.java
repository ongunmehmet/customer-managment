package com.sahabt.customer.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Entity(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column( updatable = false, nullable = false)
    private String customerId;
    private String  companyName;
    private String  phone;
    private String  gmail;
    private String  sector;
    private String  city;
    private String  district;
    private String  taxAdmistrationCity;
    private String  taxAdmistrationName;
    @Column(unique = true)
    private String  taxNo;
    @Column(unique = true)
    private String  registrationNo;





}
