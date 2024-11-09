import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"

import { useRefresh } from "../hooks/useRefresh"
import { IWeatherData } from "../types/types"

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
  const [location, setLocation] = useState("Solna")
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)
  const shouldRefresh = useRefresh(4000)

  const BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=${
    import.meta.env.VITE_APP_WEATHER_API_KEY
  }&q=${location}&days=1&aqi=no&alerts=no`

  const fetchWeatherData = async () => {
    setError(null)
    try {
      setIsLoading(true)
      const response = await fetch(BASE_URL)
      const data = await response.json()
      console.log("data", data)
      setWeatherData(data)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching weather data:", error)
      setError(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log("Fetching fresh weather data...")
    fetchWeatherData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, shouldRefresh])

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
