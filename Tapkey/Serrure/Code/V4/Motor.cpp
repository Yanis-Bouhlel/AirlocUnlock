//
// Created by bouhlel_y2 on 4/6/2023.
//

#include "Motor.h"

Motor::Motor() {

}

void Motor::setup(int pSpeed, int pNbPas, int p1,int p2, int p3, int p4) {
    this->pin1 = p1;
    this->pin2 = p2;
    this->pin3 = p3;
    this->pin4 = p4;
    this->nbPas = pNbPas ;
    this->speed = pSpeed ;
    motor(this->nbPas, this->pin1, this->pin2,this->pin3, this->pin4);
    motor.setSpeed(this->speed);
}

void Motor::getPin(int p1,int p2, int p3, int p4) {
    this->pin1 = p1;
    this->pin2 = p2;
    this->pin3 = p3;
    this->pin4 = p4;
}

void Motor::move(int pMove) {
    //setup(this->speed, this->nbPas, this->pin1, this->pin2,this->pin3, this->pin4);
    motor.step(pMove) ;
}
