//
// Created by Yanis on 21/02/2023.
//

#ifndef COMPOSANTS_PINS_H
#define COMPOSANTS_PINS_H


class Pins {
protected :
    int MainLedPin ;
    int CloseLedPin ;
    int OpenLedpin ;
    int ServoPin ;
    int LectorPin ;
    int OtherPin ;

public :
    Pins(int mainLedPin , int closeLedPin, int openLedPin, int servoPin) ;
    void SetPin(char howPin, int NumPin) ;
    void GetPin();
    void SerialBegin();

};


#endif //COMPOSANTS_PINS_H
