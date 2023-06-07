//
// Created by Yanis on 15/03/2023.
//

#ifndef CYLINDRE_CYLINDRE_H
#define CYLINDRE_CYLINDRE_H
#include "../../Moteur/Motor.h"

class Cylindre {
protected:
    bool DoorState ;
    Motor *myMotor ;
public:
    Cylindre()  ;
    void Ouverture() ;
    void Fermeture() ;
};


#endif //CYLINDRE_CYLINDRE_H
