package com.forjora.service;

import com.forjora.dto.LoginRequest;
import com.forjora.model.User;
import com.forjora.model.exception.UserNotFoundException;
import com.forjora.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class LoginUserService {


    private final UserRepository userRepository;

    public LoginUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public ResponseEntity<?> verifyUser(@RequestBody LoginRequest loginRequest) {

        User user = userRepository.findByUsername(loginRequest.getUsername()).orElseThrow(UserNotFoundException::new);

        if (user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(user);
        } else
            return ResponseEntity.badRequest().build();
    }




}
