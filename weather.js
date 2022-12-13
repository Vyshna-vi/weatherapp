let temp1 = document.querySelector("#kochitemp");
let temp2 = document.querySelector("#kottayamtemp");
let temp3 = document.querySelector("#calicuttemp");
let btnkochi = document.querySelector("#kochi");
let btncalicut = document.querySelector("#calicut");
let btnkottayam = document.querySelector("#kottayam");
btnkochi.addEventListener("click", async function (e) {
  let temp = await fetchweather(9.94, 76.26, "kochi");
  temp1.innerHTML = "The Current Temperture in Kochi is " + temp + "&#8451";
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
