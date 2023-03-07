//
// Created by Yanis on 14/02/2023.
//

#include "headers/Led.h"
#include "Arduino.h"

Led::Led(int LedPin) {
    this->Pin = LedPin ;
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

int Led::GetPin() {
    return this->Pin;
}
