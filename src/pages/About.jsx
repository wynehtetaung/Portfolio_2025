import { Box, Container, Typography } from "@mui/material";
import Nav from "../components/Nav";
import ButtonResume from "../components/Button_resume";
import aboutProfileImage from "../assets/images/profile_about.png";
import { userData, skills } from "../store/store";
import UserInfoCard from "../components/UserInfoCard";
import Skill from "../components/Skill";

const About = () => {
  console.log(userData);
  return (
    <Box>
      <Nav />
      <Container maxWidth="lg">
        <Box sx={{ mt: "45px", display: "flex", gap: "80px" }}>
          <Box sx={{ width: "50%" }}>
            <Typography
              sx={{ fontSize: 48, color: "#000000", fontWeight: "bold" }}
            >
              About <span style={{ color: "#ff0b55" }}>me.</span>
            </Typography>
            <Typography
              sx={{
                fontSize: 24,
                color: "#222222",
                fontWeight: 500,
                mt: "8px",
              }}
            >
              I'm Bhone Thit Aung{" "}
              <span style={{ color: "#ff0b55" }}>(Freddie).</span>
            </Typography>
            <Typography
              sx={{
                color: "#575757",
                fontSize: 16,
                lineHeight: "200%",
                letterSpacing: 1,
                width: "585px",
                height: "160px",
                mt: "8px",
                mb: "30px",
              }}
            >
              I am a UI/UX Designer with a strong passion for creating designs.
              I have over 4 years in Website and application designs. My
              strengths are my creativity, catching deadlines, user experiences
              and multitasking. I would like to share my skills and experience
              with a reputable organization so expend my learnings, knowledge
              and skills.
            </Typography>
            <ButtonResume />
          </Box>
          <Box sx={{ width: "50%" }}>
            <img src={aboutProfileImage} width={500} height={411} />
          </Box>
        </Box>
        <Box sx={{ mt: "90px", mb: "70px", display: "flex", gap: "100px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "35%",
            }}
          >
            <UserInfoCard title={"birthday"} content={userData.birthday} />
            <UserInfoCard title={"degree"} content={userData.degree} />
            <UserInfoCard title={"city"} content={userData.city} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "35%",
            }}
          >
            <UserInfoCard title={"age"} content={userData.age} />
            <UserInfoCard title={"email"} content={userData.email} />
            <UserInfoCard title={"phone"} content={userData.phone} />
          </Box>
          <Box sx={{ width: "30%" }}>
            {skills.map((skill, i) => (
              <Skill key={i} skill={skill} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default About;
