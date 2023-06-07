//
// Created by Yanis on 06/06/2023.
//

#ifndef TAPKEY_BDLED_H
#define TAPKEY_BDLED_H

#include <Adafruit_NeoPixel.h>

class BdLed {
private:
    int ledPin ;
    void pinMode() ;
public:
    BdLed(int pLed);
    void Red();
    void White();
    void Green();
};

#endif //TAPKEY_BDLED_H
