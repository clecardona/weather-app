import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"

import { useFetchWeather } from "../hooks/useFetchWeather"
import { IWeatherData } from "../types/types"

// import { WeatherCondition } from './weatherTypes'; // Assuming we have the types from earlier

interface IWeatherContext {
  weatherData: IWeatherData | null
  isLoading: boolean
  error: unknown
  location: string
  setLocation: Dispatch<SetStateAction<string>>
}
// Context
const WeatherContext = createContext<IWeatherContext | undefined>(undefined)

// Provider Component
interface WeatherProviderProps {
  children: ReactNode
}

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [location, setLocation] = useState("London")
  const { weatherData, isLoading, error } = useFetchWeather()

  return (
    <WeatherContext.Provider
      value={{ weatherData, isLoading, error, location, setLocation }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

// Custom hook for using the weather context
// eslint-disable-next-line react-refresh/only-export-components
export function useWeather(): IWeatherContext {
  const context = useContext(WeatherContext)
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider")
  }
  return context
}

export default WeatherProvider
