//
// Created by Yanis on 09/05/2023.
//

#ifndef VFINALE_MOTOR_H
#define VFINALE_MOTOR_H


class Motor {

protected:
    int MotorPin1 ;
    int MotorPin2 ;

public:
    Motor(int p1, int p2);
    void moveRight(int time);
    void moveLeft(int time);

};


#endif //VFINALE_MOTOR_H
