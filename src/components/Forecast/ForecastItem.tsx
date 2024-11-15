import {
  Box,
  Skeleton,
} from '@mui/material';

import { WeatherIconAnimated } from '../../components/weatherConditions';
import { Hour } from '../../types/types';
import { extractTime } from '../../utils/utils';

export const ForecastItem = ({ hour }: { hour: Hour }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "min-content 45px min-content",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Box sx={{ fontSize: 12, color: "white", fontWeight: "bold", mb: 1 }}>
        {extractTime(hour.time)}
      </Box>

      <WeatherIconAnimated
        conditionCode={hour.condition.code}
        style={{ height: 70, filter: "saturate(0.4)" }}
        isDay={Boolean(hour.is_day)}
      />

      <Box sx={{ fontSize: 24, fontWeight: "bold", zIndex: 1, mt: -1 }}>
        {Math.round(hour.temp_c)}°
      </Box>
    </Box>
  )
}

export const LoadingSkeletonItem = () => (
  <Box
    id='currentTimeAndLocation-skeleton'
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      p: 2,
      position: "relative",
      gap: 1,
    }}
  >
    <Skeleton
      sx={{
        width: 60,
        height: 20,
        transform: "unset",
      }}
    />
    <Skeleton
      sx={{
        width: 60,
        height: 60,
        transform: "unset",
      }}
    />
    <Skeleton
      sx={{
        width: 60,
        height: 30,
        transform: "unset",
      }}
    />
  </Box>
)
