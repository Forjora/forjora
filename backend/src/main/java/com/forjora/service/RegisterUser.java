package com.forjora.service;
import com.forjora.dto.RegisterUserDTO;
import com.forjora.model.User;
import com.forjora.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class RegisterUser {

    private final UserRepository userRepository;

    public RegisterUser(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createAccount(RegisterUserDTO user) {

        User newUser =  new User();
        newUser.setName(user.getName());
        newUser.setPassword(user.getPassword());
        newUser.setEmail(user.getEmail());
        newUser.setUsername(user.getUsername());

        userRepository.save(newUser);
        return newUser;

    }

}
