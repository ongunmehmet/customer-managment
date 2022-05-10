package com.sahabt.customer.controller;

import com.sahabt.customer.dto.request.CustomerAddRequest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.annotation.RequestScope;

import java.util.Optional;

@RequestScope
@RestController
@RequestMapping("/")
public class CustomerRestController {

    @PostMapping
    public Optional<String> createCustomer(@RequestBody CustomerAddRequest customerAddRequest){

        return Optional.empty();
    }

}
