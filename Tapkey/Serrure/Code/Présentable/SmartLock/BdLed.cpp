//
// Created by Yanis on 06/06/2023.
//

#include "BdLed.h"

#define NUM_LEDS 20
#define LED_TYPE NEO_GRB + NEO_KHZ800

BdLed::BdLed(int pLed) {
    this->ledPin = pLed ;
    pinMode() ;
}

void BdLed::pinMode() {
    Adafruit_NeoPixel strip(NUM_LEDS, this->ledPin, LED_TYPE);
    strip.begin();
}

void BdLed::Red() {
    Adafruit_NeoPixel strip(NUM_LEDS, this->ledPin, LED_TYPE);
    strip.begin();
    for (int i = 0; i < strip.numPixels(); i++) {
        strip.setPixelColor(i, strip.Color(255, 0, 0)); // Rouge
    }
    strip.show();
}

void BdLed::White() {
    Adafruit_NeoPixel strip(NUM_LEDS, this->ledPin, LED_TYPE);
    strip.begin();
    for (int i = 0; i < strip.numPixels(); i++) {
        strip.setPixelColor(i, strip.Color(255, 255, 255)); // Blanc
    }
    strip.show();
}

void BdLed::Green() {
    Adafruit_NeoPixel strip(NUM_LEDS, this->ledPin, LED_TYPE);
    strip.begin();
    for (int i = 0; i < strip.numPixels(); i++) {
        strip.setPixelColor(i, strip.Color(0, 255, 0)); // Vert
    }
    strip.show();
}