//
// Created by bouhlel_y2 on 3/27/2023.
//

#ifndef CARD_H_MODULEBLUETOOTH_H
#define CARD_H_MODULEBLUETOOTH_H


class ModuleBluetooth {
private:
    String nom ; 
    bool ConnexionState ;
    bool DoorStates ;
    int Batterie ;
public:
    ModuleBluetooth();
    void Setup() ;
    bool DoorState() ;
    int BatteryState() ;
    void Traitement();
    String connexionState() ;
};


#endif //CARD_H_MODULEBLUETOOTH_H
