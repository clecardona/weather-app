import { useState } from "react"

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
} from "@mui/material"

import { useWeather } from "../context/WeatherProvider"
import { DialogHeader } from "./ui/Components"

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
  )
}
