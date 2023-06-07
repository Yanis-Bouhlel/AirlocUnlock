//
// Created by Yanis on 20/02/2023.
//

#include "Card.h"

Card::Card(String Model, ModuleBluetooth *BLE, Pins pin) {
    this->model = Model ;
    this->Power = true ;
}

int Card::setModel(String Model) {
    this->model = Model;
}