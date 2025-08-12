import { Box, Container } from "@mui/material";
import SectionOne from "../sections/SectionOne";

const Home = () => {
  return (
    <Box sx={{ bgcolor: "black" }}>
      <Container maxWidth="lg">
        <SectionOne />
      </Container>
    </Box>
  );
};
export default Home;
