//
// Created by Yanis on 26/01/2023.
//

#ifndef LED_LED_H
#define LED_LED_H


class Led {
    protected:
        int Pin;
        bool Light ;
    public:
        Led(int LedPin);
        void PinMode() ;
        void On() ;
        void Off();

};


#endif //LED_LED_H
