import { Box, Typography } from "@mui/material";
import Card from "../components/Card";
import { cardData } from '../store/availableService.store';

const SectionThree = () => {
 
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xl: 48, lg: 48, md: 48, sm: 48, xs: 40 },
          fontWeight: "bold",
          color: "#ffffff",
          mt: "50px",
        }}
      >
        Available <span style={{ color: "#FF0B55" }}>services.</span>
      </Typography>
      <Typography
        sx={{
          mt: "5px",
          fontSize: { xl: 16, lg: 16, md: 16, sm: 16, xs: 14 },
          color: "#a8a8a8",
          mb: "29px",
        }}
      >
        Web & Mobile UI/UX Design, Branding Design and many more...
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          flexWrap: {
            xl: "nowrap",
            lg: "nowrap",
            md: "wrap",
            sm: "wrap",
            xs: "wrap",
          },
        }}
      >
        {cardData.map((data, i) => (
          <Card key={i} card={data.card} />
        ))}
      </Box>
    </Box>
  );
};
export default SectionThree;
