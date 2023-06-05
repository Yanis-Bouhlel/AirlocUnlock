//
// Created by Yanis on 09/05/2023.
//

#include "Motor.h"
#include <Stepper.h>
#include "Arduino.h"
Motor::Motor(int p1, int p2) {

}
int speed = 4095;

void Motor::moveRight(int time) {
  pinMode(17, OUTPUT);
  ledcSetup(0, 5000, 12);
  ledcAttachPin(17, 0);
  ledcWrite(0, speed);
  
  delay(time);
}

void Motor::moveLeft(int time) {
  pinMode(16, OUTPUT);
  ledcSetup(1, 5000, 12);
  ledcAttachPin(16, 1);
  ledcWrite(1, speed);
  
  delay(time);
}
