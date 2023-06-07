//
// Created by Yanis on 06/06/2023.
//

#ifndef TAPKEY_SMARTLOCK_H
#define TAPKEY_SMARTLOCK_H
#include "Card.h"

class SmartLock {
private:
    Card *Esp32 ;
    bool state  ;
public:
    SmartLock(int pLed, int pMotor) ;
    void Open() ;
    void Close() ;
    void WaitCommand() ;
};


#endif //TAPKEY_SMARTLOCK_H
