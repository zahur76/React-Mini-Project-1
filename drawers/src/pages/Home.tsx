import { Box, CssBaseline } from "@mui/material";
import PrimaryAppBar from "./templates/PrimaryAppBar";
import FirstDrawer from "./templates/FirstDrawer";
import SecondDrawer from "./templates/SecondDrawer";
import ThirdDrawer from "./templates/ThirdDrawer";
import SideMenu from "../components/sideMenu";

const Home = () => {
  return (
    <Box>
      <CssBaseline />
      <PrimaryAppBar>
        <SideMenu open={false} setOpen={false} toggleDrawer={null}/>
      </PrimaryAppBar>
      <Box sx={{ display: "flex" }}>
        <FirstDrawer />
        <SecondDrawer />
        <ThirdDrawer />
      </Box>
    </Box>
  );
};

export default Home;
