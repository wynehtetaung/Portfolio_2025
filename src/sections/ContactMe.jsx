import { Box, Button, Input, TextField, Typography } from "@mui/material";

const ContactMe = () => {
  return (
    <Box sx={{ mt: "50px" }}>
      <Typography
        sx={{
          color: "#ffffff",
          fontSize: 48,
          fontWeight: "bold",
          width: "305px",
          height: "72px",
        }}
      >
        Contact <span style={{ color: "#ff0b55" }}>me.</span>
      </Typography>
      <Typography sx={{ color: "#a8a8a8", fontSize: 15 }}>
        Step into a world — where success begins with you!
      </Typography>
      <Box sx={{ mt: "40px", display: "flex" }}>
        <Box sx={{ width: "55%" }}>
          <Box>
            <Typography
              sx={{ color: "#a8a8a8", fontSize: 16, fontWeight: 600 }}
            >
              Phone
            </Typography>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#ffffff",
                mt: "10px",
              }}
            >
              <span style={{ color: "#ff0b55" }}>+959</span> 784495484
            </Typography>
          </Box>
          <Box sx={{ my: "45px" }}>
            <Typography
              sx={{ color: "#a8a8a8", fontSize: 16, fontWeight: 600 }}
            >
              Address
            </Typography>
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#ffffff",
                mt: "10px",
                width: "549px",
                height: "112px",
              }}
            >
              BAHAN TOWNSHIP, YANGON,{" "}
              <span style={{ color: "#ff0b55" }}>MYANMAR.</span>
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#a8a8a8",
              fontSize: 16,
              width: "503px",
              height: "160px",
              lineHeight: "200%",
              mb: "74px",
            }}
          >
            Have an idea or a dream you want to see come to fruition? I’m all
            ears! I’m here to turn your thoughts into something real and
            exciting. Let’s team up and create something awesome together – I’ve
            got the skills, and you’ve got the vision. Let’s do this!
          </Typography>
        </Box>
        <Box
          sx={{
            color: "#a8a8a8",
            width: "45%",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <TextField
            variant="outlined"
            label="Name"
            fullWidth
            sx={{
              ".MuiInputLabel-root": {
                color: "gray",
              },
              ".MuiOutlinedInput-root": {
                input: {
                  color: "#a8a8a8a8",
                  fontSize: 16,
                },
                fieldset: {
                  border: "1px solid #a8a8a8a8",
                  borderRadius: "5px",
                },
                "&.Mui-focused fieldset": {
                  border: "1px solid #a8a8a8a8",
                  borderRadius: "5px",
                },
              },
              ":hover": {
                border: "1px solid #a8a8a8a8",
                borderRadius: "5px",
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            sx={{
              ".MuiInputLabel-root": {
                color: "gray",
              },
              ".MuiOutlinedInput-root": {
                input: {
                  color: "#a8a8a8a8",
                  fontSize: 16,
                },
                fieldset: {
                  border: "1px solid #a8a8a8a8",
                  borderRadius: "5px",
                },
                "&.Mui-focused fieldset": {
                  border: "1px solid #a8a8a8a8",
                  borderRadius: "5px",
                },
              },
              ":hover": {
                border: "1px solid #a8a8a8a8",
                borderRadius: "5px",
              },
            }}
          />
          <TextField
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
            multiline
            maxRows={8}
            sx={{
              ".MuiInputLabel-root": {
                color: "gray",
              },
              ".MuiOutlinedInput-root": {
                input: {
                  color: "#a8a8a8a8",
                  fontSize: 16,
                },
                fieldset: {
                  border: "1px solid #a8a8a8a8",
                  borderRadius: "5px",
                },
                "&.Mui-focused fieldset": {
                  border: "1px solid #a8a8a8a8",
                  borderRadius: "5px",
                },
              },
              "&:hover": {
                border: "1px solid #a8a8a8a8",
                borderRadius: "5px",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ff0b55",
              height: "66px",
              borderRadius: "50px",
            }}
          >
            SEND MESSAGE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default ContactMe;
