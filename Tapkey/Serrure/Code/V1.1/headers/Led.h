//
// Created by Yanis on 14/02/2023.
//

#ifndef V1_0_LED_H
#define V1_0_LED_H


class Led {
protected:
    int Pin;
    bool Light ;
public:
    Led(int LedPin);
    int GetPin();
    void PinMode() ;
    void On() ;
    void Off();

};


#endif //V1_0_LED_H
