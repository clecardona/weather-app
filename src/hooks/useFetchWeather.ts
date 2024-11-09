import { useEffect, useState } from "react"

import { IWeatherData } from "types/types"

import { useRefresh } from "./useRefresh"

// Custom hook for data fetching
export function useFetchWeather() {
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

  return {
    weatherData,
    isLoading,
    error,
  }
}
