//
// Created by Yanis on 16/03/2023.
//

#ifndef V2_ECLAIRAGE_H
#define V2_ECLAIRAGE_H


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
        void TurnOn(char HowColor) ;

};


#endif //V2_ECLAIRAGE_H
