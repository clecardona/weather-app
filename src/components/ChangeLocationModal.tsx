import React, {
  FormEvent,
  useState,
} from 'react';

import { X } from 'lucide-react';

import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Input,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import { useWeather } from '../context/WeatherProvider';

interface IChangeLocationModal {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export function FullScreenDialog({ isOpen, setIsOpen }: IChangeLocationModal) {
  const [newLocation, setNewLocation] = useState("")
  const [error, setError] = useState(false)
  const { setLocation } = useWeather()
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleLocationUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(false)
    const validLocation = await isValidInput()
    if (newLocation.trim() && validLocation) {
      setLocation(newLocation)
      setNewLocation("")
      setIsOpen(false)
    } else setError(true)
  }
  const isValidInput = async () => {
    const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${
      import.meta.env.VITE_APP_WEATHER_API_KEY
    }&q=${newLocation}&days=1&aqi=no&alerts=no`

    const response = await fetch(BASE_URL)
    const data = await response.json()
    if (data?.error) {
      return false
    } else {
      return true
    }
  }

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={() => setIsOpen(false)}
      TransitionComponent={Transition}
    >
      <form onSubmit={handleLocationUpdate}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <X />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Change Location
            </Typography>
            <Button autoFocus color='inherit' type='submit'>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <Box sx={{ display: "flex" }}>
            <Input
              error={error}
              name='location'
              value={newLocation}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewLocation(e.target.value)
                setError(false)
              }}
              placeholder='Enter location...'
            />
            {error && (
              <Typography sx={{ ml: 2, color: "red" }}>
                Invalid Location
              </Typography>
            )}
          </Box>
        </DialogContent>
      </form>
    </Dialog>
  )
}
