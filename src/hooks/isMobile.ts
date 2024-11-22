import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"

/**
 * Custom hook to detect if the current device is mobile
 * @param customBreakpoint - Optional custom breakpoint in pixels (defaults to theme's breakpoint)
 * @returns boolean indicating if the current device is mobile
 */
const useMobile = (customBreakpoint?: number): boolean => {
  const theme = useTheme()

  // Use custom breakpoint if provided, otherwise use theme's default mobile breakpoint
  const query = customBreakpoint
    ? `(max-width: ${customBreakpoint}px)`
    : theme.breakpoints.down("sm")

  // useMediaQuery returns true if the screen size matches the query
  const isMobile = useMediaQuery(query)

  return isMobile
}

export default useMobile
