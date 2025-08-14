import { Box, Button, Container } from "@mui/material";
import SectionOne from "../sections/SectionOne";
import SectionTwo from "../sections/SectionTwo";
import pj1 from "../assets/images/pj1.png";
import pj2 from "../assets/images/pj2.png";
import pj3 from "../assets/images/pj3.png";
import pj4 from "../assets/images/pj4.png";
import upArrow from "../assets/images/arrow-up-right.png";
import SectionSlider from "../components/SectionSlider";
import SectionThree from "../sections/SectionThree";
import SectionFour from "../sections/SectionFour";
import ContactMe from "../sections/ContactMe";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Home = () => {
  const slideData = {
    image: [pj1, pj2, pj3, pj4],
    width: 470,
    height: 470,
    marginLeft: "20px",
    action: {
      pause: false,
      hover: true,
      play: true,
    },
  };
  return (
    <Box sx={{ bgcolor: "#000000" }}>
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
        <SectionSlider slideData={slideData} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              mt: "35px",
              mb: "70px",
              width: "200px",
              height: "66px",
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
