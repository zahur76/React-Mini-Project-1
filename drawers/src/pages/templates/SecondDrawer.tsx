import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const SecondDrawer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 200,
        overflowX: "auto",
        height: `calc(100vh - ${50}px)`,
        display: { xs: "none", sm: "block" },
      }}
    >
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

export default SecondDrawer;
