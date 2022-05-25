package com.sahabt.customer;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.response.CustomerAddResponse;
import com.sahabt.customer.dto.response.CustomerResponse;
import com.sahabt.customer.service.CustomerService;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(
        classes = CustomerApplication.class,
        webEnvironment = WebEnvironment.MOCK
)
@AutoConfigureMockMvc
public class CustomerServiceTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    CustomerService customerService;

    @ParameterizedTest
    @CsvFileSource(resources = "/customers.csv")
    void createCustomerShouldReturnOk(
            String companyName,
            String phone,
            String email,
            String sector,
            String city,
            String district,
            String taxAdmistrationCity,
            String taxAdmistrationName,
            String taxNo
    ) throws Throwable {
        var request = new CustomerAddRequest();
        request.setCompanyName(companyName);
        request.setEmail(email);
        request.setPhone(phone);
        request.setSector(sector);
        request.setCity(city);
        request.setDistrict(district);
        request.setTaxAdmistrationCity(taxAdmistrationCity);
        request.setTaxAdmistrationName(taxAdmistrationName);
        request.setTaxNo(taxNo);
        var response = modelMapper.map(request,
                CustomerAddResponse.class);
        Mockito.when(customerService.createCustomer(request))
                .thenReturn(Optional.ofNullable(response));
        // 2. Call exercise method
        mockMvc.perform(
                        post("/customers/add")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(objectMapper.writeValueAsString(request))
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.companyName", is(companyName)))
                .andExpect(jsonPath("$.email", is(email)))
                .andExpect(jsonPath("$.phone", is(phone)))
                .andExpect(jsonPath("$.city", is(city)))
                .andExpect(jsonPath("$.district", is(district)))
                .andExpect(jsonPath("$.taxAdmistrationCity", is(taxAdmistrationCity)))
                .andExpect(jsonPath("$.taxAdmistrationCity", is(taxAdmistrationCity)))
                .andExpect(jsonPath("$.taxNo", is(taxNo)));

    }

    @ParameterizedTest
    @CsvFileSource(resources = "/customers.csv",numLinesToSkip = 1)
    void removeCustomerByIdShouldReturnOk(
            String customerId,
            String companyName,
            String phone,
            String email,
            String sector,
            String city,
            String district,
            String taxAdmistrationCity,
            String taxAdmistrationName,
            String taxNo
    )throws Throwable{
        var response = new CustomerResponse();
        response.setCustomerId(customerId);
        response.setCompanyName(companyName);
        response.setEmail(email);
        response.setPhone(phone);
        response.setSector(sector);
        response.setCity(city);
        response.setDistrict(district);
        response.setTaxAdmistrationCity(taxAdmistrationCity);
        response.setTaxAdmistrationName(taxAdmistrationName);
        response.setTaxNo(taxNo);
        Mockito.when(customerService.removeById(customerId))
                .thenReturn(Optional.of(response));
        mockMvc.perform(
                        delete("/customers/delete/"+customerId).accept(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.customerId", is(customerId)))
                .andExpect(jsonPath("$.companyName", is(companyName)))
                .andExpect(jsonPath("$.email", is(email)))
                .andExpect(jsonPath("$.phone", is(phone)))
                .andExpect(jsonPath("$.city", is(city)))
                .andExpect(jsonPath("$.district", is(district)))
                .andExpect(jsonPath("$.taxAdmistrationCity", is(taxAdmistrationCity)))
                .andExpect(jsonPath("$.taxAdmistrationCity", is(taxAdmistrationCity)))
                .andExpect(jsonPath("$.taxNo", is(taxNo)));
    }




}
