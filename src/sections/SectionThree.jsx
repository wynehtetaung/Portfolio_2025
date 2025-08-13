import { Box, Typography } from "@mui/material";
import Card from "../components/Card";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";

const SectionThree = () => {
  const cardData = [
    {
      card: {
        No: 1,
        title: "UI/UX DESIGN",
        content:
          "I design user-focused digital interfaces that are both visually appealing and highly functional — perfect for apps, websites, and product improvements.",
        image: card1,
      },
    },
    {
      card: {
        No: 2,
        title: "BRANDING",
        content:
          "Build a strong visual identity that leaves a lasting impression. My logo and branding services are crafted to help businesses stand out with a unique, memorable — and consistent brand image.",
        image: card2,
      },
    },
    {
      card: {
        No: 3,
        title: "Illustration",
        content:
          "I create custom, high-quality illustrations to bring your ideas to life—perfect for branding, stories, or campaigns that need eye-catching visuals.",
        image: card3,
      },
    },
  ];
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "#ffffff",
          mt: "50px",
        }}
      >
        Available <span style={{ color: "#FF0B55" }}>services.</span>
      </Typography>
      <Typography
        sx={{ mt: "5px", fontSize: 16, color: "#a8a8a8", mb: "29px" }}
      >
        Web & Mobile UI/UX Design, Branding Design and many more...
      </Typography>
      <Card cardData={cardData} />
    </Box>
  );
};
export default SectionThree;
