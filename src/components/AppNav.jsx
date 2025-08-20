import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Logo from "../assets/images/Freddie....png";
import { img } from "framer-motion/client";

const AppNav = () => {
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

          <IconButton>
            <MenuIcon sx={{ color: "#ff0b55", width: 34, height: 34 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default AppNav;
