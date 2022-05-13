package com.sahabt.customer.validation;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = CompanyNameValidator.class)
public @interface CompanyValidate {
    String message() default "CompanyName should only be displayed as a character.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
