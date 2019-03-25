# ESP8266 HOME AUTOMATION **preALPHA**

A React web app and Arduino sketch which let you setup and controll Servos, LEDs, ... from your browser over Wi-Fi.

```
WARNING: This project is currently in a concept phase, expect nothing to work and everything to be buggy.
```

## About

Just a simple web interface to controll DIY Smart Home over Wi-Fi

### Main features

- Controll DIY smart home gadgets from your phone/PC
- Easy setup from the browser, no need to write your own Arduino code
- Arduino configuration is stored on your local server (running on the Raspberry Pi or any PC in your local network), in case the Arduino looses power or reboots itself, the configuration is downloaded from the server
- All features use your local home network, no data is sent to the internet, no information leaves your home

### Hardware requirements

- A PC that will run the server on your LAN (recommend Raspberry Pi)
- ESP8266 Arduino compatible board (I use the Wemos D1 ESP8266 Arduino Uno clone)
- Some IO peripherals (Servo motors, LEDs, ...)
- Breadboard + wires or soldering station + wires

### Required skills

- Basic Arduino (edit Wi-Fi config + compile and upload a sketch)
- Basic command-line (linux, windows or mac)
- Basic electronics (connect input/output devices to Arduino)

### What can you connect to the Arduino GPIOs

- Servo motors
- Stepper motors (with driver)
- DC motors (with driver)
- LEDs
- Relays
- Open/close door/window sensors
- Buttons/switches
- Light/temperature sensors

## Developer

### Tech Specs

- Node.js backend
- React + Bootstrap frontend
- Arduino

### New feature ideas

- Add MQTT
- Arduino Wi-Fi OTA setup
- Broadcast search for devices (no manual IP setup)
