//
// Created by bouhlel_y2 on 4/4/2023.
//

#ifndef V4_CARD_H
#define V4_CARD_H

#include "Broches.h"
#include "Eclairage.h"
#include "ModuleBluetooth.h"
#include "Motor.h"


class Card {
protected :
    bool OnOff ;
    ModuleBluetooth *moduleB ;
    Broches *mesBroches ;
    Eclairage *maLum ;
    Motor *myMotor ;

public:
    Card();
    void setup(int ledPin, int motorPin1, int motorPin2, int motorPin3, int motorPin4, int lectorPin);
    void Open() ;
    void Close() ;

};


#endif
