//
// Created by Yanis on 26/01/2023.
//

#include "Led.h"
#include "Arduino.h"

#define NUM_LEDS 10
#define DATA_PIN 2

CRGB leds[NUM_LEDS];

Led::Led(int LedPin) {
    this->Pin = LedPin ;
    PinMode() ; 
}

void Led::PinMode() {
    FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS) ; 
}

void Led::White() {
    for(int i = 0 ; i < 10; i++)
  {
    leds[i] = CRGB(255,255,255);
    FastLED.show();
  }
    this->Light = true ;
}

void Led::Red() {
    for(int i = 0 ; i < 10; i++)
  {
    leds[i] = CRGB(255,0,0);
    FastLED.show();
  }
    this->Light = true ;
}

void Led::Green() {
    for(int i = 0 ; i < 10; i++)
  {
    leds[i] = CRGB(0,255,0);
    FastLED.show();
  }
    this->Light = true ;
}

void Led::Off() {
    for(int i = 0 ; i < 9; i++)
    {
        leds[i] = CRGB(0,0,0);
        FastLED.show();
    }    
    this->Light = false ;
}