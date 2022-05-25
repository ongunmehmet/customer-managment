package com.sahabt.customer.dto.request;

import com.sahabt.customer.validation.CompanyValidate;
import com.sahabt.customer.validation.ValidTaxNo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetInformantationCustomerRequest {
    private String  companyName;
    private String  sector;
    private String  taxNo;
}
