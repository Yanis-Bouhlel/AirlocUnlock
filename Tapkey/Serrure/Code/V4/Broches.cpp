//
// Created by bouhlel_y2 on 4/4/2023.
//

#include "Broches.h"

Broches::Broches(int ledPin, int motorPin1, int motorPin2, int motorPin3, int motorPin4, int lectorPin) {
    this->LedPin = ledPin ;
    this->MotorPin1 = motorPin1 ;
    this->MotorPin2 = motorPin2 ;
    this->MotorPin3 = motorPin3 ;
    this->MotorPin4 = motorPin4 ;
    this->LectorPin = lectorPin ;
}

int Broches::getPin(char ChoixPin, int Pin) {
    if (ChoixPin == 'L'){
        this->LedPin = Pin ;
        return this->LedPin ;
    }
    else if (ChoixPin == 'M1'){
        this->MotorPin1 = Pin ;
        return this->MotorPin1 ;
    }
    else if (ChoixPin == 'M2'){
        this->MotorPin2 = Pin ;
        return this->MotorPin2 ;
    }
    else if (ChoixPin == 'M3'){
        this->MotorPin3 = Pin ;
        return this->MotorPin3 ;
    }
    else if (ChoixPin == 'M4'){
        this->MotorPin4 = Pin ;
        return this->MotorPin4 ;
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