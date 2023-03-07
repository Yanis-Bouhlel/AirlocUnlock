//
// Created by Yanis on 14/02/2023.
//

#include "headers/ServoMotor.h"
#include "Arduino.h"

ServoMotor::ServoMotor(int servoPin) {
    this->ServoPin = servoPin ;
    this->ServoState = false ;
    this->BreakStateServo = false ;
}

int ServoMotor::GetServoPin() {
    return this->ServoPin ;
}

void ServoMotor::SetServostate(int codeError) {
    if (codeError == 999){
        this->ServoState = true ;
    }
    else if (codeError == 404){

        this->ServoState = false ;
    }
}

void ServoMotor::SetBreakStateServo(int codeError) {
    if (codeError == 111){
        this->ServoState = true ;
    }
    else if (codeError == 606){
        this->ServoState = false ;
    }
}

void ServoMotor::attach() {
    myservo.attach(this->ServoPin);
}

void ServoMotor::move(int angle) {
    myservo.write(angle);
}

void ServoMotor::Open() {
    move(190);
    this->ServoState = true ;
    this->BreakStateServo = false ;
}

void ServoMotor::Close() {
    move(-190);
    this->ServoState = false ;
    this->BreakStateServo = false ;
}
