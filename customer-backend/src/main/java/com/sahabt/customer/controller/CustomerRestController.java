package com.sahabt.customer.controller;

import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.response.CustomerAddResponse;
import com.sahabt.customer.model.Customer;
import com.sahabt.customer.repository.CustomerRepository;
import com.sahabt.customer.service.CustomerService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;

@RequestScope
@RestController
@RequestMapping("/customers")
@CrossOrigin
public class CustomerRestController {
    private final CustomerService customerService;
    private final CustomerRepository customerRepository;
    public CustomerRestController(CustomerService customerService, CustomerRepository customerRepository) {
        this.customerService = customerService;
        this.customerRepository = customerRepository;
    }

    @PostMapping(produces =MediaType.APPLICATION_JSON_VALUE , consumes = MediaType.APPLICATION_JSON_VALUE)
    public CustomerAddResponse createCustomer(@RequestBody CustomerAddRequest customerAddRequest) {
        System.out.println(customerAddRequest);

        return customerService.createCustomer(customerAddRequest);
    }
//    @DeleteMapping("{id}")
//    public CustomerResponse deleteCustomerById(@PathVariable String id){
//        return customerService.removeById(id);
//    }
//
//    @PutMapping(value = "{id}")
//    public CustomerResponse updateCustomer(String id, @RequestBody CustomerUpdateRequest updateRequest){
//        return customerService.updateCustomer(id,updateRequest);
//    }
    @GetMapping("/getCustomers")
    public List<Customer> findCustomer(@RequestParam(required = false) String companyName,@RequestParam(required = false) String taxNo,
                                       @RequestParam(required = false) String customerId,@RequestParam(required = false) String sector){

        return customerRepository.findCustomersByCompanyNameOrTaxNoOrCustomerIdOrSector(companyName, taxNo, customerId, sector);
    }

    @GetMapping
    public List<Customer> findCustomer(){

       var c=   Customer.builder()
               .customerId("aaaaaaaa1")
               .companyName("remzi")
               .build();
        return List.of(c);//customerRepository.findAll();
    }

}
