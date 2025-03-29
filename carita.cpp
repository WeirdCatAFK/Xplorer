#include <LiquidCrystal.h>

LiquidCrystal lcd(17, 16, 5, 18, 19, 21);

byte smileyFace[8] = {
  0b00000,
  0b01010,
  0b01010,
  0b00000,
  0b10001,
  0b01110,
  0b00000,
  0b00000
};

void setup() {
  lcd.begin(16, 2);

  lcd.createChar(0, smileyFace);

  lcd.setCursor(0, 0); 
  lcd.write(byte(0));  
  lcd.setCursor(1, 0);
  //lcd.print("Hola!");
}

void loop() 
{
    
}