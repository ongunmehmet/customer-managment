package com.sahabt.customer.repository;

import com.sahabt.customer.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,String> {
    List<Customer> findCustomersByCompanyNameOrTaxNoOrCustomerIdOrSector(String companyName, String taxNo, String customerId, String sector);
}
