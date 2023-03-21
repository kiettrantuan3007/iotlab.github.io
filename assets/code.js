//Air Pump
const switchImg1 = document.querySelector(".form-check-input01-1");
const switchImg2 = document.querySelector(".form-check-input01-2");
const AirPumpImg = document.getElementById("AirPump-img");

let isOn01 = true;
switchImg1.addEventListener("click", function() {
  isOn01 = true;
  fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V0=1")
  .then((response) => response.json())
  .then((data) => console.log(data));
  AirPumpImg.src = "./assets/img/AirPump-ON.png";
});

switchImg2.addEventListener("click", function() {
  fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V0=0")
  .then((response) => response.json())
  .then((data) => console.log(data));
  isOn01 = false;
  AirPumpImg.src = "./assets/img/AirPump-OFF.png";
});
// AirPumpnlink
fetch( "https://blynk.cloud/external/api/get?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V1" )
.then((response) => response.json())
.then((data) => {
  if( data == 1){
    AirPumpImg.src = "./assets/img/AirPump-ON.png";
    isOn01 = !isOn01;
  }else{
    isOn01 = !isOn01;
    AirPumpImg.src = "./assets/img/AirPump-OFF.png";
  }
  
}
);

//WaveFM
const OswitchImg1 = document.querySelector(".form-check-input02-1");
const OswitchImg2 = document.querySelector(".form-check-input02-2");
const sWaveFMImg = document.getElementById("sWaveFM-img");

let isOn02 = true;
OswitchImg1.addEventListener("click", function() {
  isOn02 = true;
  fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V1=1")
  .then((response) => response.json())
  .then((data) => console.log(data));
  sWaveFMImg.src = "./assets/img/waveFM-ON.png";
});

OswitchImg2.addEventListener("click", function() {
  isOn02 = false;
  fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V1=0")
  .then((response) => response.json())
  .then((data) => console.log(data));
  sWaveFMImg.src = "./assets/img/waveFM-OFF.png";
});
// WaveBlink
fetch( "https://blynk.cloud/external/api/get?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V0" )
.then((response) => response.json())
.then((data) => {
  if( data == 1){
    sWaveFMImg.src = "./assets/img/waveFM-ON.png";
    isOn02 = !isOn02;
  }else{
    isOn02 = !isOn02;
    sWaveFMImg.src = "./assets/img/waveFM-OFF.png";
  }
}
);

//Purified Water
const PswitchImg1 = document.querySelector(".form-check-input03-1");
const PswitchImg2 = document.querySelector(".form-check-input03-2");
const sPurifiedWaterImg = document.getElementById("sPurifiedWater-img");


let isOn03 = true;
PswitchImg1.addEventListener("click", function() {
  isOn03 = true;
  fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V2=1")
  .then((response) => response.json())
  .then((data) => console.log(data));
  sPurifiedWaterImg.src = "./assets/img/purified-water-ON.png";
});

PswitchImg2.addEventListener("click", function() {
  isOn03 = false;
  fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V2=0")
  .then((response) => response.json())
  .then((data) => console.log(data));
  sPurifiedWaterImg.src = "./assets/img/purified-water-OFF.png";
});

      // Purified Water blink
      fetch( "https://blynk.cloud/external/api/get?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V3" )
      .then((response) => response.json())
      .then((data) => {
        if( data == 1){
          sPurifiedWaterImg.src = "./assets/img/purified-water-ON.png";
          isOn03 = !isOn03;
        }else{
          isOn03 = !isOn03;
          sPurifiedWaterImg.src = "./assets/img/purified-water-OFF.png";
        }
      }
      );

