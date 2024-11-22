import { Box, Skeleton } from "@mui/material"

import { useWeather } from "../context/WeatherProvider"
import useMobile from "../hooks/isMobile"
import { WeatherIconAnimated } from "./weatherConditions"

export const CurrentWeather = () => {
  const { currentWeather, isLoading } = useWeather()
  const isMobile = useMobile()

  const isComponentLoading = isLoading && !currentWeather.temperature

  if (isComponentLoading) return <LoadingSkeleton />

  return (
    <Box
      id='currentWeather'
      onClick={() => window.location.reload()}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: [0, 3],
        pl: [0, 9],
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
          left: "50%",
          transform: "translateX(-50%)",
          bottom: [-70, -30],
        }}
      >
        <WeatherIconAnimated
          style={{ height: isMobile ? 170 : 120, filter: "saturate(0.3)" }}
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
