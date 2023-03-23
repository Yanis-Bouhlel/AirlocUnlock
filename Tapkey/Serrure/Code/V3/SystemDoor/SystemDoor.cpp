//
// Created by Yanis on 21/03/2023.
//

#include "Arduino.h"
#include "SystemDoor.h"


Motor myMotor(2);
Eclairage myLed(5) ;

SystemDoor::SystemDoor() {
}

void SystemDoor::Ouverture() {
  //myMotor.On() ;
  //myMotor.Delay(4) ;
  myLed.TurnOn('G') ;
}

void SystemDoor::Fermeture() {
  myMotor.Off() ;
  myMotor.Delay(4) ;
  myLed.TurnOn('R') ;
}

void SystemDoor::Attente() {
  myLed.TurnOn('W') ;
}
