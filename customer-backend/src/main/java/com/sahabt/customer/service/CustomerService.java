package com.sahabt.customer.service;

import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.request.CustomerUpdateRequest;
import com.sahabt.customer.dto.request.GetInformantationCustomerRequest;
import com.sahabt.customer.dto.response.CustomerAddResponse;
import com.sahabt.customer.dto.response.CustomerResponse;

import java.util.List;
import java.util.Optional;

public interface CustomerService {

    Optional<CustomerAddResponse> createCustomer(CustomerAddRequest request);
    Optional<CustomerResponse> removeById(String id);
    Optional<CustomerResponse> updateCustomer(String id, CustomerUpdateRequest updateRequest);
    List<CustomerResponse> findCustomers(GetInformantationCustomerRequest request);

    List<CustomerResponse> findAll(int pageNo, int pageSize);
}
