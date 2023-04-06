//
// Created by bouhlel_y2 on 4/4/2023.
//

#include "Broches.h"

Broches::Broches(int ledPin, int motorPin, int lectorPin) {
    this->LedPin = ledPin ;
    this->MotorPin = motorPin ;
    this->LectorPin = lectorPin ;
}

int Broches::getPin(char ChoixPin, int Pin) {
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

bool Broches::Auth(int id) {
    if(id == 123456789){
        return true ;
    }
    else {
        return false ;
    }

}

int Broches::Support(int id, char ChoixPin, int Pin) {
    if(Auth(id)){
        getPin(ChoixPin, Pin) ;
        return 1 ;
    }
    else {
        return 404 ;
    }
}