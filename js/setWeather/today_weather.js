import { PicSet } from "./set_weather_pic.js"

export function setWeatherToday(w_array, w_array_temp) {
  let today_pic = w_array.list[0].weather[0].icon
  PicSet(today_pic, today_icon)
  today_desc.innerHTML = `, it's ${w_array.list[0].weather[0].description}.`
  today_temp.innerHTML = w_array_temp[0]
  today_temp_day.innerHTML = `${Math.min(...w_array_temp)}°/${Math.max(
    ...w_array_temp
  )}°`
  today_wind.innerHTML = Math.round(w_array.list[0].wind.speed)
  today_humidity.innerHTML = Math.round(w_array.list[0].main.temp)
}

let today_temp = document.getElementById("today_temp")
let today_icon = document.getElementById("today_icon")
let today_desc = document.getElementById("today_desc")
let today_temp_day = document.getElementById("today_temp_day")
let today_wind = document.getElementById("today_wind")
let today_humidity = document.getElementById("today_humidity")
