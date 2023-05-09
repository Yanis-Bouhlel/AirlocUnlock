//
// Created by Yanis on 09/05/2023.
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

int Broches::getPin(int ledPin, int motorPin1, int motorPin2, int motorPin3, int motorPin4, int lectorPin) {
    this->LedPin = ledPin ;
    this->MotorPin1 = motorPin1 ;
    this->MotorPin2 = motorPin2 ;
    this->MotorPin3 = motorPin3 ;
    this->MotorPin4 = motorPin4 ;
    this->LectorPin = lectorPin ;
}


