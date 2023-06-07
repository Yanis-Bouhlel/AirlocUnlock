//
// Created by Yanis on 01/06/2023.
//

#ifndef CODE_CARD_H
#define CODE_CARD_H
#include "Pin.h"

class Card {
protected:
    Pin *mesPins ;
public:
    Card() ;
    void setup(int Pmotor, int Pleds, int Plecteur) ;
};


#endif //CODE_CARD_H
