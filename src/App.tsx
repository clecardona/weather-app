import './App.css';

import { useEffect } from 'react';

import { App as CapacitorApp } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import {
  StatusBar,
  Style,
} from '@capacitor/status-bar';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

import Weather from './components/Weather';
import WeatherProvider from './context/WeatherProvider';

function App() {
  useEffect(() => {
    const setupStatusBar = async () => {
      if (Capacitor.isNativePlatform()) {
        try {
          // Hide the status bar
          await StatusBar.hide()

          // Optional: Set status bar style if it becomes visible
          await StatusBar.setStyle({ style: Style.Dark })

          // Optional: Set background color
          await StatusBar.setBackgroundColor({ color: "#000000" })
        } catch (err) {
          console.error("Error setting up status bar:", err)
        }
      }
    }

    setupStatusBar()

    // Listen for app resume events to ensure fullscreen stays active
    CapacitorApp.addListener("resume", () => {
      setupStatusBar()
    })

    return () => {
      // Cleanup listeners when component unmounts
      CapacitorApp.removeAllListeners()
    }
  }, [])

  return (
    <WeatherProvider>
      <ThemeProvider theme={darkTheme}>
        <Weather />
      </ThemeProvider>
    </WeatherProvider>
  )
}

export default App

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})
