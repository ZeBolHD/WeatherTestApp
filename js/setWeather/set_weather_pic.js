export function PicSet(str, element) {
  switch (str) {
    case "01d":
      element.src = "./icons/day_clear.svg"
      break

    case "01n":
      element.src = "./icons/night_clear.svg"
      break

    case "02d":
      element.src = "./icons/day_sunny_overcast.svg"
      break

    case "02n":
      element.src = "./icons/night_overcast.svg"
      break

    case "03d":
      element.src = "./icons/cloudy.svg"
      break

    case "03n":
      element.src = "./icons/cloudy.svg"
      break

    case "04d":
      element.src = "./icons/day_cloudy.svg"
      break

    case "04n":
      element.src = "./icons/night_cloudy.svg"
      break

    case "09d":
      element.src = "./icons/day_showers.svg"
      break

    case "09n":
      element.src = "./icons/night_showers.svg"
      break

    case "10d":
      element.src = "./icons/day_rain.svg"
      break

    case "10n":
      element.src = "./icons/night_rain.svg"
      break

    case "11d":
      element.src = "./icons/day_thunderstorm.svg"
      break

    case "11n":
      element.src = "./icons/night_thunderstorm.svg"
      break

    case "13d":
      element.src = "./icons/day_snow.svg"
      break

    case "13n":
      element.src = "./icons/night_snow.svg"
      break

    case "50d":
      element.src = "./icons/day_fog.svg"
      break

    case "50n":
      element.src = "./icons/night_fog.svg"
      break

    default:
      element.src = "./icons/not_found.svg"
  }
}
