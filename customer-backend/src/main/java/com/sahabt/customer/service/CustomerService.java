package com.sahabt.customer.service;

import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.request.CustomerUpdateRequest;
import com.sahabt.customer.dto.response.CustomerAddResponse;
import com.sahabt.customer.dto.response.CustomerResponse;

public interface CustomerService {

    CustomerAddResponse createCustomer(CustomerAddRequest request);
    CustomerResponse removeById(String id);
    CustomerResponse updateCustomer(String id, CustomerUpdateRequest updateRequest);
}
