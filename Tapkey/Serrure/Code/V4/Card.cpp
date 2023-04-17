//
// Created by bouhlel_y2 on 4/4/2023.
//

#include "Card.h"

Card::Card() {

}

void Card::setup(int ledPin, int motorPin1, int motorPin2, int motorPin3, int motorPin4, int lectorPin)
{
  this->OnOff = true ;
  Motor *myMotor = new Motor(150, 100, motorPin1, motorPin2, motorPin3, motorPin4);
  Eclairage *maLuz = new Eclairage(2);

  //moduleB->Setup();

  mesBroches->Support(123456789, 'L', ledPin);
  mesBroches->Support(123456789, 'M', motorPin1);
  mesBroches->Support(123456789, 'W', lectorPin);
  this->myMotor = myMotor;
  this->maLum = maLuz ;
  /* if(moduleB->getDoorState()){
       Open() ;
    }
    if(!moduleB->getDoorState() ){
       Close();
    }*/
}

void Card::Open()
{
  Eclairage *maLuz = new Eclairage(2);
  this->maLum = maLuz ;

  maLum->TurnOn('G') ;
  //myMotor->move(512);
}

void Card::Close()
{
  maLum->TurnOn('R') ;
  //myMotor->move(-512) ;
}
