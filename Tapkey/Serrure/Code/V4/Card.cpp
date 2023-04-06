//
// Created by bouhlel_y2 on 4/4/2023.
//

#include "Card.h"

Card::Card() {

}

void Card::setup(int ledPin, int motorPin1, int motorPin2, int motorPin3, int motorPin4, int lectorPin)
{
    this->OnOff = true ;

    moduleB->Setup() ;

    mesBroches->Support(123456789, 'L', ledPin);
    mesBroches->Support(123456789, 'M1', motorPin1);
    mesBroches->Support(123456789, 'M2', motorPin1);
    mesBroches->Support(123456789, 'M3', motorPin1);
    mesBroches->Support(123456789, 'M4', motorPin1);
    mesBroches->Support(123456789, 'W', lectorPin);
    myMotor->setup(50, 4, 1,2, 3,4);

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
    myMotor->move(512);
}

void Card::Close()
{
    maLum->TurnOn('R') ;
    myMotor->move(-512) ; 
}
