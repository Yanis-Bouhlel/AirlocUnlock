//
// Created by Yanis on 14/02/2023.
//

#include "headers/MotherCard.h"

MotherCard::MotherCard(String pModel, bool State) {
    this->model = pModel ;
    this->state = true ;
    this->battery = getBattery() ;
}

String MotherCard::getModel() {
    return this->model;
}

int MotherCard::getBattery() {
    return this->battery;
}

bool MotherCard::getState() {
    return this->state;
}
