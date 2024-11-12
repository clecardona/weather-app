import "./App.css"

import Weather from "./components/Weather"
import { WeatherProvider } from "./context/WeatherProvider"

function App() {
  return (
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  )
}

export default App
