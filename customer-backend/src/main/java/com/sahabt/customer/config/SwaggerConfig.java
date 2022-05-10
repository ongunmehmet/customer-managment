package com.sahabt.customer.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


public class SwaggerConfig {

    //@Bean
    public OpenAPI openApiConfig(){

        return new OpenAPI().info(apiInfo());

    }

    public Info apiInfo(){

        Info info = new Info();
        info
                .title(" Example project Live Code Api")
                .description("for example project")
                .version("v1.0.0");
        return info;

    }
}
