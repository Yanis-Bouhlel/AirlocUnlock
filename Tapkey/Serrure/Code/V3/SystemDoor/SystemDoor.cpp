//
// Created by Yanis on 21/03/2023.
//

#include "Arduino.h"
#include "SystemDoor.h"

SystemDoor::SystemDoor(Motor pMotor, Eclairage myLux) {
    myLed = myLux ;
    myMotor = pMotor ;
}

void SystemDoor::Ouverture() {
    myMotor.On() ;
    myMotor.Delay(4) ;
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

