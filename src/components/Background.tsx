import { Box } from '@mui/material';

import clearDay from '../assets/background/clear_day.jpg';
import clearNight from '../assets/background/clear_night.jpg';
import cloudyDay from '../assets/background/cloudy_day.jpg';
import cloudyNight from '../assets/background/cloudy_night.jpg';
import mistyDay from '../assets/background/misty_day.jpg';
import mistyNight from '../assets/background/misty_night.jpg';
import rainDay from '../assets/background/rain_day.jpg';
import rainNight from '../assets/background/rain_night.jpg';
import snowDay from '../assets/background/snow_day.jpg';
import snowNight from '../assets/background/snow_night.jpg';
import { getConditionText } from '../utils/utils';

export function Background({
  isDay,
  conditionCode,
}: {
  isDay: boolean
  conditionCode: number
}) {
  function getBackground(isDay: boolean, condition: string) {
    if (condition === "rain") return isDay ? rainDay : rainNight
    if (condition === "cloudy") return isDay ? cloudyDay : cloudyNight
    if (condition === "misty") return isDay ? mistyDay : mistyNight
    if (condition === "snow") return isDay ? snowDay : snowNight
    return isDay ? clearDay : clearNight // sunny
  }

  return (
    <Box
      id='weather-background'
      sx={{
        height: "100%",
        width: "100%",
        position: "absolute",

        "& .illu": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center -30px",
          position: "absolute",
          zIndex: -1,
        },
      }}
    >
      <img
        className='illu'
        src={getBackground(isDay, getConditionText(conditionCode))}
        alt='bg-img'
      />
      {/* overlay */}
      <Box
        id='background-overlay'
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundColor: isDay ? "#00000095" : "#00000050",
        }}
      />
    </Box>
  )
}
