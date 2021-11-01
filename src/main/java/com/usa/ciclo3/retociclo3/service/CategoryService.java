package com.usa.ciclo3.retociclo3.service;

import com.usa.ciclo3.retociclo3.model.Category;
import com.usa.ciclo3.retociclo3.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author JhonV
 */
@Service
public class CategoryService {
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    public List<Category> getAll(){
        return categoryRepository.getAll();
    }
    
    public Optional<Category> getCategory(int id){
        return categoryRepository.getCategory(id);
    }
    
    public Category save(Category c){
        if (c.getId()==null){
            return categoryRepository.save(c);
        } else{
            Optional<Category> cabaux = categoryRepository.getCategory(c.getId());
            if (cabaux.isEmpty()){
                return categoryRepository.save(c);
            } else{
                return c;
            }

        }

    }
}
