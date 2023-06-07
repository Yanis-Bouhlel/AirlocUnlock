cmake_minimum_required(VERSION 3.20)
project(V4)

set(CMAKE_CXX_STANDARD 14)

add_executable(V4 main.cpp Broches.cpp Broches.h ModuleBluetooth.cpp ModuleBluetooth.h Card.cpp Card.h Eclairage.cpp Eclairage.h Lock.cpp Lock.h Motor.cpp Motor.h)
