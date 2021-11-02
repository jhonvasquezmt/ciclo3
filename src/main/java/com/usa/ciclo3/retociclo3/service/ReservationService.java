package com.usa.ciclo3.retociclo3.service;

import com.usa.ciclo3.retociclo3.model.Reservation;
import com.usa.ciclo3.retociclo3.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author JhonV
 */
@Service
public class ReservationService {
    
    @Autowired
    private ReservationRepository reservationRepository;
    
    public List<Reservation> getAll(){
        return reservationRepository.getAll();
    }
    
    public Optional<Reservation> getReservation(int id){
        return reservationRepository.getReservation(id);
    }
    
    public Reservation save(Reservation r){
        if (r.getIdReservation()==null){
            return reservationRepository.save(r);
        } else{
            Optional<Reservation> reaux = reservationRepository.getReservation(r.getIdReservation());
            if  (reaux.isEmpty()){
                return reservationRepository.save(r);
            } else{
                return r;
            }

        }

    }
    public Reservation update(Reservation c){
        if(c.getIdReservation()!=null){
            Optional<Reservation>g=reservationRepository.getReservation(c.getIdReservation());
            if(!g.isEmpty()){
                if(c.getStartDate()!=null){
                    g.get().setStartDate(c.getStartDate());
                }
                if(c.getDevolutionDate()!=null){
                    g.get().setDevolutionDate(c.getDevolutionDate());
                }
                if(c.getStatus()!=null){
                    g.get().setStatus(c.getStatus());
                }

                return reservationRepository.save(g.get());
            }
        }
        return c;

    }
    public boolean deleteRes(int id){
        Optional<Reservation> a=getReservation(id);
        if(!a.isEmpty()){
            reservationRepository.delete(a.get());
            return true;
        }
        return false;

    }
}
