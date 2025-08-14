import { Box, Container, Divider, Typography } from "@mui/material";
import logoImage from "../assets/images/Freddie....png";
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
          my: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={logoImage} width={111} height={29} />
        <Typography sx={{ color: "#ffffff", fontSize: 16 }}>
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
