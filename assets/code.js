//Air Pump
const switchImg1 = document.querySelector(".form-check-input01-1");
const switchImg2 = document.querySelector(".form-check-input01-2");
const AirPumpImg = document.getElementById("AirPump-img");

let isOn01 = true;
switchImg1.addEventListener("click", async function () {
  isOn01 = true;
  const response = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V0=1")
  console.log(response.status)
  if (response.status == 200) {
    alert("Turn on successfully")
  } else {
    alert("Something wrong, check network or Blynk server");
  }
  AirPumpImg.src = "./assets/img/AirPump-ON.png";
});

switchImg2.addEventListener("click", async function () {
  const response = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V0=0")
  if (response.status == 200) {
    alert("Turn off successfully")
  } else {
    alert("Something wrong, check network or Blynk server");
  }
  isOn01 = false;
  AirPumpImg.src = "./assets/img/AirPump-OFF.png";
});
// AirPumpnlink

//WaveFM
const OswitchImg1 = document.querySelector(".form-check-input02-1");
const OswitchImg2 = document.querySelector(".form-check-input02-2");
const sWaveFMImg = document.getElementById("sWaveFM-img");

let isOn02 = true;
OswitchImg1.addEventListener("click", async function () {
  isOn02 = true;
  const response = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V1=1")
  if (response.status == 200) {
    alert("Turn on successfully")
  } else {
    alert("Something wrong, check network or Blynk server");
  }
  sWaveFMImg.src = "./assets/img/waveFM-ON.png";
});

OswitchImg2.addEventListener("click", async function () {
  isOn02 = false;
  const response = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V1=0")
  if (response.status == 200) {
    alert("Turn off successfully")
  } else {
    alert("Something wrong, check network or Blynk server");
  }
  sWaveFMImg.src = "./assets/img/waveFM-OFF.png";
});
// WaveBlink

//Purified Water
const PswitchImg1 = document.querySelector(".form-check-input03-1");
const PswitchImg2 = document.querySelector(".form-check-input03-2");
const sPurifiedWaterImg = document.getElementById("sPurifiedWater-img");


let isOn03 = true;
PswitchImg1.addEventListener("click", async function () {
  isOn03 = true;
  const response = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V2=1")
  if (response.status == 200) {
    alert("Turn on successfully")
  } else {
    alert("Something wrong, check network or Blynk server");
  }
  sPurifiedWaterImg.src = "./assets/img/purified-water-ON.png";
});

PswitchImg2.addEventListener("click", async function () {
  isOn03 = false;
  const response = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V2=0")
  if (response.status == 200) {
    alert("Turn off successfully")
  } else {
    alert("Something wrong, check network or Blynk server");
  }
  sPurifiedWaterImg.src = "./assets/img/purified-water-OFF.png";
});
sPurifiedWaterImg.src = "./assets/img/purified-water-ON.png";
// Purified Water blink
setInterval(() => {

  fetch("https://blynk.cloud/external/api/get?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V2")
    .then((response) => response.json())
    .then((data) => {
      if (data == 1) {
        sPurifiedWaterImg.src = "./assets/img/purified-water-ON.png";
        isOn03 = !isOn03;
      } else {
        isOn03 = !isOn03;
        sPurifiedWaterImg.src = "./assets/img/purified-water-OFF.png";
      }
    }
    );
  fetch("https://blynk.cloud/external/api/get?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V1")
    .then((response) => response.json())
    .then((data) => {
      if (data == 1) {
        sWaveFMImg.src = "./assets/img/waveFM-ON.png";
        isOn02 = !isOn02;
      } else {
        isOn02 = !isOn02;
        sWaveFMImg.src = "./assets/img/waveFM-OFF.png";
      }
    }
    );
  fetch("https://blynk.cloud/external/api/get?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V0")
    .then((response) => response.json())
    .then((data) => {
      if (data == 1) {
        AirPumpImg.src = "./assets/img/AirPump-ON.png";
        isOn01 = !isOn01;
      } else {
        isOn01 = !isOn01;
        AirPumpImg.src = "./assets/img/AirPump-OFF.png";
      }

    }
    );

}, 50)



// turn on all, turn off all and restart all

const turnOnAll = document.querySelector("#turnOnAll")
turnOnAll.addEventListener("click", async function () {
  AirPumpImg.src = "./assets/img/AirPump-ON.png";
  sWaveFMImg.src = "./assets/img/waveFM-ON.png";
  sPurifiedWaterImg.src = "./assets/img/purified-water-ON.png";
  const data1 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V0=1")
  if (data1.status != 200) alert("Something went wrong at AirPump, check the network or Blynk server")
  const data2 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V1=1")
  if (data2.status != 200) alert("Something went wrong at Wave Forming Machine, check the network or Blynk server")
  const data3 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V2=1")
  if (data3.status != 200) alert("Something went wrong at Purified Water, check the network or Blynk server")
  alert("Turn on all done")
})

const turnOffAll = document.querySelector("#turnOffAll")
turnOffAll.addEventListener("click", async function () {
  AirPumpImg.src = "./assets/img/AirPump-OFF.png";
  sWaveFMImg.src = "./assets/img/waveFM-OFF.png";
  sPurifiedWaterImg.src = "./assets/img/purified-water-OFF.png";
  const data1 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V0=0")
  if (data1.status != 200) alert("Something went wrong at AirPump, check the network or Blynk server")
  const data2 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V1=0")
  if (data2.status != 200) alert("Something went wrong at Wave Forming Machine, check the network or Blynk server")
  const data3 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V2=0")
  if (data3.status != 200) alert("Something went wrong at Purified Water, check the network or Blynk server")
  alert("Turn off all done")
})

const restartAll = document.querySelector("#restartAll")
restartAll.addEventListener("click", async function () {
  AirPumpImg.src = "./assets/img/AirPump-OFF.png";
  sWaveFMImg.src = "./assets/img/waveFM-OFF.png";
  sPurifiedWaterImg.src = "./assets/img/purified-water-OFF.png";
  const data1 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V0=0")
  if (data1.status != 200) alert("Something went wrong at AirPump, check the network or Blynk server")
  const data2 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V1=0")
  if (data2.status != 200) alert("Something went wrong at Wave Forming Machine, check the network or Blynk server")
  const data3 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V2=0")
  if (data3.status != 200) alert("Something went wrong at Purified Water, check the network or Blynk server")

  AirPumpImg.src = "./assets/img/AirPump-ON.png";
  sWaveFMImg.src = "./assets/img/waveFM-ON.png";
  sPurifiedWaterImg.src = "./assets/img/purified-water-ON.png";
  const data4 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V0=1")
  if (data4.status != 200) alert("Something went wrong at AirPump, check the network or Blynk server")
  const data5 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V1=1")
  if (data5.status != 200) alert("Something went wrong at Wave Forming Machine, check the network or Blynk server")
  const data6 = await fetch("https://blynk.cloud/external/api/batch/update?token=Fqb4YaAJqU794tRTxXO0paLVdznjV6lN&V2=1")
  if (data6.status != 200) alert("Something went wrong at Purified Water, check the network or Blynk server")
  alert("Restart done")
})