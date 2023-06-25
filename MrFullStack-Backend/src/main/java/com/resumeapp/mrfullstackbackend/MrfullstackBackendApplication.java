package com.resumeapp.mrfullstackbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.Async;

@Async
@SpringBootApplication
public class MrfullstackBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(MrfullstackBackendApplication.class, args);
	}

}
