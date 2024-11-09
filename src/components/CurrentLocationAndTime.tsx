import { useState } from "react"

import { MapPin } from "lucide-react"

import { Box, Button } from "@mui/material"

import { useWeather } from "../context/WeatherProvider"
import { formatDateTime } from "../utils/utils"
import { ChangeLocationModal } from "./ChangeLocationModal"

export function CurrentLocationAndTime() {
  const [isOpen, setIsOpen] = useState(false)
  const { weatherData, isLoading } = useWeather()

  if (!weatherData || isLoading) return <p>Loading...</p>
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
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
            p: 0,
          }}
        >
          <MapPin />
          <Box p={1}>
            {weatherData?.location.name} | {weatherData?.location.country}
          </Box>
        </Button>
        <Box
          sx={{
            lineHeight: "90px",
            fontSize: "120px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          {formatDateTime(weatherData?.location.localtime).time}
        </Box>
        <Box sx={{ pr: 1 }}>
          {formatDateTime(weatherData?.location.localtime).day}
        </Box>
      </Box>

      <ChangeLocationModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
