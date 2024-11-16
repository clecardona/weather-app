import {
  Box,
  Skeleton,
} from '@mui/material';

import { useWeather } from '../context/WeatherProvider';
import { WeatherIconAnimated } from './weatherConditions';

export const CurrentWeather = () => {
  const { currentWeather, isLoading } = useWeather()

  const isComponentLoading = isLoading && !currentWeather.temperature

  if (isComponentLoading) return <LoadingSkeleton />

  return (
    <Box
      id='currentWeather'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        pl: 9,
        position: "relative",
      }}
    >
      {/* Current temperature */}
      <Box
        sx={{
          lineHeight: "160px",
          fontSize: "200px",
          position: "relative",
          backgroundImage:
            "-webkit-linear-gradient(#ffffff,#ffffff,#ffffff90, #ffffff00)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        }}
      >
        {Math.round(Number(currentWeather.temperature))}°
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          left: 30,
          bottom: -30,
          width: "100%",
        }}
      >
        <WeatherIconAnimated
          style={{ height: 120, filter: "saturate(0.3)" }}
          conditionCode={currentWeather?.conditionCode}
          isDay={currentWeather.isDay ? currentWeather.isDay : true}
        />
      </Box>
    </Box>
  )
}
const LoadingSkeleton = () => (
  <Box
    id='currentWeather-skeleton'
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      p: 2,
      position: "relative",
      gap: 1,
    }}
  >
    <Skeleton
      sx={{
        width: 250,
        height: 200,
        background: "#ffffff50",
        transform: "unset",
      }}
    />
  </Box>
)
