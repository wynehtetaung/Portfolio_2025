import { Box, Button, Typography } from "@mui/material";
import profileImg from "../assets/images/profile.png";
import heart from "../assets/images/fluent-emoji_white-heart.png";
import slide1 from "../assets/images/logo_slide_1.png";
import slide2 from "../assets/images/logo_slide_2.png";
import slide3 from "../assets/images/logo_slide_3.png";
import slide4 from "../assets/images/logo_slide_4.png";
import slide5 from "../assets/images/logo_slide_5.png";
import SectionSlider from "../components/SectionSlider";

const SectionOne = () => {
  const slideData = {
    image: [slide1, slide2, slide3, slide4, slide5],
    width: 128,
    height: 65,
    marginLeft: "150px",
    action: {
      pause: true,
      hover: false,
      play: true,
      direction: "left",
    },
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", pt: "138px" }}>
        <Box sx={{ width: "70%" }}>
          <Typography
            sx={{
              width: "781px",
              height: "192px",
              fontSize: "64px",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            More than just <span style={{ color: "#FF0B55" }}>pixels</span> — I
            design with creativity.
          </Typography>
          <Typography
            sx={{
              fontWeight: "regular",
              width: "768px",
              height: "96px",
              fontSize: "16px",
              lineHeight: "200%",
              color: "#a8a8a8",
            }}
          >
            Hi! I’m Freddie, a UI/UX Designer with a strong passion for creating
            designs. I have over 4 years in UI/UX design industry. My strengths
            are my creativity, catching deadlines, user experiences and
            multitasking. My expertise is to create web design, mobile design
            and many more...
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "50px",
              mt: "58px",
              backgroundColor: "#FF0B55",
            }}
          >
            <Typography sx={{ color: "#ffffff" }}>Fun Fact:</Typography>
          </Button>
          <Typography
            sx={{
              mt: "16px",
              fontStyle: "italic",
              color: "#a8a8a8",
              fontSize: 16,
              width: "737px",
              height: "96px",
              lineHeight: "200%",
              position: "relative",
            }}
          >
            Sometimes I create branding designs like a Graphic Designer. For
            example, logo design, business card design and other things. This is
            also my own work.{" "}
            <span style={{ color: "#FF0B55" }}>
              “So if you want a logo, you can ask me.”
            </span>
            <img
              style={{
                width: "18px",
                height: "18px",
                position: "absolute",
                bottom: 8,
                left: 120,
              }}
              src={heart}
            />
          </Typography>
        </Box>
        <Box sx={{ width: "30%" }}>
          <img
            style={{ width: "440px", height: "464px" }}
            src={profileImg}
            alt=""
          />
        </Box>
      </Box>
      <Box sx={{ mt: "50px", mb: "37px" }}>
        <SectionSlider slideData={slideData} />
      </Box>
    </Box>
  );
};
export default SectionOne;
