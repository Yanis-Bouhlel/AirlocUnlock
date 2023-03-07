//
// Created by Yanis on 14/02/2023.
//

#ifndef V1_0_SERVOMOTOR_H
#define V1_0_SERVOMOTOR_H


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


#endif //V1_0_SERVOMOTOR_H
