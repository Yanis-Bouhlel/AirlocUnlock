//
// Created by Yanis on 09/05/2023.
//

#ifndef VFINALE_BROCHES_H
#define VFINALE_BROCHES_H


class Broches {
private:
    int LedPin ;
    int MotorPin1 ;
    int MotorPin2 ;
    int MotorPin3 ;
    int MotorPin4 ;
    int LectorPin ;


public:
    Broches(int ledPin, int motorPin1, int motorPin2, int motorPin3, int motorPin4, int lectorPin);
    int getPin(int ledPin, int motorPin1, int motorPin2, int motorPin3, int motorPin4, int lectorPin) ;
};


#endif
