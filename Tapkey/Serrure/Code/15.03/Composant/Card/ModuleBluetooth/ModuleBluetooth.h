//
// Created by Yanis on 15/03/2023.
//

#ifndef MODULEBLUETOOTH_MODULEBLUETOOTH_H
#define MODULEBLUETOOTH_MODULEBLUETOOTH_H


class ModuleBluetooth {
    private:
        bool ConnexionState ;
        bool DoorState ;
        int Battery ;
    public:
        ModuleBluetooth();
        void Setup() ;
        bool DoorState() ;
        int BatteryState() ;
        String connexionState() ;
};


#endif //MODULEBLUETOOTH_MODULEBLUETOOTH_H
