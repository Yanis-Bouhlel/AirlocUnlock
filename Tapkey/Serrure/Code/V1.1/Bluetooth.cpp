//
// Created by Yanis on 14/02/2023.
//

#include "headers/Bluetooth.h"
#include "BluetoothSerial.h"
#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;
MotherCard Esp32("ESP32", true) ;

Bluetooth::Bluetooth(String pName) {
    SerialBegin() ;
    SerialBT.begin(Esp32.getModel());
}

void Bluetooth::Send(String pMessage) {
    if (Serial.available()) {
        SerialBT.write(pMessage);
    }
}

void Bluetooth::Get(String pMessage) {
    if (SerialBT.available()) {
        Serial.write(pMessage);
    }
}

bool Bluetooth::getModuleState() {
    if(Esp32.getState() == true)
    {
        this->ModuleState = true ;
        return this->ModuleState ;
    }
    else if(Esp32.getState() == false)
    {
        this->ModuleState = false ;
        return this->ModuleState ;
    }
}

void Bluetooth::SerialBegin() {
    Serial.begin(115200);

}
