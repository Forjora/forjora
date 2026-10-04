package com.forjora.service;

import com.forjora.dto.LoginRequest;
import com.forjora.model.User;
import com.forjora.model.exception.UserNotFoundException;
import com.forjora.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class LoginUserService {

    private final UserRepository userRepository;

    public LoginUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User verifyUser(@RequestBody LoginRequest loginRequest) {
        String identifier = loginRequest.getUsername();

        User user = userRepository.findByUsername(identifier)
                .or(() -> userRepository.findByEmail(identifier))
                .orElseThrow(() -> new UserNotFoundException("No account found with the given username or email."));

        if (user.getPassword().equals(loginRequest.getPassword())) {
            return user;
        }

        throw new RuntimeException("Invalid password");
    }
}
