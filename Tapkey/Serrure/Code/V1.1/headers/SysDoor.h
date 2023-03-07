//
// Created by Yanis on 14/02/2023.
//

#ifndef V1_0_SYSDOOR_H
#define V1_0_SYSDOOR_H

#include "Pins.h"
#include "ServoMotor.h"
#include "Led.h"
#include "MotherCard.h"
#include "Bluetooth.h"


class SysDoor {

protected:
    bool DoorState ;

public:
    SysDoor();
    void Connexion();
    void Ouverture();
    void attach() ;
    void Fermeture();


};


#endif //V1_0_SYSDOOR_H
