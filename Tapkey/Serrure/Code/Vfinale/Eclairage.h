//
// Created by Yanis on 09/05/2023.
//

#ifndef VFINALE_ECLAIRAGE_H
#define VFINALE_ECLAIRAGE_H


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


#endif //VFINALE_ECLAIRAGE_H
