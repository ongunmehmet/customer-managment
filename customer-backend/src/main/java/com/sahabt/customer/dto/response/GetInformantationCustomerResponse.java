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
    private String customerId;
    private String companyName;
    private String taxNo;
    private String sector;
    private String phone;
    private String email;

}
