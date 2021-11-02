/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.usa.ciclo3.retociclo3.service;

import com.usa.ciclo3.retociclo3.model.Cabin;
import com.usa.ciclo3.retociclo3.repository.CabinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author JhonV
 */
@Service
public class CabinService {
    
    @Autowired
    private CabinRepository cabinRepository;
    
    public List<Cabin> getAll(){
        return cabinRepository.getAll();
    }
    
    public Optional<Cabin> getCabin(int id){
        return cabinRepository.getCabin(id);
    }
    
    public Cabin save(Cabin c){
        if (c.getId()==null){
            return cabinRepository.save(c);
        } else{
            Optional<Cabin> cabaux = cabinRepository.getCabin(c.getId());
            if (cabaux.isEmpty()){
                return cabinRepository.save(c);
            } else{
                return c;
            }

        }

    }
    public Cabin update(Cabin c){
        if(c.getId()!=null){
            Optional<Cabin>g=cabinRepository.getCabin(c.getId());
            if(!g.isEmpty()){
                if(c.getName()!=null){
                    g.get().setName(c.getName());
                }
                if(c.getBrand()!=null){
                    g.get().setBrand(c.getBrand());
                }
                if(c.getRooms()!=null){
                    g.get().setRooms(c.getRooms());
                }
                if(c.getDescription()!=null){
                    g.get().setDescription(c.getDescription());
                }
                return cabinRepository.save(g.get());
            }
        }
        return c;

    }
    public boolean deleteCabin(int id){
        Optional<Cabin> a=getCabin(id);
        if(!a.isEmpty()){
            cabinRepository.delete(a.get());
            return true;
        }
        return false;

    }
}

