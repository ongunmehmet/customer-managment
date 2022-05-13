package com.sahabt.customer.service.business;

import com.sahabt.customer.dto.request.CustomerAddRequest;
import com.sahabt.customer.dto.request.CustomerUpdateRequest;
import com.sahabt.customer.dto.request.GetInformantationCustomerRequest;
import com.sahabt.customer.dto.response.CustomerAddResponse;
import com.sahabt.customer.dto.response.CustomerResponse;
import com.sahabt.customer.exception.CustomerNotFoundException;
import com.sahabt.customer.model.Customer;
import com.sahabt.customer.repository.CustomerRepository;
import com.sahabt.customer.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerImp implements CustomerService {
    private final ModelMapper modelMapper;
    private final CustomerRepository customerRepository;

    public CustomerImp(ModelMapper modelMapper, CustomerRepository customerRepository) {
        this.modelMapper = modelMapper;
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional
    public Optional<CustomerAddResponse> createCustomer(CustomerAddRequest request) {
        var customer = modelMapper.map(request, Customer.class);

        return Optional.of(modelMapper.map(customerRepository.save(customer), CustomerAddResponse.class));

    }

    @Override
    @Transactional
    public Optional<CustomerResponse> removeById(String id) {
        var customer = customerRepository.findById(id).orElseThrow();
        customerRepository.deleteById(id);
        return Optional.of(modelMapper.map(customer,CustomerResponse.class));
    }

    @Override
    @Transactional
    public Optional<CustomerResponse> updateCustomer(String id, CustomerUpdateRequest updateRequest) {
        var customer = customerRepository.findById(id).orElseThrow();
        modelMapper.map(updateRequest,customer);
        return Optional.of(modelMapper.map(customerRepository.saveAndFlush(customer),CustomerResponse.class));

    }

    @Override
    @Transactional
    public List<CustomerResponse> findCustomers(GetInformantationCustomerRequest request) {

        var list = customerRepository.findCustomersByCompanyNameOrTaxNoOrSector(request.getCompanyName(), request.getTaxNo(), request.getSector())
                .stream()
                .map(customer -> modelMapper.map(customer, CustomerResponse.class))
                .sorted(Comparator.comparing(CustomerResponse::getCompanyName))
                .toList();
        if (list.isEmpty()){
            throw new CustomerNotFoundException("Kullanıcı bulunamadı");
        }
        return list;
    }

    @Override
    public List<CustomerResponse> findAll(int pageNo, int pageSize) {
        return customerRepository.findAll(PageRequest.of(pageNo,pageSize)).stream().map(customer -> modelMapper.map(customer,CustomerResponse.class))
                .sorted(Comparator.comparing(CustomerResponse::getCompanyName))
                .toList();
    }
}
