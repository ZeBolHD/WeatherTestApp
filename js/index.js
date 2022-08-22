import { setWeatherToday } from "./setWeather/today_weather.js"
import { getWeatherArrays } from "./setWeather/weather_arrays.js"
import { setWeatherTmw } from "./setWeather/tmw_weather.js"
import { setWeatherAfTmw } from "./setWeather/af_tmw_weather.js"
import { setWeatherAfAfTmw } from "./setWeather/af_af_tmw_weather.js"

let form = document.getElementById("form")
form.addEventListener("keydown", () => {
  if ((form.value.length + 7) * 9 > 40) {
    form.style.maxWidth = (form.value.length * 1.5 + 5) * 10 + "px"
  } else {
    form.style.maxWidth = 40 + "px"
  }
})

form.addEventListener(
  "change",
  () =>
    form.value != 0 &&
    !form.value.match(/[0-9]/g) &&
    getWeather(form.value).catch((err) => console.log(err))
)

async function getWeather(city_name) {
  let key = "94c711ac5cd4f8c5b1da48fae97afb5a"
  let weather_fetch = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${key}&units=metric`
  )
  let weather_array = await weather_fetch.json()

  let w_arrays = getWeatherArrays(weather_array)

  let w_array_td = w_arrays[0]
  let w_array_tmw = w_arrays[1]
  let w_array_af_tmw = w_arrays[2]
  let w_array_af_af_tmw = w_arrays[3]

  setWeatherToday(weather_array, w_array_td)
  setWeatherTmw(w_array_tmw)
  setWeatherAfTmw(w_array_af_tmw)
  setWeatherAfAfTmw(w_array_af_af_tmw)
}
