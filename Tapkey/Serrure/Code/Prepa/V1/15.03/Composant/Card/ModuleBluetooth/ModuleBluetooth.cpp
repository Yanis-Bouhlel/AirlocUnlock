//
// Created by Yanis on 15/03/2023.
//

#include "ModuleBluetooth.h"
#include "BluetoothSerial.h"

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;

ModuleBluetooth::ModuleBluetooth() {
  Setup();
  connexionState()
}

void ModuleBluetooth::Setup() {
  Serial.begin(115200);
  SerialBT.begin("AirLock Model A");
  Serial.println("Votre appareil est pret a pour le jumelage!");
}

bool ModuleBluetooth::DoorState() {
  if (connexionState() == "Ouverture") {
    return true;
  } else {
    return false;
  }
}

int ModuleBluetooth::BatteryState() {
  if (connexionState().toInt() <= 100 &&  connexionState().toInt() >= 0) {
    return this->Battery;
  } else {
    return -1;
  }
  return -1;
}

String ModuleBluetooth::connexionState() {
  String message = "";

  if (SerialBT.available()) {
    char incomingChar = SerialBT.read();
    if (incomingChar != '\n') {
      message += String(incomingChar);
    } else {
      message = "";
    }
    //Serial.write(incomingChar);
  }
  delay(20);

  return message;
}

