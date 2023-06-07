//
// Created by Yanis on 06/06/2023.
//

#include "ServoMotor.h"

ServoMotor::ServoMotor(int pMotor) {
    this->MotorPin = pMotor ;
    myServo.attach(pMotor);
}

void ServoMotor::Open() {
    myServo.write(180) ;
}

void ServoMotor::Close() {
    myServo.write(-180) ;
}