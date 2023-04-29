#include <FirebaseESP8266.h>
#include  <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
#include <ESP8266TrueRandom.h>

#define FIREBASE_HOST "https://iotprofinal-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "zQPwDbe425FP3NRKICXuYmaHP07wIZcLPm4TJgqZ"

#define WIFI_SSID "Abcd" 
#define WIFI_PASSWORD "123456789" 



#define BLYNK_TEMPLATE_ID "TMPLWJiZIW75"
#define BLYNK_DEVICE_NAME "Project Iot"
#define BLYNK_AUTH_TOKEN "Fqb4YaAJqU794tRTxXO0paLVdznjV6lN"


#define BLYNK_PRINT Serial

int error = 0;
int relay1 = D1;  
int relay2 = D2;  
int relay3 = D3;

float PH_Value = 0;
float Quality_Value = 0;
float Oxygen_Value = 0;

BlynkTimer timer;
FirebaseData fbdo;

void setup() {

  Serial.begin(9600);
  delay(1000);
  WiFi.begin (WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Dang ket noi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  
  Serial.println ("");
  Serial.println ("Da ket noi WiFi!");
  Serial.println(WiFi.localIP());
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Blynk.begin(BLYNK_AUTH_TOKEN, WIFI_SSID, WIFI_PASSWORD);


  pinMode( relay1, OUTPUT);
  pinMode( relay2, OUTPUT);
  pinMode( relay3, OUTPUT);

  digitalWrite(relay3, HIGH);
  digitalWrite(relay2, HIGH);
  digitalWrite(relay1, HIGH);
  timer.setInterval(10000L, sendSensor);


}

BLYNK_WRITE(V0)
{
  if (param.asInt() == 1)
  {
    digitalWrite(relay1, LOW);
  }
  else digitalWrite(relay1, HIGH);
}

BLYNK_WRITE(V1)
{
  if (param.asInt() == 1)
  {
    digitalWrite(relay2, LOW);
  }
  else digitalWrite(relay2, HIGH);
}

BLYNK_WRITE(V2)
{
  if (param.asInt() == 1)
  {
    digitalWrite(relay3, LOW);
  }
  else digitalWrite(relay3, HIGH);
}



void loop() {
  Blynk.run();
  timer.run();
}



void sendSensor()
{
   PH_Value = ESP8266TrueRandom.random(0,14);
   Quality_Value = ESP8266TrueRandom.random(100,255);
   Oxygen_Value = ESP8266TrueRandom.random(8,20);
  
  Firebase.setInt(fbdo,"Data/Oxygen",Oxygen_Value);
  Firebase.setInt(fbdo,"Data/PH_value",PH_Value);
  Firebase.setInt(fbdo,"Data/Quality",Quality_Value);
}
