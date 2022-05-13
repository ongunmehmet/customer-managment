package com.sahabt.customer.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class TaxNoValidate implements ConstraintValidator<ValidTaxNo,String> {


    public static boolean isVKNV(String vkn) {
        int tmp;
        int sum = 0;
        if (vkn != null && vkn.length() == 10 && isVKNV(vkn)) {
            int lastDigit = Character.getNumericValue(vkn.charAt(9));
            for (int i = 0; i < 9; i++) {
                int digit = Character.getNumericValue(vkn.charAt(i));
                tmp = (digit + 10 - (i + 1)) % 10;
                sum = (int) (tmp == 9 ? sum + tmp : sum + ((tmp * (Math.pow(2, 10 - (i + 1)))) % 9));
            }
            return lastDigit == (10 - (sum % 10)) % 10;
        }
        return false;
    }
    @Override
    public void initialize(ValidTaxNo constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);

    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        for (int a = 0; a < s.length(); a++) {
            if (a == 0 && s.charAt(a) == '-') continue;
            if (!Character.isDigit(s.charAt(a))) return false;
        }
        return true;
    }
}
