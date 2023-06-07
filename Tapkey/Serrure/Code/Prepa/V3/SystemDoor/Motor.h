//
// Created by Yanis on 21/03/2023.
//

#ifndef V3_MOTOR_H
#define V3_MOTOR_H


class Motor {
protected:
    int Pin ;
public:
    Motor(int MotorPin) ;
    int getPin(int pPin) ;
    void Delay(int s) ;
    void Setup() ;
    void On() ;
    void Off() ;
};

#endif //V3_MOTOR_H
