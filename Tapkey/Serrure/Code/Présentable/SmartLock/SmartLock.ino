#include "SmartLock.h"
SmartLock maLock(2, 5);

#include "BluetoothSerial.h"

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;

void setup() {
  Serial.begin(115200);
  SerialBT.begin("ESP MODULE BLE");
  Serial.println("The device started, now you can pair it with bluetooth!");
}

void loop() {
  if (SerialBT.available()) {
    String message = "";
    for (int i = 0; i < 6; i++) {
      maLock.WaitCommand();
      char c = SerialBT.read();
      message += c;
      Serial.println(message);
      if (message == "open") {
        maLock.Open();
        delay(2000);
      } else if (message == "close") {
        maLock.Close();
        delay(2000);
      }
    }
  }
  delay(20);
}
