#include <Arduino.h>

const int trigPin = 27; // Pin TRIG conectado al pin GPIO 27 del ESP32
const int echoPin = 26; // Pin ECHO conectado al pin GPIO 26 del ESP32

long duration;
int distance;

void setup() 
{
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  
  Serial.begin(115200);
}

void loop() 
{
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);

  distance = duration * 0.034 / 2;

  Serial.print("Distancia: ");
  Serial.print(distance);
  Serial.println(" cm");

  if (distance < 100) 
  {
    Serial.println("¡Alguien se está acercando!");
  }

  delay(1000); //son mls para que no me confunda
}