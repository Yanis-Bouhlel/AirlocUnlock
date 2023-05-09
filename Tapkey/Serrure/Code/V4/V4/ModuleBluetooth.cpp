//
// Created by bouhlel_y2 on 4/4/2023.
//

#include "ModuleBluetooth.h"
//#include "BluetoothSerial.h"

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;

ModuleBluetooth::ModuleBluetooth() {
    Setup();
}

void ModuleBluetooth::Setup(String pNom) {
    this->nom = pNom ;
    Serial.begin(115200);
    SerialBT.begin("AirLock Model A");
    Serial.println("Votre appareil est pret a pour le jumelage!");
    while(1){
        Traitement();
    }
}

bool ModuleBluetooth::DoorState() {
    String State = connexionState().substring(50, 54);
    if (State == "Open") {
        return true;
    } else if (State == "Close"){
        return false;
    }
}

int ModuleBluetooth::BatteryState() {
    String Bat = connexionState().substring(33, 36);
    this->Batterie = Bat.toInt() ;
    if (this->Batterie > 0 && this->Batterie < 100) {
        return this->Batterie ;
    } else {
        return 404;
    }
}

void ModuleBluetooth::Traitement() {
    connexionState();
    if (connexionState() == "open") {
        BatteryState();
        DoorState();
    }
    else {

    }
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

bool ModuleBluetooth::getDoorState() {
    return this->DoorStates;
}

int ModuleBluetooth::getBatteryState() {
    if(this->Batterie <= 100 && this->Batterie >= 0 ){
        return this->Batterie ;
    }
    else {
        return -1 ;
    }
}
