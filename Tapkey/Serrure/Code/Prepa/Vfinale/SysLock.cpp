//
// Created by Yanis on 09/05/2023.
//

#include "SysLock.h"

SysLock::SysLock(){
    this->State = false ;
}

void SysLock::Open() {
    if(!this->State){
        Esp32->Open() ;
        myMotor->moveLeft(5000);
    }
}

void SysLock::Close() {
    if(this->State){
        Esp32->Close() ;
        myMotor->moveRight(5000);
    }
}

int SysLock::getBattery() {

    const int pinAnalogique = A0;  

    const float tensionMin = 10.0; 
    const float tensionMax = 12.0; 

    const float R1 = 10000.0;  
    const float R2 = 10000.0;  
    
    int lectureAnalogique = analogRead(pinAnalogique);  
    float tensionBatterie = (lectureAnalogique / 1023.0) * 5.0 * (R1 + R2) / R2;
    int niveauBatterie = map(tensionBatterie, tensionMin, tensionMax, 0, 100);  

    Serial.begin(9600);
    Serial.print("Niveau de batterie : ");
    Serial.print(niveauBatterie);
    Serial.println("%");

    delay(1000); 

    this->Battery = niveauBatterie ;

    return this->Battery;
}


