//
// Created by bouhlel_y2 on 4/6/2023.
//

#ifndef V4_MOTOR_H
#define V4_MOTOR_H
#include <Stepper.h>
#include "Arduino.h"


class Motor {
    private:
        Stepper *motor ;
        int speed ;
        int nbPas ;
        int pin1 ;
        int pin2 ;
        int pin3 ;
        int pin4 ;
    public:
        Motor(int pSpeed, int pNbPas, int p1,int p2, int p3, int p4) ;
        void setup(int pSpeed, int pNbPas, int p1,int p2, int p3, int p4);
        void getPin(int p1,int p2, int p3, int p4) ;
        void move(int pMove) ;
};


#endif //V4_MOTOR_H
