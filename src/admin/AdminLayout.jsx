import { Box } from "@mui/material";
import { Outlet, useParams } from "react-router-dom";
import Nav from "./components/Nav";

const AdminLayout = () => {
  const { key } = useParams();

  return key === import.meta.env.VITE_KEY ? (
    <Box
      sx={{
        bgcolor: "#eceef7",
        display: "flex",
        gap: "50px",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* navigation  */}
      <Box sx={{ position: "static" }}>
        <Nav />
      </Box>
      <Outlet />
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography sx={{ fontSize: 20 }}>Page Not Found</Typography>
      <Typography sx={{ fontSize: 18, color: "red" }}>
        Check Your Key
      </Typography>
    </Box>
  );
};
export default AdminLayout;
