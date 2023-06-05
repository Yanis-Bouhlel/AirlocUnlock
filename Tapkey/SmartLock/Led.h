//
// Created by Yanis on 05/06/2023.
//

#ifndef SMARTLOCK_LED_H
#define SMARTLOCK_LED_H
#include "Arduino.h"

class Led {
protected:
    int ledPin;
    void Red() ;
    void White();
    void Green();
public:
  Led(int pLed);
  void setup(int pLed);
  void TurnOn(char pColor) ;

};


#endif  //SMARTLOCK_LED_H
