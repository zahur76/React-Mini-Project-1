import { Drawer, Typography, Link } from "@mui/material";
type Props = {
  open: boolean;
  setOpen: (arg0: boolean) => void;
  toggleDrawer: (arg0: boolean) => void;
};

const SideMenu: React.FC<Props> = ({ open, toggleDrawer, setOpen }) => {
  return (
    <>
      <Drawer open={open} onClick={() =>toggleDrawer(false)}>
        <Typography sx={{ width: 100, mt: 8 }}>
          {[...Array(100)].map((_, i) => (
            <Typography key={i} paragraph>
              <Link onClick={() => [setOpen(false)]}>
                {i + 1}
              </Link>
            </Typography>
          ))}
        </Typography>
      </Drawer>
    </>
  );
};

export default SideMenu;
