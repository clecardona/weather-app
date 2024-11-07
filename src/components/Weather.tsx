import { useEffect, useState } from "react"

import { MapPin, Menu } from "lucide-react"
import { Hour, IWeatherData } from "types/types"

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
} from "@mui/material"

import dayBg from "../assets/day.jpg"
import { DialogHeader, DialogTrigger, Skeleton } from "./ui/Components"
import { extractTime, getHoursToDisplay } from "./utils/utils"

const WeatherApp = () => {
  const [location, setLocation] = useState("London")
  const [isOpen, setIsOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [time, setTime] = useState(new Date())
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isNight, setIsNight] = useState(false)
  const [newLocation, setNewLocation] = useState("")
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=${
    import.meta.env.VITE_APP_WEATHER_API_KEY
  }&q=${location}&days=1&aqi=no&alerts=no`

  // TODO: change background based on weather and day/night
  // TODO: get better logos ?

  // Fetch weather data
  const fetchWeatherData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(BASE_URL)
      const data = await response.json()
      console.log("data", data)
      setWeatherData(data)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching weather data:", error)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    // Update time and check if it's night (between 6 PM and 6 AM)
    const interval = setInterval(() => {
      const newTime = new Date()
      setTime(newTime)
      setIsNight(newTime.getHours() >= 18 || newTime.getHours() < 6)
    }, 1)

    fetchWeatherData()

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const handleLocationUpdate = () => {
    if (newLocation.trim()) {
      setLocation(newLocation)
      setNewLocation("")
    }
    setIsOpen(false)
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "relative",

          "& .illu": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center -60px",
            opacity: 0.5,
            position: "absolute",
            zIndex: -1,
          },
        }}
      >
        <img className='illu' src={dayBg} alt='bg-img' />

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            maxHeight: 250,
            // border: "1px solid red",
            height: "100%",
          }}
        >
          {/* Current Weather */}
          {isLoading || !weatherData ? (
            <Box className='text-left mb-8'>
              <Skeleton className='h-20 w-40 mx-auto' />
              <Skeleton className='h-6 w-32 mt-4 mx-auto' />
            </Box>
          ) : (
            <CurrentWeather weatherData={weatherData} />
          )}
          <Box
            sx={{
              // border: "1px solid white",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              p: 2,
            }}
          >
            <Button
              variant='outlined'
              onClick={() => setIsOpen(true)}
              sx={{
                color: "white",
                borderColor: "transparent",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MapPin />
              <Box p={1}>
                {weatherData?.location.name} | {weatherData?.location.country}
              </Box>
            </Button>
          </Box>

          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <DialogTrigger>
              <Menu className='w-6 h-6 text-white' />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Change Location</DialogTitle>
              </DialogHeader>
              <div className='flex gap-2'>
                <Input
                  value={newLocation}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewLocation(e.target.value)
                  }
                  placeholder='Enter location...'
                />
                <Button onClick={handleLocationUpdate}>Update</Button>
              </div>
            </DialogContent>
          </Dialog>
        </Box>

        {/* Hourly Forecast */}
        {/* Skeleton */}
        {isLoading || !weatherData ? (
          <Loading />
        ) : (
          <CurveFooter>
            <Box
              sx={{
                mt: "-20px",
                background: "white",
                color: "black",
                width: "100%",
                px: 2,
                pb: 1,
                pt: 0,
              }}
            >
              <Box pr={12}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 30,
                    textAlign: "right",
                    pb: 1,
                  }}
                >
                  Weather Today
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridAutoFlow: "column",
                    justifyItems: "self-end",
                  }}
                >
                  {getHoursToDisplay(
                    weatherData.forecast.forecastday[0].hour
                  ).map((hour, index) => (
                    <HourlyItem hour={hour} key={index} />
                  ))}
                </Box>
              </Box>
            </Box>
          </CurveFooter>
        )}
      </Box>
    </Box>
  )
}

export default WeatherApp

const HourlyItem = ({ hour }: { hour: Hour }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "min-content min-content min-content",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Box sx={{ fontSize: 12, color: "grey", mb: "-10px" }}>
        {extractTime(hour.time)}
      </Box>

      <img src={hour.condition.icon} />

      <Box sx={{ fontSize: 24, fontWeight: "bold", mt: "-10px" }}>
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
const CurrentWeather = ({ weatherData }: { weatherData: IWeatherData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // border: "1px solid blue",
        py: 3,
      }}
    >
      <Box
        sx={{
          lineHeight: "100px",
          fontSize: "140px",
          px: 2,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {Math.round(weatherData.current.temp_c)}°
      </Box>
      <Box component='p'>
        {weatherData.current.condition.text.toLowerCase()}
      </Box>
    </Box>
  )
}
