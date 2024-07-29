import { Box, CssBaseline } from "@mui/material";
import PrimaryAppBar from "./templates/PrimaryAppBar";
import FirstDrawer from "./templates/FirstDrawer";
import SecondDrawer from "./templates/SecondDrawer";
import ThirdDrawer from "./templates/ThirdDrawer";

const Home = () => {
  return (
    <Box>
      <CssBaseline />
      <PrimaryAppBar />
      <Box sx={{ display: "flex" }}>
        <FirstDrawer />
        <SecondDrawer />
        <ThirdDrawer />
      </Box>
    </Box>
  );
};

export default Home;
