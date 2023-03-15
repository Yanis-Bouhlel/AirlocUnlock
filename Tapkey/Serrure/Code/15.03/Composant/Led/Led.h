//
// Created by Yanis on 15/03/2023.
//

#ifndef LED_LED_H
#define LED_LED_H


class Leds {
protected:
    int Pin;
    bool Light ;
public:
    Led(int LedPin);
    void PinMode() ;
    void White() ;
    void Red();
    void Green();
    void Off();

};



#endif //LED_LED_H
