import { Box, Button, Container, Typography } from "@mui/material";
import Nav from "../components/Nav";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import project1 from "../assets/images/pj1.png";
import project2 from "../assets/images/pj2.png";
import project3 from "../assets/images/pj3.png";
import project4 from "../assets/images/pj4.png";
import ContactMe from "../sections/ContactMe";
import Footer from "../components/Footer";

const MyWork = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();

  const cardData = {
    1: [project1, project3, project4],
    2: [project3, project2],
    3: [project1, project2, project3, project4],
  };

  const filterData = cardData[id];
  console.log(filterData);

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
                onClick={() => navigate("/my-work/1")}
                variant={pathname === "/my-work/1" ? "contained" : "text"}
                sx={
                  pathname === "/my-work/1"
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
                <Typography id="designOne" sx={{ fontSize: 14 }}>
                  APP Design
                </Typography>
              </Button>
              <Button
                onClick={() => navigate("/my-work/2")}
                variant={pathname === "/my-work/2" ? "contained" : "text"}
                sx={
                  pathname === "/my-work/2"
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
                <Typography id="designTwo" sx={{ fontSize: 14 }}>
                  WEB Design
                </Typography>
              </Button>
              <Button
                onClick={() => navigate("/my-work/3")}
                variant={pathname === "/my-work/3" ? "contained" : "text"}
                sx={
                  pathname === "/my-work/3"
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
                <Typography id="designThree" sx={{ fontSize: 14 }}>
                  LOGO Design
                </Typography>
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
          }}
        >
          {filterData.map((data, i) => (
            <img key={i} src={data} width={560} height={470} />
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
