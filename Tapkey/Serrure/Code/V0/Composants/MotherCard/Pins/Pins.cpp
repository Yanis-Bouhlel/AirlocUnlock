//
// Created by Yanis on 21/02/2023.
//

#include "Pins.h"
#include "Arduino.h"

Pins::Pins(int mainLedPin, int closeLedPin, int openLedPin, int servoPin) {
    this->MainLedPin = mainLedPin ;
    this->CloseLedPin = closeLedPin ;
    this->OpenLedpin = openLedPin ;
    this->ServoPin = servoPin ;
}

void Pins::SetPin(char howPin, int NumPin) {
    if(howPin == 'M'){
        this->MainLedPin = NumPin  ;
    }
    else if(howPin == 'R'){
        this->CloseLedPin = NumPin  ;
    }
    else if(howPin == 'G'){
        this->OpenLedpin = NumPin  ;
    }
    else if(howPin == 'S'){
        this->ServoPin = NumPin  ;
    }
    else if(howPin == 'L'){
        this->LectorPin = NumPin  ;
    }
    else if(howPin == 'O'){
        this->OtherPin = NumPin  ;
    }
    else {
        break ;
    }
}

void Pins::SerialBegin(){
    Serial.begin(9600) ;
}
void Pins::GetPin() {
    Serial.println("Voici la liste des branchement des pin : ");
    Serial.print("Le numéro de mainPin est : ") ;
    Serial.println(this->MainLedPin) ;
    Serial.print("Le numéro de CloseLedPin est : ") ;
    Serial.println(this->CloseLedPin) ;
    Serial.print("Le numéro de OpenLedpin est : ") ;
    Serial.println(this->OpenLedpin) ;
    Serial.print("Le numéro de ServoPin est : ") ;
    Serial.println(this->ServoPin) ;
    Serial.print("Le numéro de LectorPin est : ") ;
    Serial.println(this->LectorPin) ;
    exit(0);
}
