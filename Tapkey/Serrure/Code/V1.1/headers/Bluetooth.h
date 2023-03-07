//
// Created by Yanis on 14/02/2023.
//

#ifndef V1_0_BLUETOOTH_H
#define V1_0_BLUETOOTH_H
#include "MotherCard.h"

class Bluetooth {
    protected:
        String name ;
        bool CoBluetooth ;
        bool ModuleState ;

    public:
        Bluetooth(String pName) ;
        void SerialBegin() ;
        void Send(String pMessage) ;
        void Get(String pMessage) ;
        bool getModuleState() ;


};


#endif //V1_0_BLUETOOTH_H
