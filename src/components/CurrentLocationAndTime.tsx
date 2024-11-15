import { useState } from 'react';

import { MapPin } from 'lucide-react';

import {
  Box,
  Button,
  Skeleton,
} from '@mui/material';

import { useWeather } from '../context/WeatherProvider';
import { useTime } from '../hooks/useTime';
import { ChangeLocationModal } from './ChangeLocationModal';

export function CurrentLocationAndTime() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentWeather, isLoading } = useWeather()
  const { time, date } = useTime()

  if (isLoading) return <LoadingSkeleton />
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          height: "100%",
          p: 2,
          position: "relative",
        }}
      >
        <Button
          variant='outlined'
          onClick={() => setIsOpen(true)}
          sx={{
            color: "white",
            borderColor: "transparent",
            display: "flex",
            gap: 0.3,
            alignItems: "center",
            p: 1,
          }}
        >
          <MapPin />
          <Box fontWeight='bold' component='span'>
            {currentWeather.location.city}
          </Box>
          <Box component='span'>|</Box>
          <Box component='span'>{currentWeather.location.country}</Box>
        </Button>
        <Box
          sx={{
            lineHeight: "90px",
            fontSize: "120px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            color: "white",
          }}
        >
          {time}
        </Box>
        <Box sx={{ pr: 1, color: "white" }}>{date}</Box>
      </Box>

      <ChangeLocationModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
const LoadingSkeleton = () => (
  <Box
    id='currentTimeAndLocation-skeleton'
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
        height: 40,
        background: "#ffffff50",
        transform: "unset",
      }}
    />
    <Skeleton
      sx={{
        width: 250,
        height: 100,
        background: "#ffffff50",
        transform: "unset",
      }}
    />
    <Skeleton
      sx={{
        width: 250,
        height: 20,
        background: "#ffffff50",
        transform: "unset",
      }}
    />
  </Box>
)
