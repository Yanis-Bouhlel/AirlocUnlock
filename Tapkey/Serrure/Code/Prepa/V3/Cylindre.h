//
// Created by Yanis on 21/03/2023.
//

#ifndef V3_CYLINDRE_H
#define V3_CYLINDRE_H

#include "SystemDoor/SystemDoor.h"
#include "Motor/Motor.h"
#include "Eclairage/Eclairage.h"

Motor myMotor(5) ;
Eclairage muLuz(2) ;

class Cylindre {
protected:
    SystemDoor mySystem ;
public:
    Cylindre();
    void Open();
    void Close();
};


#endif //V3_CYLINDRE_H
