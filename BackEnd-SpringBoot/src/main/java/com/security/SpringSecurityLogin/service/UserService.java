package com.security.SpringSecurityLogin.service;

import com.security.SpringSecurityLogin.dao.UserRepositoryDAO;
import com.security.SpringSecurityLogin.model.User;
import com.security.SpringSecurityLogin.security.Encrypter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    UserRepositoryDAO userDAO;    //interfaccia


    @Autowired
    public UserService( UserRepositoryDAO userDAO) {
        this.userDAO = userDAO;
    }

    public User userLogin(User login) {
        String passwordCripter = Encrypter.encrypt(login.getPassword());
        if (login.getPassword() != null && login.getUsername() != null) {
            User credenziali = userDAO.findByUsername(login.getUsername());
            if (credenziali.getPassword().equals(passwordCripter)) {
                return credenziali;
            }
        } else {
            return null;
        }
        return  null;
    }

    public String addUser(User user){
        user.setPassword(Encrypter.encrypt(user.getPassword()));
        User result = userDAO.save(user);
        if (result != null) {
            return "Utente salvato correttamente";
        } else {
            return "Errore nel salvataggio";
        }
    }


    public User  getUserById(int id){
        Optional result = userDAO.findById(id);
        return (User) result.get();
    }

    public Iterable<User> allUsers() {
        return userDAO.findAll();
    }

    public String updateUser(int id, User user) {
        user.setId(id);
        User result= userDAO.save(user);
        if (result!=null && result.getId() != 0){
            return "Utente aggiornato correttamente";
        }else{
            return "Errore nell'aggiornamento dell'utente";
        }
    }

    public String deleteUser(int id) {
        User userId = userDAO.findById(id).orElse(null);
        if (userId==null){
            return "Utente non trovato";
        }else {
            userDAO.deleteById(id);   //cancella utente tramite id
            return "Utente eliminato correttamente";
        }
    }

    public User getUserByUsername(String username) {
        return userDAO.findByUsername(username);
    }

    public List<User> findAllByUsernameContaining(String partialUsername) {
        return userDAO.findAllByUsernameContaining(partialUsername);
    }
}
