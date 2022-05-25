package com.sahabt.customer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;

@RestControllerAdvice
public class ErrorHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public List<FieldErrorMessage> handleMethodArgumentNotValidException(
            MethodArgumentNotValidException e) {
        return e.getAllErrors()
                .stream()
                .map(oe -> new FieldErrorMessage(oe.getObjectName(), oe.getDefaultMessage()))
                .toList();
    }
}
record FieldErrorMessage(String field, String message){}
