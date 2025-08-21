import { Box, Typography } from "@mui/material";

const SectionTwo = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xl: 48, lg: 48, md: 48, sm: 40, xs: 33 },
          color: "#000000",
          pt: { xl: "58px", lg: "58px", md: "58px", sm: "58px", xs: "45px" },
          textWrap: "wrap",
        }}
      >
        Check out my <span style={{ color: "#FF0B55" }}>projects.</span>
      </Typography>
      <Typography
        sx={{
          mt: "8px",
          color: "#505050",
          fontSize: { xl: 16, lg: 16, md: 16, sm: 16, xs: 14 },
          mb: "35px",
        }}
      >
        I turn complex ideas into simple, engaging, and delightful digital
        interfaces.
      </Typography>
    </Box>
  );
};
export default SectionTwo;
