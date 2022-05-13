package com.sahabt.customer.model;

import com.sahabt.customer.validation.CompanyValidate;
import com.sahabt.customer.validation.ValidPhoneNumber;
import com.sahabt.customer.validation.ValidTaxNo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

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
    @CompanyValidate
    @Column(nullable = false)
    private String  companyName;
    @ValidPhoneNumber
    //TODO bu anatasyon çalışırsa validPhoneNumber gerek kalmaz @Pattern(regexp ="[0-9\\s]{11}")
    @Column(nullable = false,unique = true)
    private String  phone;
    @Email
    @Column(nullable = false,unique = true)
    private String  email;
    private String  sector;
    private String  city;
    private String  district;
    private String  taxAdmistrationCity;
    private String  taxAdmistrationName;
    @ValidTaxNo
    @Column(unique = true)
    @NotNull
    private String  taxNo;

}
