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
}
