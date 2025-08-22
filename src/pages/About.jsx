import { Box, Container, Typography } from "@mui/material";
import Nav from "../components/Nav";
import ButtonResume from "../components/Button_resume";
import aboutProfileImage from "../assets/images/profile_about.png";
import { userData, skills, education, experience } from "../store/store";
import UserInfoCard from "../components/UserInfoCard";
import Skill from "../components/Skill";
import EducationStyle from "../components/EducationStyle";
import ContactMe from "../sections/ContactMe";
import Footer from "../components/Footer";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        overflow: {
          xl: "visible",
          lg: "visible",
          md: "visible",
          sm: "hidden",
          xs: "hidden",
        },
      }}
    >
      <Nav />
      <Container maxWidth="lg" sx={{ mb: "70px" }}>
        <Box
          sx={{
            mt: "45px",
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              width: { xl: "50%", lg: "50%", md: "50%", sm: "50%", xs: "100%" },
            }}
          >
            <Typography
              sx={{ fontSize: 48, color: "#000000", fontWeight: "bold" }}
            >
              About <span style={{ color: "#ff0b55" }}>me.</span>
            </Typography>
            <Typography
              sx={{
                fontSize: { xl: 24, lg: 24, md: 22, sm: 20, xs: 24 },
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
                fontSize: { xl: 16, lg: 16, md: 16, sm: 12, xs: 12 },
                lineHeight: "200%",
                letterSpacing: 1,
                width: { xl: 585, lg: 585, md: 560, sm: 410, xs: "100%" },
                textWrap: "wrap",
                height: "auto",
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
            <Box
              sx={{
                mt: {
                  xl: "35px",
                  lg: "35px",
                  md: "35px",
                  sm: "16px",
                  xs: "30px",
                },
                mb: {
                  xl: "70px",
                  lg: "70px",
                  md: "70px",
                  sm: "45px",
                  xs: "20px",
                },
              }}
            >
              <ButtonResume />
            </Box>
          </Box>
          <Box
            sx={{
              width: { xl: "50%", lg: "50%", md: "50%", sm: "50%", xs: "100%" },
              textAlign: "end",
            }}
          >
            <Box
              component={"img"}
              src={aboutProfileImage}
              sx={{
                mt: "40px",
                objectFit: "cover",
                width: { xl: 400, lg: 400, md: 410, sm: 290, xs: "100%" },
                height: { xl: 300, lg: 300, md: 310, sm: 210, xs: 290 },
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xl: "10px", lg: "10px", md: "10px", sm: "10px", xs: "70px" },
            mb: "70px",
            display: "flex",
            flexWrap: "wrap",
            gap: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: { xl: "35%", lg: "35%", md: "35%", sm: "35%", xs: "100%" },
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
              width: { xl: "35%", lg: "35%", md: "35%", sm: "35%", xs: "100%" },
            }}
          >
            <UserInfoCard title={"age"} content={userData.age} />
            <UserInfoCard title={"email"} content={userData.email} />
            <UserInfoCard title={"phone"} content={userData.phone} />
          </Box>
          <Box
            sx={{
              width: { xl: "30%", lg: "30%", md: "30%", sm: "30%", xs: "100%" },
            }}
          >
            {skills.map((skill, i) => (
              <Skill key={i} skill={skill} />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
            },
            gap: {
              xl: "100px",
              lg: "100px",
              md: "100px",
              sm: "100px",
              xs: "40px",
            },
            height: "100%",
          }}
        >
          {/* experience section  */}
          <Box
            sx={{
              width: { xl: "50%", lg: "50%", md: "50%", sm: "50%", xs: "100%" },
              height: "100%",
            }}
          >
            <EducationStyle information={education} />
          </Box>
          {/* middle line  */}
          <Box
            sx={{
              width: {
                xl: "1px",
                lg: "1px",
                md: "1px",
                sm: "1px",
                xs: "100%",
              },
              height: {
                xl: "auto",
                lg: "auto",
                md: "auto",
                sm: "auto",
                xs: "1px",
              },
              bgcolor: "#bababa",
            }}
          ></Box>
          {/* experience section  */}
          <Box
            sx={{
              width: { xl: "50%", lg: "50%", md: "50%", sm: "50%", xs: "100%" },
              height: "100%",
            }}
          >
            <EducationStyle information={experience} />
          </Box>
        </Box>
      </Container>
      <Box sx={{ bgcolor: "#000000" }}>
        <Container maxWidth="lg">
          <ContactMe />
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};
export default About;
