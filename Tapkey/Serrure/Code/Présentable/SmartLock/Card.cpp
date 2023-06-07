//
// Created by Yanis on 06/06/2023.
//

#include "Card.h"

Card::Card(int pLed, int pMotor) {

        this->mesLeds = new BdLed(pLed) ;
        this->myMotor = new ServoMotor(pMotor) ;

}

void Card::Oppened() {
    this->mesLeds->Green() ;
    this->myMotor->Open() ;
}

void Card::Closed(){
  this->mesLeds->Red() ;
  this->myMotor->Close() ;
}

void Card::Connect() {
    this->mesLeds->White() ;
}