import { Box, Button, Typography } from "@mui/material";
import ReviewCard from "../components/ReviewCard";
import avatarImage from "../assets/images/avatar.jpeg";
import upArrow from "../assets/images/arrow-up-right.png";
import Question from "../components/Question";

const SectionFour = () => {
  const reviewCardData = [
    {
      name: "Aye Chan Min (Eric)",
      position: "CEO of ABCD Co.,Ltd.",
      avatar: avatarImage,
      content: `“His UI/UX design skills transformed our app into a user-friendly,
        visually appealing experience. They listened carefully to our needs and
        delivered a seamless, intuitive design that truly improved our product.
        Highly professional and easy to collaborate with — I’d definitely
        recommend them for any design project.”`,
    },
    {
      name: "Kaung Myat Cho",
      position: "Backend Developer @ Earthlike",
      avatar: avatarImage,
      content: `“Freddie has been an invaluable asset to our design team. Their expertise in UI/UX design consistently elevates our products by creating.”`,
    },
    {
      name: "Kaung Myat Cho",
      position: "Backend Developer @ Earthlike",
      avatar: avatarImage,
      content: `“Working with Freddie was a fantastic experience. He is truly understood my brand and delivered a logo that perfectly captures its essence. The design was creative, unique, and professional, helping my business stand out. Communication was smooth, and the project was completed on time.”`,
    },
    {
      name: "Kaung Myat Cho",
      position: "Backend Developer @ Earthlike",
      avatar: avatarImage,
      content: `“Freddie has been an invaluable asset to our design team. Their expertise in UI/UX design consistently elevates our products by creating intuitive, user-centered interfaces that enhance overall user satisfaction. They demonstrate strong creativity, attention to detail, and a deep understanding of user behavior. He is a awesome Senior UI/UX Designer of our company.”`,
    },
    {
      name: "Kaung Myat Cho",
      position: "Backend Developer @ Earthlike",
      avatar: avatarImage,
      content: `“Freddie has been an invaluable asset to our design team. Their expertise in UI/UX design consistently elevates our products by creating.”`,
    },
  ];

  const questionData = [
    {
      question: "WHAT IS YOUR ROLE?",
      answer: "",
    },
    {
      question: "WHICH DESIGN TOOLS DO YOU USE?",
      answer: "",
    },
    {
      question: "Can I place a logo design order with you?",
      answer: "",
    },
    {
      question: "HOW DO YOU COLLABORATE WITH TEAMS?",
      answer: "",
    },
    {
      question: "HOW DO YOU BALANCE INNOVATION?",
      answer: "",
    },
  ];
  return (
    <Box>
      <Typography
        sx={{ pt: "70px", fontSize: 48, fontWeight: "bold", mb: "36px" }}
      >
        What people say <span style={{ color: "#FF0B55" }}>about me!</span>
      </Typography>
      <ReviewCard data={reviewCardData} />
      <Box sx={{ mt: "70px", display: "flex", gap: "80px" }}>
        {/* Left  */}
        <Box sx={{ width: "42%" }}>
          <Typography
            sx={{
              width: "412px",
              height: "144px",
              fontSize: 48,
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Got questions? I've got{" "}
            <span style={{ color: "#ff0b55" }}>answers.</span>
          </Typography>
          <Typography
            sx={{
              mt: "10px",
              fontSize: 16,
              width: "400px",
              height: "64px",
              color: "#505050",
            }}
          >
            Got questions or need advice? Get clear insights to move forward.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ff0b55",
              width: "237px",
              height: "66px",
              borderRadius: "50px",
              mt: "87px",
              mb: "70px",
            }}
          >
            <Typography>DOWNLOAD RESUME</Typography>
            <img src={upArrow} width={24} height={24} />
          </Button>
        </Box>
        {/* Right  */}
        <Box sx={{ width: "58%" }}>
          <Question data={questionData} />
        </Box>
      </Box>
    </Box>
  );
};
export default SectionFour;
