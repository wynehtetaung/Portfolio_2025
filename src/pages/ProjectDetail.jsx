import { Box, Container, Divider, Typography } from "@mui/material";
import Nav from "../components/Nav";
import leftArrow from "../assets/images/chevron-left.png";
import { useNavigate, useParams } from "react-router-dom";
import { projectData } from "../store/store";
import pj1 from "../assets/images/pj1.png";
import pj2 from "../assets/images/pj2.png";
import pj3 from "../assets/images/pj3.png";
import pj4 from "../assets/images/pj4.png";
import SectionSlider from "../components/SectionSlider";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id, sub } = useParams();
  const filterData = projectData[sub].find((data) => data.id == id);
  const slideData = {
    image: [pj1, pj2, pj3, pj4],
    width: 470,
    height: 470,
    marginLeft: "20px",
    action: {
      pause: false,
      hover: true,
      play: true,
      direction: "right",
    },
  };
  return (
    <Box>
      <Nav />
      <Container maxWidth="lg">
        <Box
          sx={{ mt: "70px", display: "flex", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          <img src={leftArrow} width={24} height={24} alt="" />
          <Typography sx={{ fontSize: 16, color: "#000000" }}>Back</Typography>
        </Box>
        {/* first section  */}
        <Box sx={{ mt: "41px", display: "flex", gap: "68px", mb: "51px" }}>
          <Box sx={{ width: "55%" }}>
            <Typography
              sx={{ color: "#FF0B55", fontSize: 16, fontStyle: "italic" }}
            >
              Binfo Track & Train
            </Typography>
            <Typography
              sx={{
                color: "#00000",
                fontSize: "48px",
                fontWeight: "bold",
                mt: "8px",
              }}
            >
              BINFO Calorie Tracker
            </Typography>
            <Typography
              sx={{
                color: "#575757",
                fontSize: 16,
                width: "470px",
                mt: "25px",
              }}
            >
              {filterData.content}
            </Typography>
          </Box>
          <Box sx={{ width: "1px", bgcolor: "#BABABA" }}></Box>
          <Box sx={{ width: "44%" }}>
            <Box sx={{ mb: "19px" }}>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#222222",
                }}
              >
                organization
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  letterSpacing: 1,
                  color: "#575757",
                }}
              >
                {filterData.organization}
              </Typography>
            </Box>
            <Box sx={{ mb: "19px" }}>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#222222",
                }}
              >
                date
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  letterSpacing: 1,
                  color: "#575757",
                  mb: "19px",
                }}
              >
                {filterData.date}
              </Typography>
            </Box>
            <Box sx={{ mb: "19px" }}>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#222222",
                }}
              >
                industry
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  letterSpacing: 1,
                  color: "#575757",
                  mb: "19px",
                }}
              >
                {filterData.industry}
              </Typography>
            </Box>

            <Box sx={{ mb: "19px" }}>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#222222",
                }}
              >
                scope of work
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  letterSpacing: 1,
                  color: "#575757",
                  mb: "19px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  {filterData.scope_of_work.map((text, i) => (
                    <Box
                      key={i}
                      sx={{
                        bgcolor: "#efefef",
                        py: "8px",
                        px: "14px",
                        borderRadius: "50px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 12,
                          color: "#575757",
                          letterSpacing: 1,
                        }}
                      >
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* second section  */}
        <Box sx={{ mb: "59px" }}>
          <img src={filterData.image_one} width={1170} height={534} />
        </Box>
        {/* section three  */}
        <Box sx={{ display: "flex", gap: "109px", mb: "60px" }}>
          <Typography
            sx={{
              fontSize: 48,
              color: "#000000",
              fontWeight: "bold",
              width: "30%",
            }}
          >
            How it <span style={{ color: "#ff0b33" }}>work</span>
          </Typography>
          <Typography
            sx={{
              width: "70%",
              fontSize: 16,
              color: "#575757",
              lineHeight: "200%",
              letterSpacing: 1,
            }}
          >
            {filterData.how_it_work}
          </Typography>
        </Box>
        {/* section four  */}
        <Box sx={{ mb: "30px" }}>
          <img src={filterData.image_two} width={1170} height={534} />
        </Box>
        {/* section five  */}
        <Box sx={{ display: "flex", gap: "30px", mb: "60px" }}>
          <Box sx={{ width: "50%" }}>
            <img src={filterData.image_three} width={570} height={458} />
          </Box>
          <Box sx={{ width: "50%" }}>
            <img src={filterData.image_four} width={570} height={458} />
          </Box>
        </Box>
        {/* section six  */}
        <Box sx={{ display: "flex", gap: "86px", mb: "60px" }}>
          <Typography
            sx={{
              fontSize: 48,
              color: "#000000",
              fontWeight: "bold",
              width: "40%",
            }}
          >
            User <span style={{ color: "#ff0b33" }}>journey:</span>
          </Typography>
          <Typography
            sx={{
              width: "60%",
              fontSize: 16,
              color: "#575757",
              lineHeight: "200%",
              letterSpacing: 1,
            }}
          >
            {filterData.user_journey}
          </Typography>
        </Box>
        {/* section seven  */}
        <Box sx={{ mb: "60px" }}>
          <img src={filterData.image_five} width={1170} height={534} />
        </Box>
        {/* section eight  */}
        <Box sx={{ display: "flex", gap: "163px", mb: "60px" }}>
          <Typography
            sx={{
              fontSize: 48,
              color: "#000000",
              fontWeight: "bold",
              width: "40%",
            }}
          >
            Solutions:
          </Typography>
          <Typography
            sx={{
              width: "60%",
              fontSize: 16,
              color: "#575757",
              lineHeight: "200%",
              letterSpacing: 1,
            }}
          >
            {filterData.solution}
          </Typography>
        </Box>
      </Container>
      <Box sx={{ bgcolor: "#000000" }}>
        <Container maxWidth="lg" sx={{ pt: "50px", pb: "35px" }}>
          <Typography
            sx={{ color: "#ffffff", fontSize: 48, fontWeight: "bold" }}
          >
            Other <span style={{ color: "#ff0b55" }}>projects.</span>
          </Typography>
          <Typography sx={{ color: "#a8a8a8", fontSize: 16 }}>
            I turn complex ideas into simple, engaging, and delightful digital
            interfaces.
          </Typography>
        </Container>
        <SectionSlider slideData={slideData} />
        <Box
          sx={{
            width: "auto",
            bgcolor: "#a8a8a8",
            mt: "77px",
          }}
        ></Box>
        <Footer />
      </Box>
    </Box>
  );
};
export default ProjectDetail;
