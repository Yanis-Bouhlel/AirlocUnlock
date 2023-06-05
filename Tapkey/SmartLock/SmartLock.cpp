//
// Created by Yanis on 05/06/2023.
//
#include <Arduino.h>
#include "SmartLock.h"


SmartLock::SmartLock() {
this->BLE = new ModuleBluetooth() ; 

}
String SmartLock::cout(String nimp) {
  return nimp;
}

void SmartLock::WaitCommand(String Order, int pMotor, int pLed, int pLector) {
  this->myServo = new Motor(pMotor);
  this->mesLeds = new Led(pLed);

  if (Order == "Open") {
    this->myServo->Turn(180);
    //this->mesLeds->TurnOn('G');
  } else if (Order == "Close") {
    this->myServo->Turn(-180);
    //this->mesLeds->TurnOn('G');
  } else if (Order == "Battery") {
  } else {
  }
}