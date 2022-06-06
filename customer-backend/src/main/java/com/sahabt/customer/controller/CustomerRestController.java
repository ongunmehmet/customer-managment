package com.sahabt.customer.controller;

import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.request.CustomerUpdateRequest;
import com.sahabt.customer.dto.request.GetInformantationCustomerRequest;
import com.sahabt.customer.dto.response.CustomerAddResponse;
import com.sahabt.customer.dto.response.CustomerResponse;
import com.sahabt.customer.exception.CustomerNotFoundException;
import com.sahabt.customer.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RequestScope
@RestController
@RequestMapping("/customers")
@Validated
@CrossOrigin
public class CustomerRestController {
    private final CustomerService customerService;
    public CustomerRestController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping(value = "/add" ,produces = MediaType.APPLICATION_JSON_VALUE ,consumes = MediaType.APPLICATION_JSON_VALUE)
    public Optional<CustomerAddResponse> createCustomer(@RequestBody @Valid CustomerAddRequest customerAddRequest) {
        return customerService.createCustomer(customerAddRequest);
    }
    @DeleteMapping("/delete/{customerId}")
    public Optional<CustomerResponse> deleteCustomerById(@PathVariable String customerId){
        return customerService.removeById(customerId);
    }

    @PutMapping(value = "/update")
    public Optional<CustomerResponse> updateCustomer(@Valid @RequestBody CustomerUpdateRequest updateRequest){
        return customerService.updateCustomer(updateRequest);
    }

    @PostMapping("/getCustomers")
    public List<CustomerResponse> findCustomer(@RequestBody GetInformantationCustomerRequest request){
        if (request.getCompanyName().equals("") && request.getSector().equals("") && request.getTaxNo().equals("")){
            throw new CustomerNotFoundException("Alanlara değer girilmedi.");
        }
        return customerService.findCustomers(request);

    }
    @GetMapping
    public List<CustomerResponse> findAllCustomers(@RequestParam(defaultValue = "0", required = false) int pageNo, @RequestParam(defaultValue = "20",required = false) int pageSize){
        return customerService.findAll(pageNo, pageSize);
    }


    @ExceptionHandler(value = CustomerNotFoundException.class)
    public ResponseEntity<Object> exception (CustomerNotFoundException exception){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

}
