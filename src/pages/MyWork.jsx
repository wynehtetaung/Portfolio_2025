import { Box, Button, Container, Typography } from "@mui/material";
import Nav from "../components/Nav";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ContactMe from "../sections/ContactMe";
import Footer from "../components/Footer";
import { projectData } from "../store/store";
import { useEffect } from "react";
import HoverCard from "../components/HoverCard";

const MyWork = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { sub } = useParams();

  const filterData = projectData[sub];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectLocation = (id) => {
    navigate(`/my-work/${sub}/${id}`);
  };

  return (
    <Box>
      <Nav />
      <Container maxWidth="lg" sx={{ mt: "83px" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "60%" }}>
            <Typography
              sx={{
                color: "#000000",
                fontSize: 48,
                fontWeight: "bold",
                width: "568px",
                height: "72px",
              }}
            >
              Check out my <span style={{ color: "#ff0b55" }}>projects.</span>
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                mt: "5px",
                color: "#505050",
                width: "600px",
                height: "32px",
              }}
            >
              I turn complex ideas into simple, engaging, and delightful digital
              interfaces.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "390px",
                height: "58px",
                border: "1px solid #cfcfcf",
                borderRadius: "50px",
                cursor: "pointer",
              }}
            >
              <Button
                onClick={() => navigate("/my-work/app")}
                variant={pathname === "/my-work/app" ? "contained" : "text"}
                sx={
                  pathname === "/my-work/app"
                    ? {
                        borderRadius: "50px",
                        width: "170px",
                        height: "58px",
                        bgcolor: "#ff0b55",
                      }
                    : {
                        width: "170px",
                        height: "58px",
                        color: "#bababa",
                      }
                }
              >
                <Typography sx={{ fontSize: 14 }}>APP Design</Typography>
              </Button>
              <Button
                onClick={() => navigate("/my-work/web")}
                variant={pathname === "/my-work/web" ? "contained" : "text"}
                sx={
                  pathname === "/my-work/web"
                    ? {
                        borderRadius: "50px",
                        width: "170px",
                        height: "58px",
                        bgcolor: "#ff0b55",
                      }
                    : {
                        width: "170px",
                        height: "58px",
                        color: "#bababa",
                      }
                }
              >
                <Typography sx={{ fontSize: 14 }}>WEB Design</Typography>
              </Button>
              <Button
                onClick={() => navigate("/my-work/design")}
                variant={pathname === "/my-work/design" ? "contained" : "text"}
                sx={
                  pathname === "/my-work/design"
                    ? {
                        borderRadius: "50px",
                        width: "170px",
                        height: "58px",
                        bgcolor: "#ff0b55",
                      }
                    : {
                        width: "170px",
                        height: "58px",
                        color: "#bababa",
                      }
                }
              >
                <Typography sx={{ fontSize: 14 }}>LOGO Design</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            mt: "51px",
            mb: "70px",
            cursor: "pointer",
          }}
        >
          {filterData.map((data, i) => (
            <HoverCard
              key={i}
              image={data.image}
              title={data.title}
              action={() => projectLocation(data.id)}
            />
          ))}
        </Box>
      </Container>
      <Box sx={{ bgcolor: "#000000" }}>
        <Container maxWidth="lg" sx={{ pt: "50px" }}>
          <ContactMe />
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};
export default MyWork;
