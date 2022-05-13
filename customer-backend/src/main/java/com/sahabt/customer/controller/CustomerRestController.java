package com.sahabt.customer.controller;

import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.request.CustomerUpdateRequest;
import com.sahabt.customer.dto.request.GetInformantationCustomerRequest;
import com.sahabt.customer.dto.response.CustomerAddResponse;
import com.sahabt.customer.dto.response.CustomerResponse;
//import com.sahabt.customer.exception.CustomerNotFoundException;
import com.sahabt.customer.model.Customer;
import com.sahabt.customer.repository.CustomerRepository;
import com.sahabt.customer.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.lang.invoke.MethodType;
import java.util.List;
import java.util.Optional;

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

    @PostMapping(value = "/add" ,produces = MediaType.APPLICATION_JSON_VALUE ,consumes = MediaType.APPLICATION_JSON_VALUE)
    public Optional<CustomerAddResponse> createCustomer(@RequestBody CustomerAddRequest customerAddRequest) {


        return customerService.createCustomer(customerAddRequest);
    }
    @PostMapping(value = "/add2" ,produces = MediaType.APPLICATION_JSON_VALUE ,consumes = MediaType.APPLICATION_JSON_VALUE)
    public CustomerAddRequest createCustomer2(@RequestBody CustomerAddRequest customerAddRequest) {


        return customerAddRequest;
    }
    @DeleteMapping("/delete/{id}")
    public Optional<CustomerResponse> deleteCustomerById(@PathVariable String id){
        return customerService.removeById(id);
    }

    @PutMapping(value = "/update/{id}")
    public Optional<CustomerResponse> updateCustomer(@PathVariable String id, @RequestBody CustomerUpdateRequest updateRequest){
        return customerService.updateCustomer(id,updateRequest);
    }

    @PostMapping("/getCustomers")
    public List<CustomerResponse> findCustomer(GetInformantationCustomerRequest request){
        return customerService.findCustomers(request);

    }
    @GetMapping

    public List<CustomerResponse> findAllCustomers(@RequestParam(defaultValue = "0", required = false) int pageNo, @RequestParam(defaultValue = "20",required = false) int pageSize){
        return customerService.findAll(pageNo, pageSize);
    }
//
//    @ExceptionHandler(value = CustomerNotFoundException.class)
//    public ResponseEntity<Object> exception (CustomerNotFoundException exception){
//        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
//    }

}
