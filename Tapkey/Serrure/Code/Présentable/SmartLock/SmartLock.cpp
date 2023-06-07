//
// Created by Yanis on 06/06/2023.
//

#include "SmartLock.h"

SmartLock::SmartLock(int pLed, int pMotor) {
  this->Esp32 = new Card(pLed, pMotor);
  this->state = false;
}

void SmartLock::WaitCommand() {
  this->Esp32->Connect();
}

void SmartLock::Close() {
  if (this->state == true) {
    this->Esp32->Closed();
    this->state = false;
  }
}

void SmartLock::Open() {
  if (this->state == false) {
    this->Esp32->Oppened();
    this->state = true;
  }
}