//
// Created by Yanis on 15/03/2023.
//

#include "Pins.h"

Pins::Pins(int ledPin, int motorPin, int lectorPin) {
    this->LedPin = ledPin ;
    this->MotorPin = motorPin ;
    this->LectorPin = lectorPin ;
}

int Pins::getPin(char ChoixPin, int Pin) {
    if (ChoixPin == 'L'){
        this->LedPin = Pin ;
        return this->LedPin ;
    }
    else if (ChoixPin == 'M'){
        this->MotorPin = Pin ;
        return this->MotorPin ;
    }
    else if (ChoixPin == 'W'){
        this->LectorPin = Pin ;
        return this->LectorPin ;
    }
    else {
        return 0 ;
    }
}

bool Pins::Auth(int id) {
    if(id == 123456789){
        return true ;
    }
    else {
        return false ;
    }

}

int Pins::Support(int id, char ChoixPin, int Pin) {
    if(Auth(id) == true){
        getPin(ChoixPin, Pin) ;
        return 1 ;
    }
    else {
        return 404 ;
    }
}