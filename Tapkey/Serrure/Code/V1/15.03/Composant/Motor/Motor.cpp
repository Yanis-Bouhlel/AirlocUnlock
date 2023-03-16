//
// Created by Yanis on 15/03/2023.
//

#include "Motor.h"
#include "Arduino.h"
Motor::Motor(int MotorPin) {
  this->Pin = MotorPin;
  Setup();
}

void Motor::Delay(int s) {
  delay(s * 1000);
}

void Motor::Setup() {
  pinMode(this->Pin, OUTPUT);
}

void Motor::On() {
  digitalWrite(this->Pin, HIGH);
}

void Motor::Off() {
  digitalWrite(this->Pin, LOW);
}