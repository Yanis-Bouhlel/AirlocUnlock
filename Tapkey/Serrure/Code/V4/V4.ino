/*#include "Card.h"
Card* Esp32 = new Card();
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:
  Esp32->setup(6,2,3,4,5,15) ; 
  Esp32->Open() ; 
}
*/


#include "Eclairage.h"
Eclairage* Esp32 = new Eclairage(2);
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:
  //Esp32->setup(12,2,3,4,5,15) ; 
  Esp32->TurnOn('G') ; 
}
