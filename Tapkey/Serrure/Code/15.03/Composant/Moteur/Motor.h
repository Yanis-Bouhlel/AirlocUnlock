//
// Created by Yanis on 15/03/2023.
//

#ifndef MOTEUR_MOTOR_H
#define MOTEUR_MOTOR_H


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


#endif //MOTEUR_MOTOR_H
