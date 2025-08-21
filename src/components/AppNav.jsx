import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Logo from "../assets/images/Freddie....png";
import { img } from "framer-motion/client";
import { useState } from "react";
import { Close as CloseIcon } from "@mui/icons-material";

const AppNav = () => {
  const [open, setOpen] = useState(false);
  const handleDrawer = (state) => {
    setOpen(state);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "transparent" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton>
            <Box
              component={img}
              src={Logo}
              width={111}
              height={29}
              sx={{
                flexGrow: 1,
                objectFit: "contain",
              }}
            />
          </IconButton>

          <IconButton onClick={() => handleDrawer(true)}>
            <MenuIcon sx={{ color: "#ff0b55", width: 34, height: 34 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => handleDrawer(false)}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "transparent",
              zIndex: 1000,
            },
          },
          paper: {
            sx: {
              backgroundColor: "rgba(91,91,91, 0.5)",
              backdropFilter: "blur(5px) brightness(0.5)",
              zIndex: 1200,
            },
          },
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            mx: "20px",
            mt: "35px",
          }}
        >
          Hello
          <Box component={"button"} onClick={() => handleDrawer(false)}>
            close
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box component={"img"} src={Logo} width={111} height={29} />
            <IconButton sx={{ mr: "25px" }}>
              <CloseIcon sx={{ width: 34, height: 34, color: "#ff0b55" }} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
export default AppNav;
