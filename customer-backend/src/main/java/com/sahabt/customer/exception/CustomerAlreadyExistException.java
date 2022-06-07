package com.sahabt.customer.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Data
@AllArgsConstructor
@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class CustomerAlreadyExistException extends RuntimeException{
    String message;
}
