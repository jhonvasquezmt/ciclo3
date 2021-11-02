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
    public Client update(Client c){
        if(c.getIdClient()!=null){
            Optional<Client>g=clientRepository.getClient(c.getIdClient());
            if(!g.isEmpty()){
                if(c.getName()!=null){
                    g.get().setName(c.getName());
                }
                if(c.getAge()!=null){
                    g.get().setAge(c.getAge());
                }
                if(c.getPassword()!=null){
                    g.get().setPassword(c.getPassword());
                }

                return clientRepository.save(g.get());
            }
        }
        return c;

    }
    public boolean deleteCli(int id){
        Optional<Client> a=getClient(id);
        if(!a.isEmpty()){
            clientRepository.delete(a.get());
            return true;
        }
        return false;

    }
}
