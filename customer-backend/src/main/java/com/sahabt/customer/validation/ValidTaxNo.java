package com.sahabt.customer.validation;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy=TaxNoValidate.class)
public @interface ValidTaxNo {
    String message() default "This is not a valid TaxNo";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}