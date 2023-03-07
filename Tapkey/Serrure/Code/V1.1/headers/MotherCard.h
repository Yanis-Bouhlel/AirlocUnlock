//
// Created by Yanis on 14/02/2023.
//

#ifndef V1_0_MOTHERCARD_H
#define V1_0_MOTHERCARD_H

class MotherCard {
    protected:
        String model ;
        bool state ;
        int battery ;
    private:
        MotherCard(String pModel, bool State) ;
        String getModel() ;
        int getBattery() ;
        bool getState() ;

};


#endif //V1_0_MOTHERCARD_H
