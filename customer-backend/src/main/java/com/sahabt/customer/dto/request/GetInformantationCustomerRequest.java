package com.sahabt.customer.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetInformantationCustomerRequest {
    private String  companyName;
    private String  sector;
    private String  taxNo;
}
