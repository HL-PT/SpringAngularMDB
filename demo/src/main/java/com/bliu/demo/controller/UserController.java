package com.bliu.demo.controller;

import com.bliu.demo.entity.User;
import com.bliu.demo.repository.UserRepository;
import com.bliu.demo.exception.EmailAlreadyExistsException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @PostMapping
    public User create(@RequestBody User user) {
		if (userRepository.existsByEmail(user.getEmail())) {
			throw new EmailAlreadyExistsException("Email already exists");
		}
        return userRepository.save(user);
    }
}
