//
// Created by Yanis on 20/02/2023.
//

#ifndef COMPOSANTS_MODULEBLUETOOTH_H
#define COMPOSANTS_MODULEBLUETOOTH_H


class ModuleBluetooth {
    protected:
        int pin ;
        bool connexionState ;
        bool batteryState ;
        int codeError ;
        char letter ;
        String message ;
    public:
        ModuleBluetooth(int Pin);
        void Setup() ;
        void BatteryState() ;
        void ConnexionState();
        void Error();
};


#endif //COMPOSANTS_MODULEBLUETOOTH_H
