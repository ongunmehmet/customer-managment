package com.sahabt.customer.service.business;

import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.request.CustomerUpdateRequest;
import com.sahabt.customer.dto.response.CustomerAddResponse;
import com.sahabt.customer.dto.response.CustomerResponse;
import com.sahabt.customer.model.Customer;
import com.sahabt.customer.repository.CustomerRepository;
import com.sahabt.customer.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class CustomerImp implements CustomerService {
    private final ModelMapper modelMapper;
    private final CustomerRepository customerRepository;

    public CustomerImp(ModelMapper modelMapper, CustomerRepository customerRepository) {
        this.modelMapper = modelMapper;
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional
    public CustomerAddResponse createCustomer(CustomerAddRequest request) {
        var customer = modelMapper.map(request, Customer.class);

        return modelMapper.map(customerRepository.save(customer), CustomerAddResponse.class);

    }

    @Override
    @Transactional
    public CustomerResponse removeById(String id) {
        var customer = customerRepository.findById(id).orElseThrow();
        customerRepository.deleteById(id);
        return modelMapper.map(customer,CustomerResponse.class);
    }

    @Override
    @Transactional
    public CustomerResponse updateCustomer(String id, CustomerUpdateRequest updateRequest) {
        var customer = customerRepository.findById(id).orElseThrow();
        modelMapper.map(updateRequest,customer);
        return modelMapper.map(customerRepository.saveAndFlush(customer),CustomerResponse.class);

    }
}
