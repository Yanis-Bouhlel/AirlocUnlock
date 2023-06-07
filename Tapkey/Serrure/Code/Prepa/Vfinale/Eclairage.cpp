//
// Created by Yanis on 09/05/2023.
//

#include "Eclairage.h"
#include <Adafruit_NeoPixel.h>
#include "Arduino.h"


#define NEO_GRB NEO_GRB
#define NEO_KHZ800 NEO_KHZ800



Eclairage::Eclairage(int LedPin) {
    this->Pin = LedPin;
    this->Light = false;
    PinMode();

}

void Eclairage::PinMode() {
    Adafruit_NeoPixel pixels(this->Pin, 10, NEO_GRB + NEO_KHZ800);
    pixels.begin();
}

void Eclairage::White() {
    PinMode();
    for (int i = 0; i < NUM_LEDS; i++) {
        pixels.setPixelColor(i, pixels.Color(255, 255, 255));
        pixels.show();
    }
    this->Light = true;
}

void Eclairage::Red() {
    PinMode();
    for (int i = 0; i < NUM_LEDS; i++) {
        pixels.setPixelColor(i, pixels.Color(255, 0, 0));
        pixels.show();
    }
    this->Light = true;
}

void Eclairage::Green() {
    PinMode() ;
    for (int i = 0; i < NUM_LEDS; i++) {
        pixels.setPixelColor(i, pixels.Color(0, 255, 0));
        pixels.show();
    }
    this->Light = true;
}

void Eclairage::Off() {


    PinMode() ;
    for (int i = 0; i < NUM_LEDS; i++) {
        pixels.setPixelColor(i, pixels.Color(0, 0, 0));
        pixels.show();
    }
}

void Eclairage::TurnOn(char HowColor) {
    if (HowColor == 'W') {
        White();
    } else if (HowColor == 'R') {
        Red();
    } else if (HowColor == 'G') {
        Green();
    } else {
        Off();
    }
}
