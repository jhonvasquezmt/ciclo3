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
    public Category update(Category c){
        if(c.getId()!=null){
            Optional<Category>g=categoryRepository.getCategory(c.getId());
            if(!g.isEmpty()){
                if(c.getName()!=null){
                    g.get().setName(c.getName());
                }
                if(c.getDescription()!=null){
                    g.get().setDescription(c.getDescription());
                }

                return categoryRepository.save(g.get());
            }
        }
        return c;

    }
    public boolean deleteCate(int id){
        Optional<Category> a=getCategory(id);
        if(!a.isEmpty()){
            categoryRepository.delete(a.get());
            return true;
        }
        return false;

    }
}
