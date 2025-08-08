import { Box, Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "red" }}>
      <Typography>Hello world</Typography>
      <Outlet />
    </Container>
  );
};
export default Layout;
