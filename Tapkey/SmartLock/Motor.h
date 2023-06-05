//
// Created by Yanis on 05/06/2023.
//

#ifndef SMARTLOCK_MOTOR_H
#define SMARTLOCK_MOTOR_H
#include <ESP32Servo.h>
#include <Arduino.h>

class Motor {
private:
    Servo myservo;
    int MotorPin ;
    bool Right ;
    bool Left ;
public:
    Motor(int pMotor) ;
    void Turn(int pAngle) ;
};

#endif //SMARTLOCK_MOTOR_H
