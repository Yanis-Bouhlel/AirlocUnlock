//
// Created by Yanis on 20/02/2023.
//

#ifndef COMPOSANTS_CARD_H
#define COMPOSANTS_CARD_H


class Card {
    protected:
        String model;
        int nombrePin;
        bool Power ;
        ModuleBluetooth *Module ;
        Pins pins ;
    public:
        Card(String Model,ModuleBluetooth *BLE, Pins pin);
        setModel(String Model);



};


#endif //COMPOSANTS_CARD_H
