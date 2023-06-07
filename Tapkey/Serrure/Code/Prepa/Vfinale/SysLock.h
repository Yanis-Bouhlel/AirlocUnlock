//
// Created by Yanis on 09/05/2023.
//

#ifndef VFINALE_SYSLOCK_H
#define VFINALE_SYSLOCK_H


#include "Card.h"
#include "Motor.h"

class SysLock {
protected:
    Motor *myMotor ;
    Card *Esp32 ;
    bool State ;
    int Battery ;
public:
    SysLock();
    void Open() ;
    void Close();
    int getBattery();
};


#endif //VFINALE_SYSLOCK_H
