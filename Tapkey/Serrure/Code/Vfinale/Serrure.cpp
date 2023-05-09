//
// Created by Yanis on 09/05/2023.
//

#include "Serrure.h"

Serrure::Serrure(){
    if(this->Nom == ""){
        this->initLock = false ;
    }
}

bool Serrure::init() {
    if(!this->initLock){
        Bluetooth->cout("Veuillez entrer un nom pour votre SmartLock");
        this->Nom = Bluetooth->RecupMessage();
        if(this->Nom != ""){
            initLock = true ;
        }
    }
    else{
        WaitCommand() ;
    }
}

void Serrure::WaitCommand() {
    while(1){
        if(Bluetooth->RecupMessage() != ""){
            if(Bluetooth->RecupMessage() == "Open"){
                myLock->Open() ;
            }
            else if(Bluetooth->RecupMessage() == "Close"){
                myLock->Close() ;
            }
            else if(Bluetooth->RecupMessage() == "Battery") {
                Bluetooth->EnvoiBatterie(myLock->getBattery());
            }
        }

    }
}
