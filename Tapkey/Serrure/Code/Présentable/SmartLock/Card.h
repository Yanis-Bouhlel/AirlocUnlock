//
// Created by Yanis on 06/06/2023.
//

#ifndef TAPKEY_CARD_H
#define TAPKEY_CARD_H

#include "BdLed.h"
#include "ServoMotor.h"


class Card {
private:
    BdLed *mesLeds ;
    ServoMotor *myMotor ;

public:
    Card(int pLed, int pMotor);
    void Oppened() ;
    void Closed() ;
    void Connect() ;

};


#endif //TAPKEY_CARD_H
