import { Box } from "@mui/material"

import { CurrentLocationAndTime } from "./CurrentLocationAndTime"
import { CurrentWeather } from "./CurrentWeather"

export function CurrentContainer() {
  return (
    <Box
      id='current-container'
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        maxHeight: 250,
        height: "100%",
      }}
    >
      <CurrentWeather />
      <CurrentLocationAndTime />
    </Box>
  )
}
