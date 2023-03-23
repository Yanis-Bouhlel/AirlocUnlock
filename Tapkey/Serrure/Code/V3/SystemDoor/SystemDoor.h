//
// Created by Yanis on 21/03/2023.
//

#ifndef V3_SYSTEMDOOR_H
#define V3_SYSTEMDOOR_H

#include "../Motor/Motor.h"
#include "../Eclairage/Eclairage.h"

class SystemDoor {
protected:
    bool DoorState ;
    Motor myMotor ;
    Eclairage myLed ;
public:
    SystemDoor(Motor pMotor, Eclairage myLux);
    void Attente() ;
    void Ouverture() ;
    void Fermeture() ;
};


#endif //V3_SYSTEMDOOR_H
