//
// Created by Yanis on 09/05/2023.
//

#include "Motor.h"
#include <Stepper.h>
#include "Arduino.h"
Motor::Motor(int p1, int p2, int p3, int p4) {

}
const int nombreDePas = 200;  // Nombre de pas pour effectuer un tour complet
const int moteurPin1 = 2;     // Broche de commande du moteur
const int moteurPin2 = 3;     // Broche de commande du moteur
const int moteurPin3 = 4;     // Broche de commande du moteur
const int moteurPin4 = 5;     // Broche de commande du moteur

Stepper monMoteur(nombreDePas, moteurPin1, moteurPin3, moteurPin2, moteurPin4);

void Motor::moveRight(int time) {
    monMoteur.setSpeed(500);
    monMoteur.step(nombreDePas);
    delay(time);
}

void Motor::moveLeft(int time) {
    monMoteur.setSpeed(500);
    monMoteur.step(-nombreDePas);
    delay(time);
}
