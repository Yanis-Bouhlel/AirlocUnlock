//
// Created by Yanis on 21/03/2023.
//

#include "Cylindre.h"
#include "Arduino.h"
SystemDoor mySys(myMotor, muLuz) ;

Cylindre::Cylindre() {
    mySystem = mySys ;
    mySystem.Attente() ;
}

void Cylindre::Open() {
    mySystem.Ouverture() ;
}

void Cylindre::Close() {
    mySystem.Fermeture() ;
}
