import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Button,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ThirdDrawer from "./ThirdDrawer";

const PrimaryAppBar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const below600 = useMediaQuery("(max-width:599px)");
  const [item, setItem] = useState(1);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (open && !below600) {
      setOpen(false);
    }
  }, [below600, open]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar onClick={toggleDrawer(true)}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Typography sx={{ width: 100, mt: 8 }} onClose={toggleDrawer(false)}>
          {[...Array(100)].map((_, i) => (
            <Typography key={i} paragraph>
              <Link onClick={() => [setOpen(false), setItem(i + 1)]} to={""}>
                {i + 1}
              </Link>
            </Typography>
          ))}
        </Typography>
      </Drawer>
      <ThirdDrawer item={item} />
    </Box>
  );
};

export default PrimaryAppBar;
