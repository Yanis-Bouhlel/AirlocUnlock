//
// Created by bouhlel_y2 on 3/6/2023.
//

#ifndef CODE_CYLINDRE_H
#define CODE_CYLINDRE_H
#include "../../ServoMotor/ServoMotor.h"

class Cylindre {
    protected:
        bool DoorState ;
        ServoMotor *myMotor ;
    public:
        Cylindre()  ;
        void Ouverture() ;
        void Fermeture() ;
};


#endif //CODE_CYLINDRE_H
