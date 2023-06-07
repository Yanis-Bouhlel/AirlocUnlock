//
// Created by bouhlel_y2 on 4/4/2023.
//

#ifndef V4_ECLAIRAGE_H
#define V4_ECLAIRAGE_H


class Eclairage {
protected:
    int Pin;
    bool Light ;
    void PinMode() ;
    void White() ;
    void Red();
    void Green();
    void Off();
public:
    Eclairage(int LedPin);
    int getPin(int pPin) ;
    void TurnOn(char HowColor) ;

};


#endif //V4_ECLAIRAGE_H
