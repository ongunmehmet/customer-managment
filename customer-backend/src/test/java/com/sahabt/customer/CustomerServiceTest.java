package com.sahabt.customer;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.request.CustomerUpdateRequest;
import com.sahabt.customer.dto.request.GetInformantationCustomerRequest;
import com.sahabt.customer.dto.response.CustomerAddResponse;
import com.sahabt.customer.dto.response.CustomerResponse;
import com.sahabt.customer.exception.CustomerNotFoundException;
import com.sahabt.customer.model.Customer;
import com.sahabt.customer.service.CustomerService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
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

import java.util.List;
import java.util.Optional;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

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

    Customer customer1 = new Customer("84b11798-a3f6-4597-9d33-184d88508af8", "Sahabt", "5555555555", "sahabtexample@gmail.com", "Bilisim", "Istanbul", "Kartal", "Istanbul", "Kartal", "2000000000");
    Customer customer2 = new Customer("84b11798-a3f6-4597-9d33-184d88508af8", "Netsys", "5555555555", "sahabtexample@gmail.com", "Ticaret", "Istanbul", "Kartal", "Istanbul", "Kartal", "3000000000");

    @ParameterizedTest
    @CsvFileSource(resources = "/customers.csv")
    void createCustomerShouldReturnOk(
            String companyName,
            String phone,
            String email,
            String sector,
            String city,
            String district,
            String taxAdministrationCity,
            String taxAdministrationName,
            String taxNo
    ) throws Throwable {
        var request = new CustomerAddRequest();
        request.setCompanyName(companyName);
        request.setEmail(email);
        request.setPhone(phone);
        request.setSector(sector);
        request.setCity(city);
        request.setDistrict(district);
        request.setTaxAdministrationCity(taxAdministrationCity);
        request.setTaxAdministrationName(taxAdministrationName);
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
                .andExpect(jsonPath("$.taxAdministrationCity", is(taxAdministrationCity)))
                .andExpect(jsonPath("$.taxAdministrationName", is(taxAdministrationName)))
                .andExpect(jsonPath("$.taxNo", is(taxNo)));

    }

    @Nested
    @DisplayName("Test Cases For Remove Customer")
    class RemoveCustomer{
        @ParameterizedTest
        @CsvFileSource(resources = "/customers.csv",numLinesToSkip = 1)
        @DisplayName("Remove Customer Should Return Ok")
        void removeCustomerByIdShouldReturnOk(
                String customerId,
                String companyName,
                String phone,
                String email,
                String sector,
                String city,
                String district,
                String taxAdministrationCity,
                String taxAdministrationName,
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
            response.setTaxAdministrationCity(taxAdministrationCity);
            response.setTaxAdministrationName(taxAdministrationName);
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
                    .andExpect(jsonPath("$.taxAdministrationCity", is(taxAdministrationCity)))
                    .andExpect(jsonPath("$.taxAdministrationName", is(taxAdministrationName)))
                    .andExpect(jsonPath("$.taxNo", is(taxNo)));
        }

        @ParameterizedTest
        @CsvFileSource(resources = "/customers.csv",numLinesToSkip = 1)
        @DisplayName("Remove Customer Should Return CustomerNotFound")
        void removeCustomerByIdShouldReturnNotFound(
                String customerId
        )throws Throwable{
            var customerNotFoundException = new CustomerNotFoundException("Customer Not Found!");
            Mockito.when(customerService.removeById(customerId))
                    .thenThrow(customerNotFoundException);

            mockMvc.perform(
                    delete("/customers/delete/"+customerId)
                            .accept(MediaType.APPLICATION_JSON)
            )
                    .andExpect(status().isNotFound());
        }
    }
    @Nested
    @DisplayName("Test Cases For Update Customer")
    class UpdateCustomer{
        @ParameterizedTest
        @CsvFileSource(resources = "/customers.csv",numLinesToSkip = 1)
        @DisplayName("Update Customer Should Return Ok")
        void updateCustomerShouldReturnOk(
                String customerId,
                String companyName,
                String phone,
                String email,
                String sector,
                String city,
                String district,
                String taxAdministrationCity,
                String taxAdministrationName,
                String taxNo
        )throws Throwable{
            var request = CustomerUpdateRequest.builder()
                    .customerId(customerId)
                    .companyName(companyName)
                    .city("Aksaray")
                    .district(district)
                    .email(email)
                    .phone(phone)
                    .sector(sector)
                    .taxAdministrationCity(taxAdministrationCity)
                    .taxAdministrationName(taxAdministrationName)
                    .taxNo(taxNo).build();

            var response = modelMapper.map(request,CustomerResponse.class);
            Mockito.when(customerService.updateCustomer(request))
                    .thenReturn(Optional.ofNullable(response));
            mockMvc.perform(
                            put("/customers/update")
                                    .accept(MediaType.APPLICATION_JSON)
                                    .contentType(MediaType.APPLICATION_JSON)
                                    .content(objectMapper.writeValueAsString(request))

                    )
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.companyName", is(companyName)))
                    .andExpect(jsonPath("$.email", is(email)))
                    .andExpect(jsonPath("$.phone", is(phone)))
                    .andExpect(jsonPath("$.city", is("Aksaray")))
                    .andExpect(jsonPath("$.district", is(district)))
                    .andExpect(jsonPath("$.taxAdministrationCity", is(taxAdministrationCity)))
                    .andExpect(jsonPath("$.taxAdministrationCity", is(taxAdministrationCity)))
                    .andExpect(jsonPath("$.taxNo", is(taxNo)));
        }
        @ParameterizedTest
        @CsvFileSource(resources = "/customers.csv",numLinesToSkip = 1)
        @DisplayName("Update Customer Should Return Customer Not Found")
        void updateCustomerShouldReturnCustomerNotFound(
                String customerId,
                String companyName,
                String phone,
                String email,
                String sector,
                String city,
                String district,
                String taxAdministrationCity,
                String taxAdministrationName,
                String taxNo
        ) throws Throwable {
            var request = CustomerUpdateRequest.builder()
                    .customerId(customerId)
                    .companyName(companyName)
                    .city(city)
                    .district(district)
                    .email(email)
                    .phone(phone)
                    .sector(sector)
                    .taxAdministrationCity(taxAdministrationCity)
                    .taxAdministrationName(taxAdministrationName)
                    .taxNo(taxNo).build();
            var customerNotFoundException = new CustomerNotFoundException("Customer Not Found");
            Mockito.when(customerService.updateCustomer(request))
                    .thenThrow(customerNotFoundException);
            mockMvc.perform(
                    put("/customers/update")
                            .accept(MediaType.APPLICATION_JSON)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(request))

            )
                    .andExpect(status().isNotFound())
                    .andReturn();
        }
    }
    @Nested
    @DisplayName("Test Cases For Get Customers With Parameters")
    class getCustomerByParameters{

        @Test
        @DisplayName("Get Customers By Parameters Should Return Ok")
        void getCustomersByParamsShouldReturnOk() throws Throwable {
            var request = GetInformantationCustomerRequest.builder()
                    .companyName("")
                    .sector("Bilisim")
                    .taxNo("").build();
            CustomerResponse customerResponse1 = new CustomerResponse("84b11798-a3f6-4597-9d33-184d88508af8","Sahabt","5555555555","sahabtexample@gmail.com","Bilisim","Istanbul","Kartal","Istanbul","Kartal","2000000000");
            CustomerResponse customerResponse2 = new CustomerResponse("84b11798-a3f6-4597-9d33-184d88508af9","Netsys","5555555555","sahabtexample@gmail.com","Bilisim","Istanbul","Kartal","Istanbul","Kartal","2000000000");

            Mockito.when(customerService.findCustomers(request))
                    .thenReturn(List.of(customerResponse1,customerResponse2));
            mockMvc.perform(
                    post("/customers/getCustomers")
                            .accept(MediaType.APPLICATION_JSON)
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(request))
            ).andExpect(status().isOk())
                    .andExpect(jsonPath("$",hasSize(1)))
                    .andExpect(jsonPath("$[0].companyName",is("Sahabt")))
                    .andExpect(jsonPath("$[0].companyName",is("Netsys")))

                    .andDo(result -> System.out.println(customerResponse1))
                    .andReturn();
            Mockito.verify(customerService).findCustomers(request);
        }
        @Test
        @DisplayName("Get Customers By Parameters Should Return CustomerNotFound")
        void getCustomersByParamsShouldReturnCustomerNotFound()throws Throwable{
            var request = GetInformantationCustomerRequest.builder()
                    .taxNo("")
                    .companyName("XYZ")
                    .sector("").build();
            var customerNotFoundException = new CustomerNotFoundException("Customer Not Found");
            Mockito.when(customerService.findCustomers(request))
                    .thenThrow(customerNotFoundException);
            mockMvc.perform(
                    post("/customers/getCustomers")
                            .accept(MediaType.APPLICATION_JSON)
            ).andExpect(status().isNotFound());
        }

    }
    @Test
    void getAllCustomersTest() throws Throwable {
        CustomerResponse customerResponse1 = new CustomerResponse("84b11798-a3f6-4597-9d33-184d88508af8","Sahabt","5555555555","sahabtexample@gmail.com","Bilisim","Istanbul","Kartal","Istanbul","Kartal","2000000000");
        CustomerResponse customerResponse2 = new CustomerResponse("84b11798-a3f6-4597-9d33-184d88508af9","Netsys","5555555555","sahabtexample@gmail.com","Ticaret","Istanbul","Kartal","Istanbul","Kartal","3000000000");


        Mockito.when(customerService.findAll(0,2)).thenReturn(List.of(customerResponse1,customerResponse2));
        mockMvc.perform(
                get("/customers?pageNo=0&pageSize=2")
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$",hasSize(2)))
                .andExpect(jsonPath("$.length()",is(2)))
                .andExpect(jsonPath("$[0].customerId",is("84b11798-a3f6-4597-9d33-184d88508af8")));

        Mockito.verify(customerService).findAll(0,2);
    }

}
