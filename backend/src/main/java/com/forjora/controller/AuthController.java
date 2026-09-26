package com.forjora.controller;


import com.forjora.dto.LoginRequest;
import com.forjora.dto.RegisterUserDTO;
import com.forjora.model.User;
import com.forjora.service.LoginUserService;
import com.forjora.service.RegisterUser;
//import com.forjora.dto.RegisterUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;

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
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest, HttpSession session) {

        User user = loginUserService.verifyUser(loginRequest);

        session.setAttribute("user", user.getUsername());

        return ResponseEntity.ok("Login Success");
    }

    @GetMapping("/session")
    public ResponseEntity<?> getSession(HttpSession session) {
        Object user = session.getAttribute("user");

        if (user == null) {
            return ResponseEntity.status(401).body("You are not logged in");

        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}
