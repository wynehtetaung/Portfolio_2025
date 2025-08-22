import { Box, Container } from "@mui/material";
import Nav from "../components/Nav";
import ContactMe from "../sections/ContactMe";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <Box
      sx={{
        bgcolor: "#000000",
        height: "100vh",
      }}
    >
      <Nav />
      <Box sx={{ bgcolor: "#000000" }}>
        <Container maxWidth="lg">
          <ContactMe />
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};
export default Contact;
