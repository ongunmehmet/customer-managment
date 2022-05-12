package com.sahabt.customer.config;

import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.request.CustomerUpdateRequest;
import com.sahabt.customer.dto.response.CustomerResponse;
import com.sahabt.customer.model.Customer;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {
    private static final Converter<CustomerAddRequest, Customer> CUSTOMER_ADD_REQUEST_TO_CUSTOMER_CONVERTER =
            (context) -> {
                var customer = new Customer();
                var request = context.getSource();
                customer.setCompanyName(request.getCompanyName());
                customer.setPhone(request.getPhone());
                customer.setEmail(request.getEmail());
                customer.setSector(request.getSector());
                customer.setCity(request.getCity());
                customer.setDistrict(request.getDistrict());
                customer.setTaxAdmistrationCity(request.getTaxAdmistrationCity());
                customer.setTaxAdmistrationName(request.getTaxAdmistrationName());
                customer.setTaxNo(request.getTaxNo());
                return customer;
            };
    private static final Converter<CustomerUpdateRequest, Customer> CUSTOMER_UPDATE_REQUEST_TO_CUSTOMER_CONVERTER =
            (context) -> {
                var customer = context.getDestination();
                var request = context.getSource();
                customer.setCompanyName(request.getCompanyName());
                customer.setPhone(request.getPhone());
                customer.setEmail(request.getEmail());
                customer.setSector(request.getSector());
                customer.setCity(request.getCity());
                customer.setDistrict(request.getDistrict());
                customer.setTaxAdmistrationCity(request.getTaxAdmistrationCity());
                customer.setTaxAdmistrationName(request.getTaxAdmistrationName());
                customer.setTaxNo(request.getTaxNo());
                return customer;
            };

    @Bean
    public ModelMapper mapper() {
        var mapper = new ModelMapper();
        mapper.addConverter(CUSTOMER_ADD_REQUEST_TO_CUSTOMER_CONVERTER,CustomerAddRequest.class,Customer.class);
        mapper.addConverter(CUSTOMER_UPDATE_REQUEST_TO_CUSTOMER_CONVERTER,CustomerUpdateRequest.class,Customer.class);
        return mapper;
    }
}
