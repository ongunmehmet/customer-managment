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
import javax.validation.constraints.Pattern;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerAddRequest {

    @CompanyValidate
    private String  companyName;
    @ValidPhoneNumber
    private String  phone;
    @Email
    private String  email;
    @NotBlank
    private String  sector;
    @NotBlank
    private String  city;
    @NotBlank
    private String  district;
    @NotBlank
    private String  taxAdministrationCity;
    @NotBlank
    private String  taxAdministrationName;
    @ValidTaxNo
    @NotBlank
    private String  taxNo;
}
