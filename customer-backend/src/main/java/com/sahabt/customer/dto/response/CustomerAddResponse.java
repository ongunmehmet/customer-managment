package com.sahabt.customer.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerAddResponse {
    private String customerId;
    private String companyName;
    private String phone;
    private String email;
    private String sector;
    private String city;
    private String district;
    private String taxAdministrationCity;
    private String taxAdministrationName;
    private String taxNo;
}
