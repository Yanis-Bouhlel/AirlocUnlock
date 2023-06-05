//
// Created by Yanis on 05/06/2023.
//
/*
#include "ModuleBluetooth.h"
#include "BluetoothSerial.h"
#include <Arduino.h>


#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;

ModuleBluetooth::ModuleBluetooth() {
    Serial.begin(115200);
    SerialBT.begin("AirLock Model A");
    Serial.println("Votre appareil est pret a pour le jumelage!");
}

String ModuleBluetooth::RecupMessage() {
    String message = "";

    if (SerialBT.available()) {
        char incomingChar = SerialBT.read();
        message += String(incomingChar);
    }
    delay(20);
    return message ;
}

void ModuleBluetooth::cout(String data) {
    SerialBT.println(data) ;
    delay(30000) ;
}

void ModuleBluetooth::EnvoiBatterie(int lvlBattery) {
    SerialBT.println(String(lvlBattery)) ;
    delay(30000) ;
}


*/
