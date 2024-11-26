import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"

import useLocalStorage from "../hooks/useLocalStorage"
import { useWeatherRefresh } from "../hooks/useRefreshWeather"
import { Hour, IWeatherData } from "../types/types"
import { getRecentWeatherData } from "../utils/utils"

interface IWeatherContext {
  weatherData: IWeatherData | null
  isLoading: boolean
  error: unknown
  location: string
  setLocation: Dispatch<SetStateAction<string>>
  currentWeather: {
    temperature: number | undefined
    location: { city: string; country: string }
    conditionCode: number
    isDay: boolean
  }
  forecast: {
    hours: Hour[] | null
  }
}
// Context
const WeatherContext = createContext<IWeatherContext | undefined>(undefined)

// Provider Component
interface WeatherProviderProps {
  children: ReactNode
}

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [location, setLocation] = useLocalStorage("city", "Solna")
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)

  const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${
    import.meta.env.VITE_APP_WEATHER_API_KEY
  }&q=${location}&days=2&aqi=no&alerts=no`

  const getFullForecast = () => {
    if (!weatherData) return []
    if (
      weatherData.forecast.forecastday[0].hour &&
      weatherData.forecast.forecastday[1].hour
    ) {
      return [
        ...weatherData.forecast.forecastday[0].hour,
        ...weatherData.forecast.forecastday[1].hour,
      ]
    }
    return []
  }
  const forecast = getFullForecast()

  const fetchWeatherData = async () => {
    setError(null)
    try {
      setIsLoading(true)
      const response = await fetch(BASE_URL)
      const data = await response.json()
      if (data?.error) {
        console.error("Error fetching weather data:", data?.error)
        setLocation("solna")
      } else {
        setWeatherData(data)
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Error fetching weather data:", error)
      setError(error)
      setLocation("solna")
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWeatherData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  useWeatherRefresh({ fetchWeatherData })

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        isLoading,
        error,
        location,
        setLocation,
        currentWeather: {
          location: {
            city: weatherData?.location?.name ?? "",
            country: weatherData?.location?.country ?? "",
          },
          temperature: weatherData?.current?.temp_c ?? 0,
          conditionCode: weatherData?.current?.condition?.code ?? 1000,
          isDay: weatherData ? Boolean(weatherData?.current?.is_day) : true,
        },
        forecast: {
          hours: weatherData?.forecast?.forecastday[0]?.hour
            ? getRecentWeatherData(forecast)
            : null,
        },
      }}
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
