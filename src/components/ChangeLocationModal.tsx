import { useState } from 'react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
} from '@mui/material';

import { useWeather } from '../context/WeatherProvider';

interface IChangeLocationModal {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function ChangeLocationModal({
  isOpen,
  setIsOpen,
}: IChangeLocationModal) {
  const [newLocation, setNewLocation] = useState("")
  const { setLocation } = useWeather()

  const handleLocationUpdate = () => {
    if (newLocation.trim()) {
      setLocation(newLocation)
      setNewLocation("")
    }
    setIsOpen(false)
  }
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogContent>
        <DialogTitle>Change Location</DialogTitle>

        <div className='flex gap-2'>
          <Input
            name='location'
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
  )
}
