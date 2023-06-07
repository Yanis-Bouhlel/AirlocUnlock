//
// Created by Yanis on 06/06/2023.
//

#ifndef TAPKEY_SERVOMOTOR_H
#define TAPKEY_SERVOMOTOR_H

#include <ESP32Servo.h>
#include <Arduino.h>

class ServoMotor {
private:
    int MotorPin ;
    Servo myServo;
public:
    ServoMotor(int pMotor) ;
    void Open();
    void Close();
};


#endif //TAPKEY_SERVOMOTOR_H
