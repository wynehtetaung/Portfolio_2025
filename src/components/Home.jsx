import { Box, Button, Container } from "@mui/material";
import SectionOne from "../sections/SectionOne";
import SectionTwo from "../sections/SectionTwo";
import pj1 from "../assets/images/pj1.png";
import pj2 from "../assets/images/pj2.png";
import pj3 from "../assets/images/pj3.png";
import pj4 from "../assets/images/pj4.png";
import upArrow from "../assets/images/arrow-up-right.png";
import SectionSlider from "./SectionSlider";

const Home = () => {
  const slideData = {
    image: [pj1, pj2, pj3, pj4],
    width: 470,
    height: 470,
    marginLeft: "20px",
    action: {
      pause: false,
      hover: true,
      play: false,
    },
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ bgcolor: "#000000" }}>
        <Container maxWidth="lg">
          <SectionOne />
        </Container>
      </Box>
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
            color="error"
            sx={{
              mt: "35px",
              mb: "70px",
              width: "200px",
              height: "66px",
              borderRadius: "50px",
            }}
          >
            More Projects <img width={24} height={24} src={upArrow} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
