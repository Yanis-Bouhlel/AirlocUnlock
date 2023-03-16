//
// Created by Yanis on 15/03/2023.
//

#ifndef CARD_CARD_H
#define CARD_CARD_H
#include "ModuleBluetooth/ModuleBluetooth.h"
#include "Pins/Pins.h"

class Card {
    private:
        bool Power ;
        char Model ;
    public:
        Card(String model) ;
};


#endif //CARD_CARD_H
