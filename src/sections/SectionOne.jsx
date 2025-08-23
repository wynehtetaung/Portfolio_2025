import { Box, Button, Typography } from "@mui/material";
import profileImg from "../assets/images/profile.png";
import heart from "../assets/images/fluent-emoji_white-heart.png";
import slide1 from "../assets/images/logo_slide_1.png";
import slide2 from "../assets/images/logo_slide_2.png";
import slide3 from "../assets/images/logo_slide_3.png";
import slide4 from "../assets/images/logo_slide_4.png";
import slide5 from "../assets/images/logo_slide_5.png";
import SectionSlider from "../components/SectionSlider";
import { motion } from "framer-motion";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
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
          pt: {
            xl: "138px",
            lg: "138px",
            md: "60px",
            sm: "50px",
            xs: "50px",
          },
          gap: "20px",
        }}
      >
        <Box
          sx={{
            width: { xl: "70%", lg: "70%", md: "70%", sm: "100%", xs: "100%" },
          }}
        >
          <Box
            component={motion.div}
            initial={{ y: -500 }} // start hidden
            animate={{ y: 0 }} // fade in
            // exit={{ opacity: 0 }} // fade out (when removed)
            transition={{ type: "spring", stiffness: 500 }}
          >
            <Typography
              sx={{
                width: {
                  xl: "781px",
                  lg: "730px",
                  md: "600px",
                  sm: "480px",
                  xs: "auto",
                },
                height: "auto",
                fontSize: {
                  xl: "64px",
                  lg: "60px",
                  md: "50px",
                  sm: "40px",
                  xs: "30px",
                },
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              More than just <span style={{ color: "#FF0B55" }}>pixels</span> —
              I design with creativity.
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: 400,
              width: {
                xl: "768px",
                lg: "768px",
                md: "596px",
                sm: "auto",
                xs: "auto",
              },
              height: "auto",
              fontSize: "16px",
              lineHeight: "200%",
              textWrap: "wrap",
              color: "#a8a8a8",
            }}
          >
            Hi! I’m Freddie, a UI/UX Designer with a strong passion for creating
            designs. I have over 4 years in UI/UX design industry. My strengths
            are my creativity, catching deadlines, user experiences and
            multitasking. My expertise is to create web design, mobile design
            and many more...
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xl: "30%", lg: "30%", md: "30%", sm: "100%", xs: "100%" },
            textAlign: "center",
          }}
        >
          <Box
            component={"img"}
            src={profileImg}
            sx={{
              width: {
                xl: "390px",
                lg: "320px",
                md: "245px",
                sm: "200px",
                xs: "250px",
              },
              height: {
                xl: "464px",
                lg: "394px",
                md: "319px",
                sm: "250px",
                xs: "300px",
              },
            }}
          ></Box>
        </Box>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: "50px",
            mt: "58px",
            backgroundColor: "#FF0B55",
          }}
        >
          <Typography sx={{ color: "#ffffff", fontStyle: "italic" }}>
            Fun Fact :
          </Typography>
        </Button>
        <Typography
          sx={{
            mt: "16px",
            fontStyle: "italic",
            color: "#a8a8a8",
            fontSize: { xl: 16, lg: 16, md: 16, sm: 16, xs: 15 },
            width: {
              xl: "737px",
              lg: "737px",
              md: "737px",
              sm: "auto",
              xs: "auto",
            },
            height: "auto",
            lineHeight: "200%",
            position: "relative",
            textWrap: "wrap",
          }}
        >
          Sometimes I create branding designs like a Graphic Designer. For
          example, logo design, business card design and other things. This is
          also my own work.{" "}
          <span style={{ color: "#FF0B55" }}>
            “So if you want a logo, you can ask me.”
          </span>
          <Box
            component={"img"}
            sx={{
              width: "18px",
              height: "18px",
              ml: "5px",
              pt: "2px",
            }}
            src={heart}
          />
        </Typography>
      </Box>
      <Box sx={{ mt: "50px", mb: "37px" }}>
        <SectionSlider slideData={slideData} />
      </Box>
    </Box>
  );
};
export default SectionOne;
