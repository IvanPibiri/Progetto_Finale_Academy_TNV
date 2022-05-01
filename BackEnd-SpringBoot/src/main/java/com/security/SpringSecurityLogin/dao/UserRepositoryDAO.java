package com.security.SpringSecurityLogin.dao;

import com.security.SpringSecurityLogin.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface UserRepositoryDAO extends CrudRepository<User,Integer> {

    public User findByUsername(String username);

    public List<User> findAllByUsernameContaining(String partialUsername);

}
