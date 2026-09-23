package com.forjora.controller;

import com.forjora.dto.LoginRequest;
import com.forjora.dto.RegisterUserDTO;
import com.forjora.service.LoginUserService;
import com.forjora.service.RegisterUser;
//import com.forjora.dto.RegisterUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/auth")
public class AuthController {

    private final RegisterUser registerUser;
    private final LoginUserService loginUserService;

    @Autowired
    public AuthController(RegisterUser registerUser, LoginUserService loginUserService) {
        this.registerUser = registerUser;
        this.loginUserService = loginUserService;
    }

    @PostMapping("/register")
    public void registerUser(@RequestBody RegisterUserDTO user) {

        registerUser.createAccount(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {

        return loginUserService.verifyUser(loginRequest);

    }
}
