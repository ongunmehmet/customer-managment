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
import java.util.function.Supplier;

@Service
public class CustomerImp implements CustomerService {
    private static final Supplier<CustomerNotFoundException> customerNotFoundExceptionSupplier =
            () -> new CustomerNotFoundException("Kullanıcı Bulunamadı");
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
    public Optional<CustomerResponse> removeById(String customerId) {
        var customer = customerRepository.findById(customerId).orElseThrow(customerNotFoundExceptionSupplier);
        customerRepository.deleteById(customerId);
        return Optional.of(modelMapper.map(customer,CustomerResponse.class));
    }

    @Override
    @Transactional
    public Optional<CustomerResponse> updateCustomer(CustomerUpdateRequest updateRequest) {
        var customer = customerRepository.findById(updateRequest.getCustomerId()).orElseThrow(customerNotFoundExceptionSupplier);
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
            throw customerNotFoundExceptionSupplier.get();
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
