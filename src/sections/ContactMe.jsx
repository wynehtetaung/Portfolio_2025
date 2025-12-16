import { Box, Button, Input, TextField, Typography } from "@mui/material";
import Logo from "../assets/images/Logo/Logo-white.svg";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <Box
      sx={{
        pt: "50px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        },
      }}
    >
      <Box
        component={motion.div}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -150 }}
        transition={{ type: "spring", stiffness: 20 }}
        sx={{ display: "flex", flexDirection: "column", gap: "45px" }}
      >
        <Box>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: { xl: 48, lg: 48, md: 48, sm: 48, xs: 40 },
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
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#a8a8a8",
              fontSize: { xl: 16, lg: 16, md: 16, sm: 16, xs: 14 },
              fontWeight: 600,
            }}
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
            <span style={{ color: "#ff0b55" }}>+959</span> 757359906
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: "#a8a8a8", fontSize: 16, fontWeight: 600 }}>
            Address
          </Typography>
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#ffffff",
              mt: "10px",
              minWidth: 380,
              height: "112px",
            }}
          >
            BAHAN TOWNSHIP, YANGON,{" "}
            <span style={{ color: "#ff0b55" }}>MYANMAR.</span>
          </Typography>
        </Box>
      </Box>
      <Box
        component={motion.div}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 150 }}
        transition={{ type: "spring", stiffness: 20 }}
        sx={{ display: "flex", flexDirection: "column", gap: "35px" }}
      >
        <Box
          component={"img"}
          src={Logo}
          width={111}
          height={29}
          sx={{ mt: "20px" }}
        />
        <Typography
          sx={{
            color: "#a8a8a8",
            fontSize: 16,
            width: {
              xl: "503px",
              lg: "503px",
              md: "450px",
              sm: "380px",
              xs: "auto",
            },
            height: "auto",
            lineHeight: "200%",
            textWrap: "wrap",
            mb: "74px",
          }}
        >
          Have an idea or a dream you want to see come to fruition? I’m all
          ears! I’m here to turn your thoughts into something real and exciting.
          Let’s team up and create something awesome together – I’ve got the
          skills, and you’ve got the vision. Let’s do this!
        </Typography>
      </Box>
    </Box>
  );
};
export default ContactMe;
