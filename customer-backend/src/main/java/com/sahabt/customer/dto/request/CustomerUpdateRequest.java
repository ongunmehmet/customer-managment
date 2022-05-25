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
public class CustomerUpdateRequest {

    private String customerId;
    @CompanyValidate
    @NotBlank
    private String  companyName;
    @ValidPhoneNumber
    @Pattern(regexp ="[0-9\\s]{11}")
    @NotNull
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
    private String  taxAdmistrationCity;
    @NotBlank
    private String  taxAdmistrationName;
    @ValidTaxNo
    @NotBlank
    private String  taxNo;
}
