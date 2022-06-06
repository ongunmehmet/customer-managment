package com.sahabt.customer.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class TaxNoValidate implements ConstraintValidator<ValidTaxNo,String> {


    @Override
    public void initialize(ValidTaxNo constraintAnnotation) {


    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        return s != null && s.matches("[0-9]{9,10}");

    }
}
