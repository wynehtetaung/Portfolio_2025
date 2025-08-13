import { Box, Typography } from "@mui/material";

const SectionTwo = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: 48,
          color: "#000000",
          pt: "58px",
        }}
      >
        Check out my <span style={{ color: "#FF0B55" }}>projects.</span>
      </Typography>
      <Typography
        sx={{
          mt: "8px",
          color: "#505050",
          fontSize: 16,
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
