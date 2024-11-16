import { useEffect, useState } from "react"

export function useRefresh(timeout_min: number): boolean {
  const [refreshState, setRefreshState] = useState<boolean>(false)
  const REFRESH_INTERVAL = timeout_min * 60 * 1000 // 5 minutes in milliseconds

  useEffect(() => {
    const handleRefresh = () => {
      setRefreshState(true)
    }
    const timeoutId = setInterval(handleRefresh, REFRESH_INTERVAL)
    return () => {
      clearInterval(timeoutId)
    }
  }, [REFRESH_INTERVAL])

  return refreshState
}
