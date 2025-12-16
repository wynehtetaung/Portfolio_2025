import { Box, Typography } from "@mui/material";
import ReviewCard from "../components/ReviewCard";
import Question from "../components/Question";
import ButtonResume from "../components/Button_resume";
import { reviewCardData } from "../store/reviewData.store";
import { motion } from "framer-motion";

const SectionFour = () => {
  return (
    <Box>
      <Typography
        component={motion.p}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ type: "spring", stiffness: 20 }}
        sx={{
          pt: { xl: "70px", lg: "70px", md: "70px", sm: "70px", xs: "35px" },
          fontSize: { xl: 48, lg: 48, md: 48, sm: 48, xs: 40 },
          fontWeight: "bold",
          mb: "36px",
        }}
      >
        What people say <span style={{ color: "#FF0B55" }}>about me!</span>
      </Typography>
      <ReviewCard data={reviewCardData} />
      <Box
        sx={{
          mt: "70px",
          display: "flex",
          gap: "80px",
          flexWrap: {
            xl: "nowrap",
            lg: "nowrap",
            md: "nowrap",
            sm: "wrap",
            xs: "wrap",
          },
        }}
      >
        {/* Left  */}
        <Box
          sx={{
            width: { xl: "42%", lg: "42%", md: "100%", sm: "100%", xs: "100%" },
          }}
        >
          <Typography
            component={motion.p}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 20 }}
            sx={{
              minWidth: 320,
              height: "auto",
              fontSize: { xl: 48, lg: 48, md: 48, sm: 48, xs: 39 },
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Got questions? I've got{" "}
            <span style={{ color: "#ff0b55" }}>answers.</span>
          </Typography>
          <Typography
            component={motion.p}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 20 }}
            sx={{
              mt: "10px",
              fontSize: { xl: 16, lg: 16, md: 16, sm: 16, xs: 14 },
              width: {
                xl: "400px",
                lg: "400px",
                md: "400px",
                sm: "400px",
                xs: "300px",
              },
              height: "64px",
              color: "#505050",
            }}
          >
            Got questions or need advice? Get clear insights to move forward.
          </Typography>

          <Box
            component={motion.div}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 20 }}
            sx={{
              mt: {
                xl: "87px",
                lg: "87px",
                md: "87px",
                sm: "87px",
                xs: "20px",
              },
              mb: {
                xl: "70px",
                lg: "70px",
                md: "70px",
                sm: "20px",
                xs: "20px",
              },
            }}
          >
            <ButtonResume />
          </Box>
        </Box>
        {/* Right  */}
        <Box
          sx={{
            width: { xl: "58%", lg: "58%", md: "100%", sm: "100%", xs: "100%" },
            mb: "50px",
          }}
        >
          <Question />
        </Box>
      </Box>
    </Box>
  );
};
export default SectionFour;
