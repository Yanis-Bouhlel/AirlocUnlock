cmake_minimum_required(VERSION 3.22)
project(V1_0)

set(CMAKE_CXX_STANDARD 14)

add_executable(V1_0 MotherCard.cpp headers/MotherCard.h Pins.cpp headers/Pins.h Led.cpp headers/Led.h ServoMotor.cpp headers/ServoMotor.h Bluetooth.cpp headers/Bluetooth.h SysDoor.cpp headers/SysDoor.h)
