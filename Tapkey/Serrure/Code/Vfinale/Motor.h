//
// Created by Yanis on 09/05/2023.
//

#ifndef VFINALE_MOTOR_H
#define VFINALE_MOTOR_H


class Motor {

protected:
    int MotorPin2 ;
    int MotorPin3 ;
    int MotorPin4 ;
public:
    Motor(int p1, int p2, int p3, int p4);
    void moveRight(int time);
    void moveLeft(int time);

};


#endif //VFINALE_MOTOR_H
