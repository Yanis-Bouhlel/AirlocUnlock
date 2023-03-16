//
// Created by Yanis on 15/03/2023.
//

#include "Cylindre.h"
Motor myMotor(5) ;

Cylindre::Cylindre() {
    myMotor->Setup()
}

void Cylindre::Ouverture() {
    myMotor->On();
    myMotor->Delay(3) ;
}

void Cylindre::Fermeture() {
    myMotor.Off() ;
}