//
// Created by Yanis on 05/06/2023.
//
#include <Arduino.h>

#include <Adafruit_NeoPixel.h>
#include "Led.h"

#define NUM_LEDS 10
#define LED_TYPE NEO_GRB + NEO_KHZ800

Adafruit_NeoPixel strip;

Led::Led(int pLed) {
    this->ledPin = pLed ;
}

void Led::setup(int pLed) {
    strip = Adafruit_NeoPixel(NUM_LEDS, pLed, LED_TYPE);
    this->ledPin = pLed ;
    strip.begin();
    strip.show();
}

void Led::TurnOn(char pColor) {
    if (pColor == 'R'){
        Red() ;
    }
    else if (pColor == 'W'){
        White() ;
    }
    else if (pColor == 'G'){
        Green() ;
    }
}

void Led::Red() {
    for (int i = 0; i < strip.numPixels(); i++) {
        strip.setPixelColor(i, strip.Color(255, 0, 0)); // Rouge
    }
    strip.show();
}

void Led::White() {
    for (int i = 0; i < strip.numPixels(); i++) {
        strip.setPixelColor(i, strip.Color(255, 255, 255)); // Blanc
    }
    strip.show();
}

void Led::Green() {
    for (int i = 0; i < strip.numPixels(); i++) {
        strip.setPixelColor(i, strip.Color(0, 255, 0)); // Vert
    }
    strip.show();
}

