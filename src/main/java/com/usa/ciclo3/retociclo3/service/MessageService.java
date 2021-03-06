/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.usa.ciclo3.retociclo3.service;

import com.usa.ciclo3.retociclo3.model.Message;
import com.usa.ciclo3.retociclo3.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author JhonV
 */
@Service
public class MessageService {
    
    @Autowired
    private MessageRepository messageRepository;
    
    public List<Message> getAll(){
        return messageRepository.getAll();
    }
    
    public Optional<Message> getMessage(int id){
        return messageRepository.getMessage(id);
    }
    
    public Message save(Message m){
        if (m.getIdMessage()==null){
            return messageRepository.save(m);
        } else{
            Optional<Message> messaux = messageRepository.getMessage(m.getIdMessage());
            if (messaux.isEmpty()){
                return messageRepository.save(m);
            } else{
                return m;
            }

        }

    }
    public Message update(Message c){
        if(c.getIdMessage()!=null){
            Optional<Message>g=messageRepository.getMessage(c.getIdMessage());
            if(!g.isEmpty()){
                if(c.getMessageText()!=null){
                    g.get().setMessageText(c.getMessageText());
                }
                return messageRepository.save(g.get());
            }
        }
        return c;

    }
    public boolean deleteMessage(int id){
        Optional<Message> a=getMessage(id);
        if(!a.isEmpty()){
            messageRepository.delete(a.get());
            return true;
        }
        return false;

    }
}
