package com.usa.ciclo3.retociclo3.web;

import com.usa.ciclo3.retociclo3.model.Score;
import com.usa.ciclo3.retociclo3.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author JhonV
 */
@RestController
@RequestMapping("/api/Score")
@CrossOrigin(origins = "*", methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})

public class ScoreController {
    
    @Autowired
    private ScoreService scoreService;
    @GetMapping("/all")
    public List<Score> getScores(){
        return scoreService.getAll();
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Score save(@RequestBody Score c){
        return scoreService.save(c);
    }
    
    @GetMapping("/{id}")
    public Optional<Score> getScore(@PathVariable("id") int id){
        return scoreService.getScore(id);
    }
}
