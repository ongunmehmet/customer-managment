package com.sahabt.customer.repository;

import com.sahabt.customer.dto.response.CustomerResponse;
import com.sahabt.customer.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,String> {
    List<Customer> findCustomersByCompanyNameOrTaxNoOrSector(String companyName, String taxNo, String sector);
}
