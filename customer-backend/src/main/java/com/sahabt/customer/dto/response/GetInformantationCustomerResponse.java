package com.sahabt.customer.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetInformantationCustomerResponse {

    private String  companyName;
    private String  registrationNo;
    private String  taxAdmistrationName;
    private String  sector;
    private String  phone;
    private String  email;
    private String  gmail2;

}
