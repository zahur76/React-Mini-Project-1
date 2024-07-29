import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const ThirdDrawer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, overflowX: "auto", height: `calc(100vh - ${50}px)` }}>
      <Typography>
        {" "}
        <Typography>
          {[...Array(100)].map((_, i) => (
            <Typography key={i} paragraph>
              {i + 1}
            </Typography>
          ))}
        </Typography>
      </Typography>
    </Box>
  );
};

export default ThirdDrawer;
