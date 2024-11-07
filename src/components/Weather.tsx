import { useEffect, useState } from "react"

import { MapPin, Menu } from "lucide-react"
import { IWeatherData } from "types/types"

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
} from "@mui/material"

import { DialogHeader, DialogTrigger, Skeleton } from "./ui/Components"
import { extractTime, getHoursToDisplay } from "./utils/utils"

const WeatherApp = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useState("London")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [time, setTime] = useState(new Date())
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isNight, setIsNight] = useState(false)
  const [newLocation, setNewLocation] = useState("")
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=2710b039f12e426c930202029240511&q=${location}&days=1&aqi=no&alerts=no`

  // Fetch weather data
  const fetchWeatherData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(BASE_URL)
      console.log("response", response)
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
    <Box sx={{ width: "100vw", height: "100vh" }}>
      {/* Main Content */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box
            component='button'
            onClick={() => setIsOpen(true)}
            sx={{
              display: "flex",
              alignItems: "center",
              // background: "blue",
            }}
          >
            <MapPin />
            <Box>
              {weatherData?.location.name}|{weatherData?.location.country}
            </Box>
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

        {/* Current Weather */}
        {isLoading || !weatherData ? (
          <Box className='text-left mb-8'>
            <Skeleton className='h-20 w-40 mx-auto' />
            <Skeleton className='h-6 w-32 mt-4 mx-auto' />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "120px",
              alignItems: "center",
            }}
          >
            <Box sx={{ height: "60px" }}>
              <img src={weatherData.current.condition.icon} />
            </Box>
            <Box sx={{ lineHeight: "100px", fontSize: "140px", px: 2 }}>
              {Math.round(weatherData.current.temp_c)}°
            </Box>
          </Box>
        )}

        {/* Hourly Forecast */}
        {/* Skeleton */}
        {isLoading || !weatherData ? (
          <Loading />
        ) : (
          <CurveFooter>
            <Box
              sx={{
                background: "white",
                color: "black",
                width: "100%",
                p: 2,
              }}
            >
              <Box
                sx={{
                  fontWeight: "bold",
                  fontSize: 30,
                  textAlign: "left",
                  pb: 5,
                }}
              >
                Weather Today
              </Box>
              <Box className='grid grid-cols-4' sx={{}}>
                {getHoursToDisplay(
                  weatherData.forecast.forecastday[0].hour
                ).map((hour, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Box sx={{ fontSize: 12, color: "grey" }}>
                      {extractTime(hour.time)}
                    </Box>
                    <Box sx={{ height: "60px" }}>
                      <img src={hour.condition.icon} />
                    </Box>
                    <Box sx={{ fontSize: 36 }}>{Math.round(hour.temp_c)}°</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </CurveFooter>
        )}
      </Box>
    </Box>
  )
}

export default WeatherApp

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
