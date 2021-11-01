package com.usa.ciclo3.retociclo3.service;

import com.usa.ciclo3.retociclo3.model.Admin;
import com.usa.ciclo3.retociclo3.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author JhonV
 */
@Service
public class AdminService {
    
    @Autowired
    private AdminRepository adminRepository;
    
    public List<Admin> getAll(){
        return adminRepository.getAll();
    }
    
    public Optional<Admin> getAdmin(int id){
        return adminRepository.getAdmin(id);
    }
    
    public Admin save(Admin a){
        if (a.getId()==null){
            return adminRepository.save(a);
        } else{
            Optional<Admin> admaux = adminRepository.getAdmin(a.getId());
            if (admaux.isEmpty()){
                return adminRepository.save(a);
            } else{
                return a;
            }

        }

    }
}
