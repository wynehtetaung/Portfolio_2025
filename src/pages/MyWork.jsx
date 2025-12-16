import { Box, Container, Typography } from "@mui/material";
import Nav from "../components/Nav";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ContactMe from "../sections/ContactMe";
import Footer from "../components/Footer";
import { projectData, projectNavData } from "../store/projectData.store";
import { useEffect } from "react";
import HoverCard from "../components/HoverCard";
import { motion } from "framer-motion";

const MyWork = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { sub } = useParams();

  const filterData = projectData.filter((data) => data.type === sub);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectLocation = (id) => {
    navigate(`/my-work/${sub}/${id}`);
  };

  return (
    <Box
      sx={{
        overflow: {
          xl: "visible",
          lg: "visible",
          md: "visible",
          sm: "hidden",
          xs: "hidden",
        },
      }}
    >
      <Nav />
      <Container maxWidth="lg" sx={{ mt: "83px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
            },
            gap: {
              xl: "20px",
              lg: "20px",
              md: "20px",
              sm: "20px",
              xs: "30px",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xl: "60%",
                lg: "60%",
                md: "60%",
                sm: "60%",
                xs: "100%",
              },
            }}
          >
            <Typography
              component={motion.div}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 20 }}
              sx={{
                color: "#000000",
                fontSize: { xl: 48, lg: 46, md: 46, sm: 30, xs: 29 },
                fontWeight: "bold",
                width: { xl: 568, lg: 568, md: 568, sm: 568, xs: 475 },
                height: "auto",
              }}
            >
              Check out my <span style={{ color: "#ff0b55" }}>projects.</span>
            </Typography>
            <Typography
              component={motion.div}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 20 }}
              sx={{
                fontSize: { xl: 16, lg: 16, md: 16, sm: 14, xs: 12 },
                mt: "5px",
                color: "#505050",
                textWrap: "wrap",
                width: {
                  xl: "auto",
                  lg: "auto",
                  md: "auto",
                  sm: 400,
                  xs: 383,
                },
                height: "auto",
              }}
            >
              I turn complex ideas into simple, engaging, and delightful digital
              interfaces.
            </Typography>
          </Box>
          <Box
            sx={{
              width: {
                xl: "40%",
                lg: "40%",
                md: "40%",
                sm: "40%",
                xs: "100%",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xl: "end",
                lg: "end",
                md: "end",
                sm: "end",
                xs: "center",
              },
            }}
          >
            <Box
              component={motion.div}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ type: "spring", stiffness: 20 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: { xl: 390, lg: 390, md: 390, sm: 320, xs: "90%" },
                height: "58px",
                border: "1px solid #cfcfcf",
                borderRadius: "50px",
                cursor: "pointer",
              }}
            >
              {projectNavData.map((data, i) => (
                <Box
                  key={i}
                  onClick={() => navigate(data.path)}
                  variant={pathname === data.path ? "contained" : "text"}
                  sx={
                    pathname === data.path
                      ? {
                          borderRadius: "50px",
                          width: {
                            xl: 170,
                            lg: 170,
                            md: 170,
                            sm: 170,
                            xs: 160,
                          },
                          height: "100%",
                          bgcolor: "#ff0b55",
                          display: "flex",
                          color: "#ffffff",
                          justifyContent: "center",
                          alignItems: "center",
                        }
                      : {
                          width: "170px",
                          height: "100%",
                          color: "#bababa",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }
                  }
                >
                  <Typography
                    sx={{
                      fontSize: { xl: 14, lg: 14, md: 14, sm: 14, xs: 12 },
                    }}
                  >
                    {data.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
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
