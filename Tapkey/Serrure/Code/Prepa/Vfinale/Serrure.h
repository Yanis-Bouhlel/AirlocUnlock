//
// Created by Yanis on 09/05/2023.
//

#ifndef VFINALE_SERRURE_H
#define VFINALE_SERRURE_H


#include "ModuleBluetooth.h"
#include "SysLock.h"

class Serrure {
protected:
    ModuleBluetooth *Bluetooth ;
    SysLock *myLock ;
    bool initLock;
    String Nom ;
public:
    Serrure() ;
    bool init() ;
    void WaitCommand();
};


#endif //VFINALE_SERRURE_H
