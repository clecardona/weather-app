import {
  useEffect,
  useState,
} from 'react';

// TODO: check refresh useEffect
export const useTime = () => {
  const [timeState, setTimeState] = useState({
    time: "",
    date: "",
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setTimeState({
        time: now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        date: now.toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "short",
        }),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return timeState
}
