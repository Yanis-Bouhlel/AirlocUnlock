//
// Created by Yanis on 09/05/2023.
//

#include "Card.h"

Card::Card() {

}

void Card::setup(int ledPin, int motorPin1, int motorPin2, int motorPin3, int motorPin4, int lectorPin)
{
    this->OnOff = true ;
    mesBroches->getPin(7,2,3,4,5,9);
    
}

void Card::Open()
{
    maLum->TurnOn('G') ;
}

void Card::Close()
{
    maLum->TurnOn('R') ;
}
