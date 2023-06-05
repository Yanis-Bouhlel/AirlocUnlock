//
// Created by Yanis on 01/06/2023.
//

#include "Pin.h"

void Pin::setup(char howPin, int numPin) {
    if (howPin == 'M'){
        this->Motor = numPin ;
        return 1;
    } else if (howPin == 'L'){
        this->Led = numPin ;
        return 2;
    } else if (howPin == 'l'){
        this->Lecteur = numPin ;
        return 3;
    }
}