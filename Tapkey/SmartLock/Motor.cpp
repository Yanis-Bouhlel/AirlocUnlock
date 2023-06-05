//
// Created by Yanis on 05/06/2023.
//

#include "Motor.h"
#include "Arduino.h"
Motor::Motor(int pMotor) {
    this->MotorPin = pMotor ;
}

void Motor::Turn(int pAngle) {
    if(pAngle < 0){
        this->Right = false ;
        this->Left = true ;
        myservo.attach(this->MotorPin);
        myservo.write(pAngle);
    }
    else if(pAngle > 0){
        this->Right = true ;
        this->Left = false ;
        myservo.attach(this->MotorPin);
        myservo.write(pAngle);
    }
}