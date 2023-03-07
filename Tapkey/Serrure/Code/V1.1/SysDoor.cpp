//
// Created by Yanis on 14/02/2023.
//

#include "headers/SysDoor.h"

Led Main(3) ;
Led Rouge(4);
Led Vert(2) ;
ServoMotor myMotor(9) ;
MotherCard Esp32 ;
Bluetooth Ble() ; 
//Lecteur myLector(12) ;

SysDoor::SysDoor() {
    Pins AllPin(Main.GetPin(), Rouge.GetPin(), Vert.GetPin(), myMotor.GetServoPin()) ;
    Main.On() ;
    Rouge.Off();
    Vert.Off();
}

void SysDoor::Ouverture() {
    attach();
    myMotor.Open() ;
    Vert.On() ;
    Rouge.Off();
    Main.Off();
}

void SysDoor::Fermeture() {
    attach();
    myMotor.Close() ;
    Vert.Off() ;
    Rouge.On();
    Main.Off();
}
void SysDoor::attach(){
    myMotor.attach();
}

void SysDoor::Connexion() {

}