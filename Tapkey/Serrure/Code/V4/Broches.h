//
// Created by bouhlel_y2 on 4/4/2023.
//

#ifndef V4_BROCHES_H
#define V4_BROCHES_H


class Broches {
private:
    int LedPin ;
    int MotorPin ;
    int LectorPin ;
    int getPin(char ChoixPin, int Pin) ;
    bool Auth(int id);
public:
    Broches(int ledPin, int motorPin, int lectorPin);
    int Support(int id, char ChoixPin, int Pin);

};


#endif //V4_BROCHES_H
