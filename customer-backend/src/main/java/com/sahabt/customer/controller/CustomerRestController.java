package com.sahabt.customer.controller;

import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.request.CustomerUpdateRequest;
import com.sahabt.customer.dto.response.CustomerAddResponse;
import com.sahabt.customer.dto.response.CustomerResponse;
import com.sahabt.customer.model.Customer;
import com.sahabt.customer.service.CustomerService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import javax.annotation.PostConstruct;
import java.util.Objects;
import java.util.Optional;

@RequestScope
@RestController
@RequestMapping("/customers")
public class CustomerRestController {
    private final CustomerService customerService;
    public CustomerRestController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping
    public CustomerAddResponse createCustomer(@RequestBody CustomerAddRequest customerAddRequest) {
        return customerService.createCustomer(customerAddRequest);
    }
    @DeleteMapping("{id}")
    public CustomerResponse deleteCustomerById(@PathVariable String id){
        return customerService.removeById(id);
    }

    @PutMapping(value = "{id}")
    public CustomerResponse updateCustomer(String id, @RequestBody CustomerUpdateRequest updateRequest){
        return customerService.updateCustomer(id,updateRequest);
    }


}
