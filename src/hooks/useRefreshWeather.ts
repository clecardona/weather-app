import {
  useCallback,
  useEffect,
  useState,
} from 'react';

interface WeatherRefreshHookProps {
  fetchWeatherData: () => Promise<void>
}

export const useWeatherRefresh = ({
  fetchWeatherData,
}: WeatherRefreshHookProps) => {
  const [refreshInterval, setRefreshInterval] = useState<number | null>(null)

  const enhancedFetchWeatherData = useCallback(async () => {
    try {
      await fetchWeatherData()
    } catch (error) {
      console.error("Weather fetch failed:", error)
    }
  }, [fetchWeatherData])

  const determineRefreshStrategy = useCallback(() => {
    const now = new Date()
    const hours = now.getHours()

    // No refresh from 22:00 to 00:00
    if (hours >= 22 && hours < 24) {
      setRefreshInterval(null)
      return
    }

    // Fetch at 06:00 for the 00:00-06:00 period
    if (hours >= 0 && hours < 6) {
      const sixAM = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        6,
        0,
        0
      )
      const timeUntilSixAM = sixAM.getTime() - now.getTime()

      if (timeUntilSixAM > 0) {
        setRefreshInterval(null)
        const timer = setTimeout(() => {
          enhancedFetchWeatherData()
          determineRefreshStrategy()
        }, timeUntilSixAM)

        return () => clearTimeout(timer)
      }
    }

    // Refresh every 10 minutes from 06:00 to 10:00
    if (hours >= 6 && hours < 10) {
      setRefreshInterval(10 * 60 * 1000)
      return
    }

    // Refresh every 20 minutes from 10:00 to 18:00
    if (hours >= 10 && hours < 18) {
      setRefreshInterval(20 * 60 * 1000)
      return
    }

    // Refresh every 30 minutes from 18:00 to 22:00
    if (hours >= 18 && hours < 22) {
      setRefreshInterval(0.5 * 60 * 1000)
      return
    }
  }, [enhancedFetchWeatherData])

  useEffect(() => {
    determineRefreshStrategy()

    let intervalId: NodeJS.Timeout | null = null
    if (refreshInterval) {
      intervalId = setInterval(() => {
        enhancedFetchWeatherData()
      }, refreshInterval)
    }

    const strategyCheckInterval = setInterval(determineRefreshStrategy, 60000)

    return () => {
      if (intervalId) clearInterval(intervalId)
      clearInterval(strategyCheckInterval)
    }
  }, [determineRefreshStrategy, enhancedFetchWeatherData, refreshInterval])

  return { refreshInterval }
}
