#include "Led.h"
#include "Arduino.h"

#define NUM_LEDS 10
#define DATA_PIN 2

Adafruit_NeoPixel pixels(NUM_LEDS, DATA_PIN, NEO_GRB + NEO_KHZ800);

Led::Led(int LedPin) {
    this->Pin = LedPin ;
    PinMode() ;
    this->Light = false ;
}

void Led::PinMode() {
    pixels.begin();
}

void Led::White() {
    pixels.begin();
    for (int i = 0; i < NUM_LEDS; i++) {
        pixels.setPixelColor(i, pixels.Color(255, 255, 255));
        pixels.show();

    }
    this->Light = true ;
}

void Led::Red() {
    pixels.begin();
    for (int i = 0; i < NUM_LEDS; i++) {
        pixels.setPixelColor(i, pixels.Color(255, 0, 0));
        pixels.show();

    }
    this->Light = true ;
}

void Led::Green() {
    pixels.begin();
    for (int i = 0; i < NUM_LEDS; i++) {
        pixels.setPixelColor(i, pixels.Color(0, 255, 0));
        pixels.show();

    }
    this->Light = true ;
}

void Led::Off() {
    pixels.begin();
    for (int i = 0; i < NUM_LEDS; i++) {
        pixels.setPixelColor(i, pixels.Color(0, 0, 0));
        pixels.show();
    }
}