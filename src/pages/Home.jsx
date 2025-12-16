import { Box, Button, Container } from "@mui/material";
import SectionOne from "../sections/SectionOne";
import SectionTwo from "../sections/SectionTwo";
import upArrow from "../assets/images/arrow-up-right.png";
import SectionThree from "../sections/SectionThree";
import SectionFour from "../sections/SectionFour";
import ContactMe from "../sections/ContactMe";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useEffect } from "react";
import SectionTwoSlide from "../components/ProjectSlider";
import { useNavigate } from "react-router-dom";
import { projectData } from '../store/projectData.store';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

    const sliderData = projectData.filter(data => data.slider);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "#000000",
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* section one */}
      </Box>
      <Box sx={{ bgcolor: "#000000" }}>
        <Container maxWidth="lg">
          <SectionOne />
        </Container>
      </Box>
      {/* section two  */}
      <Box sx={{ bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <SectionTwo />
        </Container>
        <SectionTwoSlide slideData={sliderData} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            component={motion.button}
            whileInView={{y:0}}
            initial={{ y: 100 }}
            transition={{ type: "spring", stiffness: 20 }}
            onClick={() => navigate("/my-work/app")}
            variant="contained"
            sx={{
              mt: "35px",
              mb: "70px",
              width: { xl: 200, lg: 200, md: 180, sm: 180, xs: 180 },
              height: { xl: 63, lg: 63, md: 54, sm: 56, xs: 56 },
              borderRadius: "50px",
              backgroundColor: "#FF0B55",
            }}
          >
            More Projects <img width={24} height={24} src={upArrow} />
          </Button>
        </Box>
      </Box>
      {/* section three  */}
      <Box sx={{ bgcolor: "#000000" }}>
        <Container maxWidth="lg">
          <SectionThree />
        </Container>
      </Box>
      {/* section four  */}
      <Box sx={{ bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <SectionFour />
        </Container>
      </Box>
      {/* contact me  */}
      <Box id="contactMe" sx={{ bgcolor: "#000000" }}>
        <Container maxWidth="lg">
          <ContactMe />
        </Container>
      </Box>
      {/* footer  */}
      <Footer />
    </Box>
  );
};
export default Home;
