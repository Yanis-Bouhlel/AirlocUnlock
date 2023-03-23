//
// Created by Yanis on 16/03/2023.
//

#include "Eclairage.h"
#include <Adafruit_NeoPixel.h>
#include "Arduino.h"


#define NUM_LEDS 3
#define DATA_PIN 14

Adafruit_NeoPixel pixels(NUM_LEDS, DATA_PIN, NEO_GRB + NEO_KHZ800);


Eclairage::Eclairage(int LedPin) {
    this->Pin = LedPin;
    PinMode();
    this->Light = false;
}

void Eclairage::PinMode() {
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
