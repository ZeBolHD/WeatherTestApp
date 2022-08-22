export let tmw_pic
export let af_tmw_pic
export let af_af_tmw_pic

export let tmw_week_day
export let af_tmw_week_day
export let af_af_tmw_week_day

export function getWeatherArrays(weather_array) {
  let date_current = new Date()
  let day_current = date_current.getUTCDate()

  date_current.setDate(date_current.getDate() + 1)
  let day_tomorrow = date_current.getUTCDate()
  tmw_week_day = date_current.getDay()

  date_current.setDate(date_current.getDate() + 1)
  let day_after_tomorrow = date_current.getUTCDate()
  af_tmw_week_day = date_current.getDay()

  date_current.setDate(date_current.getDate() + 1)
  let day_after_after_tomorrow = date_current.getUTCDate()
  af_af_tmw_week_day = date_current.getDay()

  let w_array_td = []
  let w_array_tmw = []
  let w_array_af_tmw = []
  let w_array_af_af_tmw = []

  for (let item of weather_array.list) {
    let date = new Date(item.dt * 1000)
    let day = date.getUTCDate()

    if (day_current == day) {
      w_array_td.push(Math.floor(item.main.temp))
    }

    if (day_tomorrow == day) {
      w_array_tmw.push(Math.floor(item.main.temp))
    }

    if (day_tomorrow == day && date.getHours() == 12) {
      tmw_pic = item.weather[0].icon
    }

    if (day_after_tomorrow == day) {
      w_array_af_tmw.push(Math.floor(item.main.temp))
    }

    if (day_after_tomorrow == day && date.getHours() == 12) {
      af_tmw_pic = item.weather[0].icon
    }

    if (day_after_after_tomorrow == day) {
      w_array_af_af_tmw.push(Math.floor(item.main.temp))
    }

    if (day_after_tomorrow == day && date.getHours() == 12) {
      af_af_tmw_pic = item.weather[0].icon
    }
  }

  return [w_array_td, w_array_tmw, w_array_af_tmw, w_array_af_af_tmw]
}
