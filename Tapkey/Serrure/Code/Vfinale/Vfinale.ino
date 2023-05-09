#include <Arduino.h>
#include "Serrure.h"
Serrure *Airlock = new Serrure() ; 
void setup() {


}

void loop() {
  Airlock->init(); 
}
