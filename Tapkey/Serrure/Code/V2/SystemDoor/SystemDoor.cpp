//
// Created by Yanis on 16/03/2023.
//

#include "SystemDoor.h"
#include "Arduino.h"
/*Motor myMotor(5) ;
Eclairage Lums(2);*/

SystemDoor::SystemDoor() {
    /*myMotor->Setup() ;
    Lums.TurnOn('W') ;
    delay(5000);*/
    Ouverture() ; 
}

void SystemDoor::Ouverture() {
    /*myMotor->On();
    Lums.TurnOn('G') ;*/
}

void SystemDoor::Fermeture() {
   // myMotor->Off() ;
    //Lums.TurnOn('R') ;
}