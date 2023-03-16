//
// Created by Yanis on 16/03/2023.
//

#ifndef SYSTEMDOOR_MOTOR_H
#define SYSTEMDOOR_MOTOR_H


class Motor {
protected:
    int Pin ;
public:
    Motor(int MotorPin) ;
    void Delay(int s) ;
    void Setup() ;
    void On() ;
    void Off() ;
};


#endif //SYSTEMDOOR_MOTOR_H
