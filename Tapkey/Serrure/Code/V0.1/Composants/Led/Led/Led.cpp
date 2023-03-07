//
// Created by Yanis on 26/01/2023.
//

#include "Led.h"
#include "Arduino.h"

Led::Led(int LedPin) {
    this->Pin = LedPin ;
    PinMode() ; 
}

void Led::PinMode() {
    pinMode(this->Pin , OUTPUT) ;
}

void Led::On() {
    digitalWrite(this->Pin ,  HIGH) ;
    this->Light = true ;
}

void Led::Off() {
    digitalWrite(this->Pin ,  LOW) ;
    this->Light = false ;
}