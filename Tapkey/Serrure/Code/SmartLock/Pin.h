//
// Created by Yanis on 01/06/2023.
//

#ifndef CODE_PIN_H
#define CODE_PIN_H


class Pin {
    protected:
        int Motor ;
        int Led ;
        int Lecteur ;
    public:
        Pin() ;
        int setup(char howPin, int numPin) ;
};


#endif //CODE_PIN_H
