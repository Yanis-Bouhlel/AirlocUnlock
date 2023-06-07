//
// Created by Yanis on 21/03/2023.
//

#ifndef V3_ECLAIRAGE_H
#define V3_ECLAIRAGE_H


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



#endif //V3_ECLAIRAGE_H
