import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const FirstDrawer = () => {
  // const theme = useTheme();
  return (
    <Box sx={{ width: 200, overflow: "auto", height: `calc(100vh - ${50}px)`,  display: { xs: "none", sm: "block" } }}>
      <Typography>
        {[...Array(100)].map((_, i) => (
          <Typography key={i} paragraph>
            {i + 1}
          </Typography>
        ))}
      </Typography>
    </Box>
  );
};

export default FirstDrawer;
