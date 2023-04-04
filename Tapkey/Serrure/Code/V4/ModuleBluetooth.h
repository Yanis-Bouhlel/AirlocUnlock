//
// Created by bouhlel_y2 on 4/4/2023.
//

#ifndef V4_MODULEBLUETOOTH_H
#define V4_MODULEBLUETOOTH_H
#include "Arduino.h"


class ModuleBluetooth {
private:
    String nom ;
    bool ConnexionState ;
    bool DoorStates ;
    int Batterie ;
    String connexionState() ;
    bool DoorState() ;
    int BatteryState() ;
public:
    ModuleBluetooth();
    void Setup() ;
    void Traitement();
    bool getDoorState() ;
    int getBatteryState() ;

};


#endif //V4_MODULEBLUETOOTH_H
