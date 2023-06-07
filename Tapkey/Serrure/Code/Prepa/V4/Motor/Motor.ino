#include "Motor.h"
Motor *myMotor = new Motor(150,100,2,3,4,5);
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:
  myMotor->move(-512);
}
