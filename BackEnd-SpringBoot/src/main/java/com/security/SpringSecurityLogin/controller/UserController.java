package com.security.SpringSecurityLogin.controller;

import com.security.SpringSecurityLogin.model.User;
import com.security.SpringSecurityLogin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/login")   //porzione di radice uguale a tutti

public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/adduser")
    public String addUser(@RequestBody User user){  //RequestBody=tutto cio che mi passa dall'esterno va messo nell oggetto users
        return userService.addUser(user);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") int id){    //PathVariable=Associare l'id del GetMapping all'id del nostro utente
        return userService.getUserById(id);
    }

    @PostMapping("/access")
    public User userLogin(@RequestBody User login) {
        return userService.userLogin(login);
    }

    @GetMapping("/username/{username}")
    public User getUserByUsername(@PathVariable("username") String username){    //Cerca l'utente tramite l'username
        return userService.getUserByUsername(username);
    }

    @GetMapping("/username/like/{partialUsername}")
    public List<User> findAllByUsernameContaining(@PathVariable("partialUsername") String partialUsername){
        return userService.findAllByUsernameContaining(partialUsername);
    }

    @GetMapping("/")
    public Iterable<User> allUsers(){
        return userService.allUsers();
    }


    @GetMapping("/login")
    public String login(){
        return "Authenticated successfully";
    }

    @PutMapping("/{id}")
    public String updateUser(@PathVariable("id") int id, @RequestBody User user){
        return userService.updateUser(id,user);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id")int id){
        return userService.deleteUser(id);
    }
}