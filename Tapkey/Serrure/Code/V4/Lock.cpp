//
// Created by bouhlel_y2 on 4/4/2023.
//

#include "Lock.h"

Lock::Lock() {
    this->State = true ;
    this->Esp->setup(19,18,5);
}

