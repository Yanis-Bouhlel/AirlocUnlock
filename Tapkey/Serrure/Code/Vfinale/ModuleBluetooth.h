//
// Created by Yanis on 09/05/2023.
//

#ifndef VFINALE_MODULEBLUETOOTH_H
#define VFINALE_MODULEBLUETOOTH_H

#include "Arduino.h"


class ModuleBluetooth {
private:

public:

    ModuleBluetooth();
    String RecupMessage();
    void cout(String data) ;
    void EnvoiBatterie(int lvlBattery);
};


#endif //VFINALE_MODULEBLUETOOTH_H
