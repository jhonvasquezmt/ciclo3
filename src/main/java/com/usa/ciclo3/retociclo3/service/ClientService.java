/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.usa.ciclo3.retociclo3.service;

import com.usa.ciclo3.retociclo3.model.Client;
import com.usa.ciclo3.retociclo3.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author JhonV
 */
@Service
public class ClientService {
    
    @Autowired
    private ClientRepository clientRepository;
    
    public List<Client> getAll(){
        return clientRepository.getAll();
    }
    
    public Optional<Client> getClient(int id){
        return clientRepository.getClient(id);
    }
    
    public Client save(Client c){
        if (c.getIdClient()==null){
            return clientRepository.save(c);
        } else{
            Optional<Client> cliaux = clientRepository.getClient(c.getIdClient());
            if (cliaux.isEmpty()){
                return clientRepository.save(c);
            } else{
                return c;
            }

        }

    }
    
}
