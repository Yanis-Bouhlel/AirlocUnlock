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
  ledcSetup(0, 5000, 12); // Set up PWM channel on pin 7 with 12-bit resolution
  ledcAttachPin(17, 0); // Attach the channel to the GPIO pin
  ledcWrite(0, speed); // Set the PWM duty cycle
  
  delay(time);
}

void Motor::moveLeft(int time) {
  pinMode(16, OUTPUT);
  ledcSetup(1, 5000, 12); // Set up PWM channel on pin 6 with 12-bit resolution
  ledcAttachPin(16, 1); // Attach the channel to the GPIO pin
  ledcWrite(1, speed); // Set the PWM duty cycle
  
  delay(time);
}
