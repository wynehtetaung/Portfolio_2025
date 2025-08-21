import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Logo from "../assets/images/Freddie....png";
import { img } from "framer-motion/client";
import { useState } from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const AppNav = () => {
  const { pathname } = useLocation();
  const { sub, id } = useParams();
  const navigate = useNavigate();
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box component={"img"} src={Logo} width={111} height={29} />
            <IconButton sx={{ mr: "25px" }} onClick={() => handleDrawer(false)}>
              <CloseIcon sx={{ width: 34, height: 34, color: "#ff0b55" }} />
            </IconButton>
          </Box>
          <List>
            <ListItem>
              <Typography
                onClick={() => navigate("/")}
                sx={{
                  fontSize: 25,
                  color: pathname === "/" ? "#ff0b55" : "#9e9e9e",
                  ":hover": {
                    color: "#ff0b55",
                  },
                }}
              >
                HOME
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                onClick={() => navigate("/my-work/app")}
                sx={{
                  fontSize: 25,
                  color:
                    pathname === `/my-work/${sub}` ||
                    pathname === `/my-work/${sub}/${id}`
                      ? "#ff0b55"
                      : "#9e9e9e",
                  ":hover": {
                    color: "#ff0b55",
                  },
                }}
              >
                MY WORKS
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                onClick={() => navigate("/about")}
                sx={{
                  fontSize: 25,
                  color: pathname === "/about" ? "#ff0b55" : "#9e9e9e",
                  ":hover": {
                    color: "#ff0b55",
                  },
                }}
              >
                ABOUT
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  fontSize: 25,
                  color: pathname === "/contact" ? "#ff0b55" : "#9e9e9e",
                  ":hover": {
                    color: "#ff0b55",
                  },
                }}
              >
                CONTACT
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default AppNav;
