import { af_tmw_pic, af_tmw_week_day as day } from "./weather_arrays.js"

import { PicSet } from "./set_weather_pic.js"
import { getDateOfWeek } from "./getDayOfWeek.js"

export function setWeatherAfTmw(w_array_temp) {
  PicSet(af_tmw_pic, af_tmw_icon)
  af_tmw_temp.innerHTML = `${Math.min(...w_array_temp)}°/${Math.max(
    ...w_array_temp
  )}°`
  af_tmw_day.innerHTML = getDateOfWeek(day)
}

let af_tmw_temp = document.getElementById("af_tmw_temp")
let af_tmw_icon = document.getElementById("af_tmw_icon")
let af_tmw_day = document.getElementById("af_tmw_day")
