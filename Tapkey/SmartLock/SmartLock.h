//
// Created by Yanis on 05/06/2023.
//

#ifndef SMARTLOCK_SMARTLOCK_H
#define SMARTLOCK_SMARTLOCK_H

#include <Arduino.h>

#include "ModuleBluetooth.h"
#include "Motor.h"
#include "Led.h"

class SmartLock {
private:
  ModuleBluetooth *BLE ;
  Led *mesLeds;
  Motor *myServo;
  int MotorPin;
  int LedPin;
  int LectorPin;
public:
  SmartLock();
  String cout(String nimp);
  void WaitCommand(String Order, int pMotor, int pLed, int pLector);
};


#endif  //SMARTLOCK_SMARTLOCK_H
