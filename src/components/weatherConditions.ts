interface WeatherCondition {
  text: string
  simple: string
}

interface WeatherConditions {
  [code: number]: WeatherCondition
}
// type SimpleWeatherCondition = 'sunny' | 'cloudy' | 'rain' | 'snow' | 'fog';

export const weatherConditions: WeatherConditions = {
  1000: {
    text: "Sunny",
    simple: "sunny",
  },
  1003: {
    text: "Partly cloudy",
    simple: "cloudy",
  },
  1006: {
    text: "Cloudy",
    simple: "cloudy",
  },
  1009: {
    text: "Overcast",
    simple: "cloudy",
  },
  1030: {
    text: "Mist",
    simple: "rain",
  },
  1063: {
    text: "Patchy rain possible",
    simple: "rain",
  },
  1066: {
    text: "Patchy snow possible",
    simple: "snow",
  },
  1069: {
    text: "Patchy sleet possible",
    simple: "snow",
  },
  1072: {
    text: "Patchy freezing drizzle possible",
    simple: "rain",
  },
  1087: {
    text: "Thundery outbreaks possible",
    simple: "rain",
  },
  1114: {
    text: "Blowing snow",
    simple: "snow",
  },
  1117: {
    text: "Blizzard",
    simple: "snow",
  },
  1135: {
    text: "Fog",
    simple: "fog",
  },
  1147: {
    text: "Freezing fog",
    simple: "fog",
  },
  1150: {
    text: "Patchy light drizzle",
    simple: "rain",
  },
  1153: {
    text: "Light drizzle",
    simple: "rain",
  },
  1168: {
    text: "Freezing drizzle",
    simple: "rain",
  },
  1171: {
    text: "Heavy freezing drizzle",
    simple: "rain",
  },
  1180: {
    text: "Patchy light rain",
    simple: "rain",
  },
  1183: {
    text: "Light rain",
    simple: "rain",
  },
  1186: {
    text: "Moderate rain at times",
    simple: "rain",
  },
  1189: {
    text: "Moderate rain",
    simple: "rain",
  },
  1192: {
    text: "Heavy rain at times",
    simple: "rain",
  },
  1195: {
    text: "Heavy rain",
    simple: "rain",
  },
  1198: {
    text: "Light freezing rain",
    simple: "rain",
  },
  1201: {
    text: "Moderate or heavy freezing rain",
    simple: "rain",
  },
  1204: {
    text: "Light sleet",
    simple: "snow",
  },
  1207: {
    text: "Moderate or heavy sleet",
    simple: "snow",
  },
  1210: {
    text: "Patchy light snow",
    simple: "snow",
  },
  1213: {
    text: "Light snow",
    simple: "snow",
  },
  1216: {
    text: "Patchy moderate snow",
    simple: "snow",
  },
  1219: {
    text: "Moderate snow",
    simple: "snow",
  },
  1222: {
    text: "Patchy heavy snow",
    simple: "snow",
  },
  1225: {
    text: "Heavy snow",
    simple: "snow",
  },
  1237: {
    text: "Ice pellets",
    simple: "snow",
  },
  1240: {
    text: "Light rain shower",
    simple: "rain",
  },
  1243: {
    text: "Moderate or heavy rain shower",
    simple: "rain",
  },
  1246: {
    text: "Torrential rain shower",
    simple: "rain",
  },
  1249: {
    text: "Light sleet showers",
    simple: "snow",
  },
  1252: {
    text: "Moderate or heavy sleet showers",
    simple: "snow",
  },
  1255: {
    text: "Light snow showers",
    simple: "snow",
  },
  1258: {
    text: "Moderate or heavy snow showers",
    simple: "snow",
  },
  1261: {
    text: "Light showers of ice pellets",
    simple: "snow",
  },
  1264: {
    text: "Moderate or heavy showers of ice pellets",
    simple: "snow",
  },
  1273: {
    text: "Patchy light rain with thunder",
    simple: "rain",
  },
  1276: {
    text: "Moderate or heavy rain with thunder",
    simple: "rain",
  },
  1279: {
    text: "Patchy light snow with thunder",
    simple: "snow",
  },
  1282: {
    text: "Moderate or heavy snow with thunder",
    simple: "snow",
  },
}
