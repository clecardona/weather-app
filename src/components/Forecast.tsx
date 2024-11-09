import { Box } from "@mui/material"

import { useWeather } from "../context/WeatherProvider"
import { Hour } from "../types/types"
import { extractTime, getHoursToDisplay } from "../utils/utils"
import { Skeleton } from "./ui/Components"
import { WeatherIcon } from "./weatherConditions"

interface IForecast {
  title: string
}

export function Forecast({ title }: IForecast) {
  const { weatherData, isLoading } = useWeather()
  if (isLoading || !weatherData) return <Loading />
  const hoursToDisplay = getHoursToDisplay(
    weatherData.forecast.forecastday[0].hour
  )
  return (
    <CurveFooter>
      <Box
        sx={{
          mt: "-40px",
          background: "white",
          color: "black",
          width: "100%",
          px: 2,
          pb: 1,
          pt: 0,
        }}
      >
        <Box pr={16}>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "right",
              pb: 1,
            }}
          >
            {title}
          </Box>
          <Box
            sx={{
              display: "grid",
              gridAutoFlow: "column",
              justifyItems: "self-end",
            }}
          >
            {hoursToDisplay.map((hour, index) => (
              <ForecastItem hour={hour} key={index} />
            ))}
          </Box>
        </Box>
      </Box>
    </CurveFooter>
  )
}

const ForecastItem = ({ hour }: { hour: Hour }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "min-content min-content min-content",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Box sx={{ fontSize: 12, color: "grey" }}>{extractTime(hour.time)}</Box>

      {/* <img src={hour.condition.icon} /> */}
      <WeatherIcon
        condition={hour.condition.code}
        style={{ height: 50, width: 50 }}
      />

      <Box sx={{ fontSize: 24, fontWeight: "bold" }}>
        {Math.round(hour.temp_c)}°
      </Box>
    </Box>
  )
}

const CurveFooter = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element
}) => {
  return (
    <Box
      id='forecast-weather'
      sx={{
        width: "100%",
        zIndex: 100,
        position: "absolute",
        bottom: 0,
      }}
    >
      {/* The curve */}
      <Box
        component='svg'
        viewBox='0 0 100 16'
        preserveAspectRatio='none'
        sx={{ verticalAlign: "unset" }}
      >
        <path d='M0,16 L0,12 C35,13 65,12 100,8 L100,16 Z' fill='white' />
      </Box>
      {/* The content */}
      {children}
    </Box>
  )
}

const Loading = () => {
  return (
    <div className='bg-white rounded-xl p-4 mt-auto'>
      <Skeleton className='h-6 w-full mb-4' />
      <div className='grid grid-cols-4 gap-4'>
        {[0, 1, 2, 3].map((_, index) => (
          <div key={index} className='text-center'>
            <Skeleton className='h-4 w-20 mb-2' />
            <Skeleton className='h-6 w-12 mx-auto' />
            <Skeleton className='h-4 w-12 mt-2' />
          </div>
        ))}
      </div>
    </div>
  )
}
