#include "BluetoothSerial.h"

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;
int test  = 2 ;
//SmartLock* Airloc = new SmartLock();
//ModuleBluetooth *BLE = new ModuleBluetooth() ; 

//Motor* Airloc = new Motor(test);
//Led* mesLeds = new Led(7);

void setup() {
    Serial.begin(115200);
    SerialBT.begin("AirLock Model A");
    Serial.println("Votre appareil est pret a pour le jumelage!");}

String RecupMessage() {
    String message = "";

    if (SerialBT.available()) {
        char incomingChar = SerialBT.read();
        message += String(incomingChar);
    }
    delay(20);
    return message ;
}
void loop() {
  Serial.print(RecupMessage());
  //mesLeds->TurnOn('G');
  //Airloc->Turn(-180) ; 
}
