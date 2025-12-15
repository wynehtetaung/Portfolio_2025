import { Box, Container, Divider, Typography } from "@mui/material";
import logoImage from "../assets/images/Logo/Logo-white.svg";
import facebookImage from "../assets/images/facebook.png";
import instagramImage from "../assets/images/instagram.png";
import linkedinImage from "../assets/images/linkedin.png";

const Footer = () => {
  return (
    <Box>
      <Divider sx={{ border: "1px solid #a8a8a8a8" }} />
      <Container
        maxWidth="lg"
        sx={{
          py: { xl: "50px", lg: "50px", md: "50px", sm: "50px", xs: "30px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: {
            xl: "auto",
            lg: "auto",
            md: "auto",
            sm: "auto",
            xs: "260px",
          },
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "row",
            xs: "column",
          },
        }}
      >
        <img src={logoImage} width={111} height={29} />
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: { xl: 16, lg: 16, md: 16, sm: 16, xs: 14 },
            textAlign: "center",
          }}
        >
          Copyright © 2020. Freddie. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", gap: "32px", cursor: "pointer" }}>
          <img src={linkedinImage} width={28} height={28} />
          <img src={facebookImage} width={28} height={28} />
          <img src={instagramImage} width={28} height={28} />
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
