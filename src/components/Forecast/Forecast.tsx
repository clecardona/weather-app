import { Box } from '@mui/material';

import { useWeather } from '../../context/WeatherProvider';
import {
  ForecastItem,
  LoadingSkeletonItem,
} from './ForecastItem';

interface IForecast {
  title: string
}
const BG_COLOR = "#000000"

export function Forecast({ title }: IForecast) {
  const { isLoading, forecast } = useWeather()
  const isComponentLoading = isLoading || !forecast.hours

  return (
    <CurveFooter>
      <Box
        sx={{
          color: "white",
          width: "100vw",
          pt: 0,
        }}
      >
        <Box pr={6}>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "right",
              zIndex: 1,
              // pr: 3,
            }}
          >
            {title}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: 4,
            }}
          >
            {isComponentLoading &&
              [1, 2, 3, 4, 5, 6].map((i, idx) => (
                <LoadingSkeletonItem key={idx} />
              ))}
            {!isComponentLoading &&
              forecast.hours &&
              forecast.hours.map((hour, idx) => (
                <ForecastItem hour={hour} key={idx} />
              ))}
          </Box>
        </Box>
      </Box>
    </CurveFooter>
  )
}

const CurveFooter = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element
}) => {
  return (
    <>
      <Box
        id='forecast-weather'
        sx={{
          width: "100%",
          zIndex: 1,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          opacity: 0.55,
        }}
      >
        {/* The curve */}

        <Box
          id='forecast-curve'
          component='svg'
          viewBox='0 0 100 16'
          zIndex={200}
          sx={{ position: "relative" }}
        >
          <path d='M0,16 L0,15 C35,13 65,12 100,8 L100,16 Z' fill={BG_COLOR} />
        </Box>
        {/* The box under */}
        <Box
          sx={{
            position: "relative",
            height: 125,
            width: "100%",
            background: BG_COLOR,
            mt: -1,
          }}
        />

        {/* The content */}
      </Box>
      <Box sx={{ position: "absolute", bottom: 3, zIndex: 2 }}>{children}</Box>
    </>
  )
}
