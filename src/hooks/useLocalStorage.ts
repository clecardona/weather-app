import {
  useEffect,
  useState,
} from 'react';

const useLocalStorage = (key: string, defaultValue: string) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return defaultValue
    }
  })

  // Update localStorage when state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }, [value, key])

  return [value, setValue] as const
}

export default useLocalStorage
