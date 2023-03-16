//
// Created by Yanis on 25/01/2023.
//

#ifndef SERVOMOTEUR_SERVOMOTOR_H
#define SERVOMOTEUR_SERVOMOTOR_H
#include <ESP32Servo.h>

class ServoMotor {
    private:
        Servo myservo;
        int ServoPin ;
        bool ServoState ;
        bool BreakStateServo ;

    public:
        ServoMotor(int servoPin);
        int GetServoPin();
        void attach();
        void SetServostate(int codeError);
        void SetBreakStateServo(int codeError);
        void move(int angle);
        void Open() ;
        void Close() ;
};

#endif //SERVOMOTEUR_SERVOMOTOR_H
