//
// Created by bouhlel_y2 on 4/4/2023.
//

#include "Card.h"

Card::Card() {

}

void Card::setup(int ledPin, int motorPin, int lectorPin)
{
    this->OnOff = true ;

    moduleB->Setup() ;

    mesBroches->Support(123456789, 'L', ledPin);
    mesBroches->Support(123456789, 'M', motorPin);
    mesBroches->Support(123456789, 'W', lectorPin);

    if(moduleB->getDoorState()){
        Open() ;
    }
    if(!moduleB->getDoorState() ){
        Close();
    }
}

void Card::Open()
{
    maLum->TurnOn('G') ;
}

void Card::Close()
{
    maLum->TurnOn('R') ;
}
