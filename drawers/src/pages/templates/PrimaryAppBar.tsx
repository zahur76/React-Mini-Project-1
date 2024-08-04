import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import { useEffect } from "react";
import React from "react";

type PrimaryAppBarProps = {
  children: React.ReactNode;
};

type ChildProps = {
  open: boolean;
  setOpen: (arg0: boolean) => void;
  toggleDrawer: (arg0: boolean) => void;
};

type ChildElement = React.ReactElement<ChildProps>;

const PrimaryAppBar = ({ children }: PrimaryAppBarProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const below600 = useMediaQuery("(max-width:599px)");
  // const [item, setItem] = useState(1);

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

      {React.Children.map(children, (child) => {
            return React.isValidElement(child)
              ? React.cloneElement(child as ChildElement, { open, setOpen, toggleDrawer })
              : child;
          })}
    </Box>
  );
};

export default PrimaryAppBar;
