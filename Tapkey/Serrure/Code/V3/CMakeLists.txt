cmake_minimum_required(VERSION 3.22)
project(V3)

set(CMAKE_CXX_STANDARD 14)

add_executable(V3 main.cpp Card/Pins/Pins.cpp Card/Pins/Pins.h Eclairage/Eclairage.cpp Eclairage/Eclairage.h Motor/Motor.cpp Motor/Motor.h SystemDoor/SystemDoor.cpp SystemDoor/SystemDoor.h Cylindre.cpp Cylindre.h Card/Card.cpp Card/Card.h)
