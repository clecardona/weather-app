import React, { ReactNode } from "react"

import { Box, SxProps, Theme } from "@mui/material"

interface SingleLineTruncateProps {
  children: ReactNode
  width: number | string
  sx?: SxProps<Theme>
  className?: string
}

const SingleLineTruncate: React.FC<SingleLineTruncateProps> = ({
  children,
  width,
  sx,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        width: "fit-content", // Allow shrinking to content width
        maxWidth: width, // Set maximum width
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default SingleLineTruncate

// Usage examples:
// If text is longer than 200px, it will be truncated
// If text is shorter than 200px, it will shrink to fit
// <SingleLineTruncate width={200}>Long text here</SingleLineTruncate>
// <SingleLineTruncate width={200}>Short text</SingleLineTruncate>
