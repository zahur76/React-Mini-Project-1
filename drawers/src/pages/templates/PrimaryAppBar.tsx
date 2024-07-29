import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';

const PrimaryAppBar = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default PrimaryAppBar;
