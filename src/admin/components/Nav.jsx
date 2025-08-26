import { Box, Typography } from "@mui/material";
import { navData } from "../util/admin_store";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        width: 243,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "1px 5px  11px #a2a2a24f",
      }}
    >
      <Box>
        <Box
          component={"img"}
          src={navData.LOGO}
          sx={{
            mt: "55px",
            ml: "35px",
            mb: "37px",
            width: 166,
            height: 48,
            userSelect: "none",
          }}
        />
        {/* menu item list  */}
        <Box>
          {navData.menu.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                gap: "8px",
                height: "45px",
                mb: "14px",
                pl: "35px",
                borderRadius: "8px",
                justifyContent: "start",
                alignItems: "center",
                bgcolor: pathname === item.route ? "#9747FF" : "none",
                color: pathname === item.route ? "#ffffff" : "#929292",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate(item.route);
              }}
            >
              <Box
                component={"img"}
                src={pathname === item.route ? item.activeIcon : item.icon}
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: 16 }}>{item.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* version & date  */}
      <Box
        sx={{
          bgcolor: "#9747FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "52px",
        }}
      >
        <Typography sx={{ fontSize: 13, color: "#ffffff" }}>
          {navData.version}
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#ffffff" }}>
          {navData.date}
        </Typography>
      </Box>
    </Box>
  );
};
export default Nav;
