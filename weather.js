let temp1 = document.querySelector("#kochitemp");
let temp2 = document.querySelector("#kottayamtemp");
let temp3 = document.querySelector("#calicuttemp");
let temp4 = document.querySelector("#kasaragodtemp");
let temp5 = document.querySelector("#kannurtemp");
let temp6 = document.querySelector("#wayanadtemp");
let temp7 = document.querySelector("#palakkadtemp");
let temp8 = document.querySelector("#thrissurtemp");
let temp9 = document.querySelector("#malappuramtemp");
let temp10 = document.querySelector("#kollamtemp");
let temp11 = document.querySelector("#idukkitemp");
let temp12 = document.querySelector("#pathtemp");
let temp13 = document.querySelector("#tvmtemp");
let temp14 = document.querySelector("#alappuzhatemp");
let btnkochi = document.querySelector("#kochi");
let btncalicut = document.querySelector("#calicut");
let btnkottayam = document.querySelector("#kottayam");
let btnkasaragod = document.querySelector("#kasaragod");
let btnkannur = document.querySelector("#kannur");
let btnwayanad = document.querySelector("#wayanad");
let btnmalappuram = document.querySelector("#malappuram");
let btnpalakkad = document.querySelector("#palakkad");
let btnthrissur = document.querySelector("#thrissur");
let btnidukki = document.querySelector("#idukki");
let btnalappuzha = document.querySelector("#alappuzha");
let btnkollam = document.querySelector("#kollam");
let btnpath = document.querySelector("#path");
let btntvm = document.querySelector("#tvm");
btnkochi.addEventListener("click", async function (e) {
  let temp = await fetchweather(9.94, 76.26, "kochi");
  temp1.innerHTML = "The Current Temperture in Kochi is " + temp + "&#8451";
});
btnkasaragod.addEventListener("click", async function (e) {
  let temp = await fetchweather(12.5, 12.5, "kasaragod");
  temp4.innerHTML = "The Current Temperture in Kasaragod is " + temp + "&#8451";
});
btnkannur.addEventListener("click", async function (e) {
  let temp = await fetchweather(11.45, 75.74, "kannur");
  temp5.innerHTML = "The Current Temperture in Kannur is " + temp + "&#8451";
});
btnwayanad.addEventListener("click", async function (e) {
  let temp = await fetchweather(11.61, 76.08, "wayanad");
  temp6.innerHTML = "The Current Temperture in Wayanad is " + temp + "&#8451";
});
btnpalakkad.addEventListener("click", async function (e) {
  let temp = await fetchweather(10.77, 76.65, "palakkad");
  temp7.innerHTML = "The Current Temperture in Palakkad is " + temp + "&#8451";
});
btnthrissur.addEventListener("click", async function (e) {
  let temp = await fetchweather(10.52, 76.22, "thrissur");
  temp8.innerHTML = "The Current Temperture in Thrissur is " + temp + "&#8451";
});
btnmalappuram.addEventListener("click", async function (e) {
  let temp = await fetchweather(11.04, 76.08, "kochi");
  temp9.innerHTML =
    "The Current Temperture in Malappuaram is " + temp + "&#8451";
});
btnkollam.addEventListener("click", async function (e) {
  let temp = await fetchweather(8.88, 76.58, "kollam");
  temp10.innerHTML = "The Current Temperture in Kollam is " + temp + "&#8451";
});
btnidukki.addEventListener("click", async function (e) {
  let temp = await fetchweather(9.85, 76.97, "idukki");
  temp11.innerHTML = "The Current Temperture in Idukki is " + temp + "&#8451";
});
btnpath.addEventListener("click", async function (e) {
  let temp = await fetchweather(9.27, 76.78, "path");
  temp12.innerHTML =
    "The Current Temperture in Pathanamthitta is " + temp + "&#8451";
});
btntvm.addEventListener("click", async function (e) {
  let temp = await fetchweather(8.49, 76.95, "tvm");
  temp13.innerHTML =
    "The Current Temperture in Thrivandrum is " + temp + "&#8451";
});
btnalappuzha.addEventListener("click", async function (e) {
  let temp = await fetchweather(9.49, 76.33, "alappuzha");
  temp14.innerHTML =
    "The Current Temperture in Alappuzha is " + temp + "&#8451";
});
btncalicut.addEventListener("click", async function (e) {
  let temp = await fetchweather(11.14, 75.96, "Calicut");
  temp2.innerHTML = "The Current Temperture in Calicut is " + temp + "&#8451";
});
btnkottayam.addEventListener("click", async function (e) {
  let temp = await fetchweather(9.59, 76.52, "Kottayam");
  temp3.innerHTML = "The Current Temperture in Kottayam" + temp + "&#8451";
});

function fetchweather(latitude, longitude, place) {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  )
    .then((response) => response.json())
    .then((json) => json.current_weather.temperature);
}
