package com.usa.ciclo3.retociclo3.service;

import com.usa.ciclo3.retociclo3.model.Score;
import com.usa.ciclo3.retociclo3.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author JhonV
 */
@Service
public class ScoreService {
    
    @Autowired
    private ScoreRepository scoreRepository;
    
    public List <Score> getAll(){
        return scoreRepository.getAll();
    }
    
    public Optional <Score> getScore(int id){
        return scoreRepository.getScore(id);
    }
    
    public Score save(Score s){
        if (s.getId()==null){ 
            return scoreRepository.save(s);
        } else{
            Optional <Score> scaux = scoreRepository.getScore(s.getId());
            if (scaux.isEmpty()){
                return scoreRepository.save(s);
            } else{
                return s;
            }

        }

    }
}
