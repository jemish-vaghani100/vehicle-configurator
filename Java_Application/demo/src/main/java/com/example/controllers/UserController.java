package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.services.UserManager;
import com.example.entities.User;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

	@Autowired
    private UserManager userManager;

	@PostMapping(value="api/signup")
    public void registerCompany(@RequestBody User Reg) {

        System.out.println("hello");
        userManager.createUser(Reg);
    }
	

	@PostMapping(value="api/login")
    public boolean validateUser(@RequestBody User Reg) {
		return userManager.validateUser(Reg);
    }	 

}

