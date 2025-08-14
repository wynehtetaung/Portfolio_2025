import { Box, Button, Container, Typography } from "@mui/material";
import Nav from "../components/Nav";

const MyWork = () => {
  const activeButton = false;
  return (
    <Box>
      <Nav />
      <Container maxWidth="lg" sx={{ display: "flex", mt: "83px" }}>
        <Box sx={{ width: "60%" }}>
          <Typography
            sx={{
              color: "#000000",
              fontSize: 48,
              fontWeight: "bold",
              width: "568px",
              height: "72px",
            }}
          >
            Check out my <span style={{ color: "#ff0b55" }}>projects.</span>
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              mt: "5px",
              color: "#505050",
              width: "600px",
              height: "32px",
            }}
          >
            I turn complex ideas into simple, engaging, and delightful digital
            interfaces.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              //   gap: "5px",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "390px",
              height: "58px",
              border: "1px solid #cfcfcf",
              borderRadius: "50px",
              cursor: "pointer",
            }}
          >
            <Button
              variant={!activeButton ? "contained" : "text"}
              sx={
                !activeButton
                  ? {
                      borderRadius: "50px",
                      width: "170px",
                      height: "58px",
                      bgcolor: "#ff0b55",
                    }
                  : {
                      width: "170px",
                      height: "58px",
                      color: "#bababa",
                    }
              }
            >
              <Typography sx={{ fontSize: 14 }}>APP Design</Typography>
            </Button>
            <Button
              variant={activeButton ? "contained" : "text"}
              sx={
                activeButton
                  ? {
                      borderRadius: "50px",
                      width: "170px",
                      height: "58px",
                      bgcolor: "#ff0b55",
                    }
                  : {
                      width: "170px",
                      height: "58px",
                      color: "#bababa",
                    }
              }
            >
              <Typography sx={{ fontSize: 14 }}>WEB Design</Typography>
            </Button>
            <Button
              variant={activeButton ? "contained" : "text"}
              sx={
                activeButton
                  ? {
                      borderRadius: "50px",
                      width: "170px",
                      height: "58px",
                      bgcolor: "#ff0b55",
                    }
                  : {
                      width: "170px",
                      height: "58px",
                      color: "#bababa",
                    }
              }
            >
              <Typography sx={{ fontSize: 14 }}>LOGO Design</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default MyWork;
