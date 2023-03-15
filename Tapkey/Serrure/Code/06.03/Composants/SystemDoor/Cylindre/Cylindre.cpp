//
// Created by bouhlel_y2 on 3/6/2023.
//

#include "Cylindre.h"

Cylindre::Cylindre() {
    myMotor->attach(4);
}

void Cylindre::Ouverture() {
    myMotor->Open();
}
void Cylindre::Fermeture() {
    myMotor.Fermeture() ;
}