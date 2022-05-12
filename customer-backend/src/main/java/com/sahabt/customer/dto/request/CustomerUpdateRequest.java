package com.sahabt.customer.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerUpdateRequest {
    private String  companyName;
    private String  phone;
    private String  email;
    private String  sector;
    private String  city;
    private String  district;
    private String  taxAdmistrationCity;
    private String  taxAdmistrationName;
    private String  taxNo;
}
