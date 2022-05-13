package com.sahabt.customer.dto.request;

import com.sahabt.customer.validation.CompanyValidate;
import com.sahabt.customer.validation.ValidPhoneNumber;
import com.sahabt.customer.validation.ValidTaxNo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerAddRequest {

    @CompanyValidate
    @NotBlank
    private String  companyName;
    @ValidPhoneNumber
    //@Pattern(regexp ="[0-9\\s]{11}")
    @NotNull
    private String  phone;
    @Email
    private String  email;
    private String  sector;
    private String  city;
    private String  district;
    private String  taxAdmistrationCity;
    private String  taxAdmistrationName;
    @ValidTaxNo
    @NotNull
    private String  taxNo;
}
