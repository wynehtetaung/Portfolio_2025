import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const Layout = () => {
  return (
    <Box sx={{ bgcolor: "black" }}>
      <Nav />
      <Outlet />
    </Box>
  );
};
export default Layout;
