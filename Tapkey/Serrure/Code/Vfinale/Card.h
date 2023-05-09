//
// Created by Yanis on 09/05/2023.
//

#ifndef VFINALE_CARD_H
#define VFINALE_CARD_H


#include "Broches.h"
#include "Eclairage.h"
#include "ModuleBluetooth.h"


class Card {
protected :
    bool OnOff ;
    ModuleBluetooth *moduleB ;
    Broches *mesBroches ;
    Eclairage *maLum ;
public:
    Card();
    void setup(int ledPin, int motorPin1, int motorPin2, int motorPin3, int motorPin4, int lectorPin);
    void Open() ;
    void Close() ;

};


#endif //VFINALE_CARD_H
