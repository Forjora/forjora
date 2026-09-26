package com.forjora.scheduler;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class KeepAliveScheduler {

    private final RestTemplate restTemplate = new RestTemplate();

    @Scheduled(fixedRate = 12 * 60 * 1000)
    public void keepAlive() {
        String response = restTemplate.getForObject(
                "https://forjora.onrender.com/auth/health",
                String.class
        );

        System.out.println("Health check: " + response);
    }
}
