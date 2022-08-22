import { tmw_pic, tmw_week_day as day } from "./weather_arrays.js"

import { PicSet } from "./set_weather_pic.js"
import { getDateOfWeek } from "./getDayOfWeek.js"

export function setWeatherTmw(w_array_temp) {
  PicSet(tmw_pic, tmw_icon)
  tmw_temp.innerHTML = `${Math.min(...w_array_temp)}°/${Math.max(
    ...w_array_temp
  )}°`
  tmw_day.innerHTML = getDateOfWeek(day)
}

let tmw_temp = document.getElementById("tmw_temp")
let tmw_icon = document.getElementById("tmw_icon")
let tmw_day = document.getElementById("tmw_day")
