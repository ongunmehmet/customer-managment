package com.sahabt.customer.controller;

import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.request.CustomerUpdateRequest;
import com.sahabt.customer.dto.response.CustomerAddResponse;
import com.sahabt.customer.dto.response.CustomerResponse;
import com.sahabt.customer.model.Customer;
import com.sahabt.customer.repository.CustomerRepository;
import com.sahabt.customer.service.CustomerService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;

@RequestScope
@RestController
@RequestMapping("/customers")
public class CustomerRestController {
    private final CustomerService customerService;
    private final CustomerRepository customerRepository;
    public CustomerRestController(CustomerService customerService, CustomerRepository customerRepository) {
        this.customerService = customerService;
        this.customerRepository = customerRepository;
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
    @GetMapping
    public List<Customer> findCustomer(@RequestParam(required = false) String companyName,@RequestParam(required = false) String taxNo,
                                       @RequestParam(required = false) String customerId,@RequestParam(required = false) String sector){

        return customerRepository.findCustomersByCompanyNameOrTaxNoOrCustomerIdOrSector(companyName, taxNo, customerId, sector);
    }


}
