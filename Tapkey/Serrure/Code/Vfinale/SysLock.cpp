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

    const int pinAnalogique = A0;  // Numéro de la broche analogique utilisée

    const float tensionMin = 10.0;  // Tension minimale de la batterie
    const float tensionMax = 12.0;  // Tension maximale de la batterie

    const float R1 = 10000.0;  // Valeur de résistance connectée à la tension de la batterie
    const float R2 = 10000.0;  // Valeur de résistance connectée à la masse (GND)


    int lectureAnalogique = analogRead(pinAnalogique);  // Lecture de la valeur analogique
    float tensionBatterie = (lectureAnalogique / 1023.0) * 5.0 * (R1 + R2) / R2;  // Calcul de la tension de la batterie
    int niveauBatterie = map(tensionBatterie, tensionMin, tensionMax, 0, 100);  // Calcul du niveau de batterie en pourcentage

    // Utilisation du niveau de batterie (par exemple, l'afficher sur le moniteur série)
    Serial.begin(9600);
    Serial.print("Niveau de batterie : ");
    Serial.print(niveauBatterie);
    Serial.println("%");

    delay(1000);  // Attente d'une seconde avant la prochaine lecture

    this->Battery = niveauBatterie ;

    return this->Battery;
}


