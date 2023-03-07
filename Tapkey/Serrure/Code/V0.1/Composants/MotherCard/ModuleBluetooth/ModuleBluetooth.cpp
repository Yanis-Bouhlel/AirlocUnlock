//
// Created by Yanis on 20/02/2023.
//
#include "Arduino.h"
#include "ModuleBluetooth.h"
#include "BluetoothSerial.h"

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;

ModuleBluetooth::ModuleBluetooth(int Pin) {
  this->pin = Pin;
  Setup();
}

void ModuleBluetooth::Setup() {
  Serial.begin(115200);
  SerialBT.begin("AirLock Model A");  
  Serial.println("Votre appareil est pret a pour le jumelage!");
}
 
void ModuleBluetooth::BatteryState() {
}

void ModuleBluetooth::ConnexionState() {
  
  if (Serial.available()) {
    SerialBT.write(Serial.read());
  }
  if (SerialBT.available()) {
    if (SerialBT.read() == '{') {
      this->letter = SerialBT.read();
      if (this->letter != '}') {
        this->message += String(this->letter);
        Serial.print(this->letter);
      } else {
        this->message = "";
      }
    }
  }
  delay(20);
}

void ModuleBluetooth::Error() {
}
