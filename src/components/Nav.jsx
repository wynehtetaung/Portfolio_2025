import { Box, Container, Typography } from "@mui/material";
import LOGO from "../assets/images/Freddie....png";
import { useLocation, useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        textTransform: "uppercase",
        color: "#bababa",
        fontSize: 16,
        py: "35px",
        cursor: "pointer",
      }}
    >
      <img width={111} height={29} srcSet={`${LOGO}`} />
      <Box
        sx={{
          display: "flex",
          gap: 10,
          textTransform: "uppercase",
        }}
      >
        <Typography
          onClick={() => navigate("/")}
          sx={
            pathname === "/"
              ? {
                  position: "relative",
                  color: "#FF0B55",
                  ":before": {
                    content: '""',
                    position: "absolute",
                    width: 8,
                    height: 8,
                    bgcolor: "#FF0B55",
                    borderRadius: "50%",
                    bottom: "-8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  },
                }
              : {
                  ":hover": {
                    color: "#FF0B55",
                  },
                }
          }
        >
          home
        </Typography>

        <Typography
          onClick={() => navigate("/my-work")}
          sx={
            pathname === "/my-work"
              ? {
                  position: "relative",
                  color: "#FF0B55",
                  ":before": {
                    content: '""',
                    position: "absolute",
                    width: 8,
                    height: 8,
                    bgcolor: "#FF0B55",
                    borderRadius: "50%",
                    bottom: "-8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  },
                }
              : {
                  "&:hover": {
                    color: "#FF0B55",
                  },
                }
          }
        >
          my works
        </Typography>
        <Typography
          onClick={() => navigate("/about")}
          sx={
            pathname === "/about"
              ? {
                  position: "relative",
                  color: "#FF0B55",
                  ":before": {
                    content: '""',
                    position: "absolute",
                    width: 8,
                    height: 8,
                    bgcolor: "#FF0B55",
                    borderRadius: "50%",
                    bottom: "-8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  },
                }
              : {
                  "&:hover": {
                    color: "#FF0B55",
                  },
                }
          }
        >
          about
        </Typography>
      </Box>
      <Typography
        sx={{
          "&:hover": {
            color: "#FF0B55",
          },
        }}
      >
        content
      </Typography>
    </Container>
  );
};
export default Nav;
