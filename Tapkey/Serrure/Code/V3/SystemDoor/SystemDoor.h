//
// Created by Yanis on 21/03/2023.
//

#ifndef V3_SYSTEMDOOR_H
#define V3_SYSTEMDOOR_H
#include "Eclairage.h"
#include "Motor.h"

class SystemDoor {
protected:
    bool DoorState ;

public:
    SystemDoor();
    void Attente() ;
    void Ouverture() ;
    void Fermeture() ; 
};


#endif //V3_SYSTEMDOOR_H
