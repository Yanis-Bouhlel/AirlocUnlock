//
// Created by Yanis on 21/03/2023.
//

#ifndef V3_PINS_H
#define V3_PINS_H


class Pins {
private:
    int LedPin ;
    int MotorPin ;
    int LectorPin ;
    int getPin(char ChoixPin, int Pin) ;
    bool Auth(int id);
public:
    Pins(int ledPin, int motorPin, int lectorPin);
    int Support(int id, char ChoixPin, int Pin);

};



#endif //V3_PINS_H
