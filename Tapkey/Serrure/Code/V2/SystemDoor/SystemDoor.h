//
// Created by Yanis on 16/03/2023.
//

#ifndef SYSTEMDOOR_SYSTEMDOOR_H
#define SYSTEMDOOR_SYSTEMDOOR_H
#include "Eclairage.h"
#include "Motor.h"

class SystemDoor {
protected:
    bool DoorState ;
    Motor myMotor ;
    Eclairage Led ;
public:
    SystemDoor(Motor pMotor, Eclairage myLux);
    void Ouverture() ;
    void Fermeture() ;
};


#endif //SYSTEMDOOR_SYSTEMDOOR_H
