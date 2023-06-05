//
// Created by Yanis on 05/06/2023.
//

#ifndef TAPKEY_MODULEBLUETOOTH_H
#define TAPKEY_MODULEBLUETOOTH_H
#include <Arduino.h>


class ModuleBluetooth {
private:

public:

    ModuleBluetooth();
    String RecupMessage();
    void cout(String data) ;
    void EnvoiBatterie(int lvlBattery);
};


#endif //TAPKEY_MODULEBLUETOOTH_H
