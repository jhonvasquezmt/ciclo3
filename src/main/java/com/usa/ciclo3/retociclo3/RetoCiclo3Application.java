package com.usa.ciclo3.retociclo3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan(basePackages = {"com.usa.ciclo3.retociclo3.model"})
@SpringBootApplication
public class RetoCiclo3Application {

    public static void main(String[] args) {
        SpringApplication.run(RetoCiclo3Application.class, args);
    }

}
