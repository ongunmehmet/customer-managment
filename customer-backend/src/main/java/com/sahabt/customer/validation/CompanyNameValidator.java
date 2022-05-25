package com.sahabt.customer.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class CompanyNameValidator implements ConstraintValidator<CompanyValidate,String> {

    @Override
    public void initialize(CompanyValidate constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        if(s.length() < 1 || !s.matches("^[a-zA-Z0-9]*$"))
            return false;
        else
            return true;
    }
}
