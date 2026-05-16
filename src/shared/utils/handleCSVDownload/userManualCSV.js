import { generateCSV } from "./index";

export const handleUserManualCSVDownload = () => {
  const row = {
    id: "user-manual-001",

    cover_page: JSON.stringify({
      title: "STEM Kit User Manual",
      logo: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1778821151/stembotix/reports/user-manual/cover-page/1778821150698/kfflm0drzsvm4jfbw6zt.jpg",
      ],
      date: "2024-01-01",
      version: "1.0",
    }),

    introduction: JSON.stringify({
      content: `The Dog Bot is a simple and interactive walking robot designed for beginners to learn robotics, electronics, and programming in an easy and practical way. This robot uses 4 SG90 servo motors to create walking movements similar to a small robotic dog. The entire structure is made using laser-cut MDF parts, which makes the assembly process simple and student-friendly. 
The robot is controlled using an Arduino Nano mounted on the OttoBot PCB. A BLE (Bluetooth Low Energy) module is used for wireless communication, allowing the Dog Bot to be controlled using the RC Controller mobile application. Students can learn servo motor control, Bluetooth communication, robot movement, and basic embedded programming while building this project. 
This kit is specially designed for school students, STEM learning activities, robotics workshops, and beginner-level embedded system projects. The Dog Bot helps students improve their creativity, logical thinking, and hands-on engineering skills through practical learning.`,
      images: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1778820146/stembotix/reports/user-manual/introduction/1778820146501/fptasrhjtpi8havktqq2.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1778820147/stembotix/reports/user-manual/introduction/1778820146501/bdh5t3etjqy9tlfiivzh.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1778820147/stembotix/reports/user-manual/introduction/1778820146501/b9iwxa6fhr0wbvolpmum.jpg",
      ],
    }),

    whats_in_the_kit: JSON.stringify([
      {
        itemName: "Arduino Nano",
        description:
          "The Arduino Nano is the main controller of the robot. It controls all servo motors according to the uploaded program.",
        image: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1778820158/stembotix/reports/user-manual/kit-items/1778820158640/mi30unqjl2gcr3np7ztc.jpg",
        ],
      },
      {
        itemName: "Servo Arms & Screws",
        description:
          "Mechanical attachments used to connect servo motors to the  robot’s legs securely and transfer motion.",
        image: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1778820161/stembotix/reports/user-manual/kit-items/1778820162058/crntqdgrtp7ysjz3o5wn.jpg",
        ],
      },
      {
        itemName: "Arduino Nano Cable",
        description:
          "The USB cable is used for:  Uploading Arduino code, Powering the Nano during testing ",
        image: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1778820166/stembotix/reports/user-manual/kit-items/1778820166130/yrwnt6ocnmn4k2bkdmnb.jpg",
        ],
      },
    ]),

    hardware_setup: JSON.stringify([
      {
        stepNumber: 1,
        title: "Servo Preparation",
        description: `First, Take the controller board and the Arduino Nano.
Carefully place the Arduino Nano into the socket on the board and press it gently to fix it properly.
Carefully observe the image and fix the Arduino Nano on the board. Make sure the Nano’s USB port is facing towards the ON/OFF switch side of the board.
Servo Connections on PCB :
The PCB provides multiple servo connection pins for controlling all the motors.
Each servo has 3 connections:
• VCC (5V) – Power supply
• GND – Ground
• Signal – Connected to Arduino digital pins
The signal pins of the servos are connected to different digital pins of the Arduino Nano such as D3, D5, D6, D9, D10, D11, D12, and D13.
After that, Before starting the assembly, it is important to set all servo motors to 90°. This process is called servo calibration. First, we will set all the servos to 90° to ensure proper alignment during assembly.`,
        image: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1778757467/stembotix/reports/user-manual/hardware-setup/1778757467167/p3sbdm6udvdp2ejddp9m.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1778757467/stembotix/reports/user-manual/hardware-setup/1778757467167/txix4fvjfkpuxk7mbkri.jpg",
        ],
        notes:
          "Make sure the connection is correct to avoid any damage to the servo motor.",
      },
      {
        stepNumber: 2,
        title: "Fix 4 Servos on Servo Holder Plates",
        description: `Take 4 servo holder plates and 4 SG90 servo motors.
Place servo motor in each servo holder plate.
Fix each servo using:
● M2 × 10 mm bolts
● M2 nuts
Make sure:
● Servo shaft is on the outside Shown in image.
● Servo wire comes out from the inside side.
● Servo is straight and tight.`,
        image: [],
        notes: "Do not over-tighten the bolts. The MDF plate can break.",
      },
      {
        stepNumber: 3,
        title: "Fix 4 Servos on Servo Holder Plates",
        description: `Take the main base plate and 4 spacers.
Fix the spacers on the base plate using:
● M3 × 10 mm bolts
These spacers will hold the OttoBot PCB above the base plate.`,
        image: [],
        notes: "Keep all spacers straight while tightening.",
      },
      {
        stepNumber: 4,
        title: "Fix OttoBot PCB and Arduino Nano",
        description: `Place the OttoBot PCB on the spacers.
Align the PCB holes with the spacer holes.
Fix the PCB using:
● M3 × 10 mm bolts
● M3 nuts
insert the Arduino Nano on the PCB carefully.
Make sure:
● Arduino Nano pins are inserted correctly.
● USB port is facing outside.
● Nano is not inserted in reverse direction.`,
        image: [],
        notes: "Wrong Nano direction can damage the board.",
      },
    ]),

    programming_setup: JSON.stringify([
      {
        stepNumber: 1,
        title: "Open Arduino IDE",
        description: "Open Arduino IDE on your computer.",
        image: [],
        codeSnippet: "",
        syntaxLabel: "",
        explanation: "",
      },
      {
        stepNumber: 2,
        title: "Paste the Otto Bot Code",
        description:
          "Now scan the Qr and copy the DIY Otto Bot code and paste it into Arduino IDE.",
        image: [],
        codeSnippet: `#include <Servo.h>
Servo myServo;
void setup() {
myServo.attach(9); // connect servo signal to pin D9
}
void loop() {
// Move to 0 degree
myServo.write(0);
delay(1000);
// Move to 90 degree
myServo.write(90);
delay(1000);
// Move to 180 degree
myServo.write(180);
delay(1000);
// Come back to 90 degree and stay there
myServo.write(90);
while(true); // stop here (servo will hold at 90)
}`,
        syntaxLabel: "Arduino C",
        explanation: "This code initializes pin 13 as an output for the LED.",
      },
      {
        stepNumber: 4,
        title: "Connecting to Bluetooth (Mobile)",
        description: `1. Turn ON Bluetooth on your smartphone
2. Search for available devices
3. Select HC-05
4. Enter password:
○ 1234
Once paired, the device will be ready to connect with the app.`,
        image: [],
        codeSnippet: ``,
        syntaxLabel: "",
        explanation: "",
      },
    ]),

    safety_information: JSON.stringify({
      content:
        "⚠ WARNING: Do not expose to water or extreme temperatures. Handle with care. Keep away from young children.",
      images: [],
    }),

    troubleshooting_faq: JSON.stringify([
      {
        question: "Why is my device not turning on?",
        answer:
          "Check if the power cable is properly connected. Try using a different USB port. If the issue persists, contact support.",
        image: [],
      },
      {
        question: "How do I reset the device?",
        answer:
          "Press and hold the reset button for 5 seconds. The LED should blink indicating a successful reset.",
        image: [],
      },
    ]),

    abbreviations: JSON.stringify([
      {
        shortForm: "BO",
        fullForm: "Battery Operated",
      },
    ]),

    conclusion: JSON.stringify({
      content:
        "Congratulations! You have successfully set up your STEM Kit. For more advanced projects, visit our online documentation and community forum.",
      images: [],
    }),
  };

  const csv = generateCSV(row);

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "sample_user_manual_data_template.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
