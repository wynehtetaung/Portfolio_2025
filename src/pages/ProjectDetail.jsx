import { Box, Container, Divider, Typography } from "@mui/material";
import Nav from "../components/Nav";
import leftArrow from "../assets/images/chevron-left.png";
import { useNavigate, useParams } from "react-router-dom";
import { projectData } from "../store/projectData.store";
import Footer from "../components/Footer";
import { useEffect } from "react";
import SectionTwoSlide from "../components/ProjectSlider";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id, sub } = useParams();
  const filterData = projectData.find(data => data.type == sub && data.id == id);
  console.log(filterData);
  const checkData = filterData.project_name === undefined ? false : true;
  const sliderData = projectData.filter(data => data.slider);
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
      {checkData ? (
        <Container maxWidth="lg">
          <Box
            sx={{ mt: "70px", display: "flex", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            <Box
              component={"img"}
              src={leftArrow}
              sx={{ width: 24, height: 24 }}
            />
            <Typography sx={{ fontSize: 16, color: "#000000" }}>
              Back
            </Typography>
          </Box>
          {/* first section  */}
          <Box
            sx={{
              mt: "41px",
              display: "flex",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "row",
                xs: "column",
              },
              gap: "30px",
              mb: "51px",
            }}
          >
            <Box
              sx={{
                width: {
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "50%",
                  xs: "100%",
                },
              }}
            >
              <Typography
                sx={{ color: "#FF0B55", fontSize: 16, fontStyle: "italic" }}
              >
                {filterData.project_name}
              </Typography>
              <Typography
                sx={{
                  color: "#00000",
                  fontSize: "48px",
                  fontWeight: "bold",
                  mt: "8px",
                }}
              >
                {filterData.title}
              </Typography>
              <Typography
                sx={{
                  color: "#575757",
                  fontSize: 16,
                  width: "100%",
                  mt: "25px",
                  textWrap: "wrap",
                  whiteSpace: "pre-line",
                }}
              >
                {filterData.content}
              </Typography>
            </Box>
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
                bgcolor: "#BABABA",
              }}
            ></Box>
            <Box
              sx={{
                width: {
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "50%",
                  xs: "100%",
                },
              }}
            >
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
                <Box
                  component={"div"}
                  sx={{
                    fontSize: 16,
                    letterSpacing: 1,
                    color: "#575757",
                    mb: "19px",
                    mt:"10px"
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    {filterData.scope_of_work.map((text, i) => (
                      <Box
                        component={"div"}
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
                </Box>
              </Box>
            </Box>
          </Box>
          {/* second section  */}
          <Box sx={{ mb: "59px" }}>
            <Box
              component={"img"}
              src={filterData.image_one}
              sx={{
                width: "100%",
                height: { xl: 534, lg: 534, md: 440, sm: 325, xs: 180 },
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
          {/* section three  */}
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
              justifyContent: "space-between",
              mb: "60px",
            }}
          >
            <Typography
              sx={{
                fontSize: 48,
                color: "#000000",
                fontWeight: "bold",
                width: {
                  xl: "30%",
                  lg: "30%",
                  md: "30%",
                  sm: "30%",
                  xs: "100%",
                },
              }}
            >
              How it <span style={{ color: "#ff0b33" }}>work</span>
            </Typography>
            <Typography
              sx={{
                width: {
                  xl: "70%",
                  lg: "70%",
                  md: "70%",
                  sm: "70%",
                  xs: "100%",
                },
                fontSize: 16,
                color: "#575757",
                lineHeight: "200%",
                letterSpacing: 0.5,
                whiteSpace: "pre-line",
              }}
            >
              {filterData.how_it_work}
            </Typography>
          </Box>
          {/* section four  */}
          <Box sx={{ mb: "30px" }}>
            <Box
              component={"img"}
              src={filterData.image_two}
              sx={{
                width: "100%",
                height: { xl: 534, lg: 534, md: 440, sm: 325, xs: 180 },
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
          {/* section five  */}
          <Box sx={{ display: "flex", gap: "30px", mb: "60px" }}>
            <Box sx={{ width: "50%" }}>
              <Box
                component={"img"}
                src={filterData.image_three}
                sx={{
                  width: "100%",
                  height: { xl: 458, lg: 458, md: 458, sm: 320, xs: 170 },
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <Box
                component={"img"}
                src={filterData.image_four}
                sx={{
                  width: "100%",
                  height: { xl: 458, lg: 458, md: 458, sm: 320, xs: 170 },
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Box>
          {/* section six  */}
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
              justifyContent: "space-between",
              mb: "60px",
            }}
          >
            <Typography
              sx={{
                fontSize: 48,
                color: "#000000",
                fontWeight: "bold",
                width: {
                  xl: "40%",
                  lg: "40%",
                  md: "40%",
                  sm: "40%",
                  xs: "100%",
                },
              }}
            >
              User <span style={{ color: "#ff0b33" }}>journey:</span>
            </Typography>
            <Typography
              sx={{
                width: {
                  xl: "60%",
                  lg: "60%",
                  md: "60%",
                  sm: "60%",
                  xs: "100%",
                },
                fontSize: 16,
                color: "#575757",
                lineHeight: "200%",
                letterSpacing: 1,
                whiteSpace: "pre-line",
              }}
            >
              {filterData.user_journey}
            </Typography>
          </Box>
          {/* section seven  */}
          <Box sx={{ mb: "60px" }}>
            <Box
              component={"img"}
              src={filterData.image_five}
              sx={{
                width: "100%",
                height: { xl: 534, lg: 534, md: 440, sm: 325, xs: 180 },
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
          {/* section eight  */}
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
              justifyContent: "space-between",
              mb: "60px",
            }}
          >
            <Typography
              sx={{
                fontSize: 48,
                color: "#000000",
                fontWeight: "bold",
                width: {
                  xl: "40%",
                  lg: "40%",
                  md: "40%",
                  sm: "40%",
                  xs: "100%",
                },
              }}
            >
              Solutions:
            </Typography>
            <Typography
              sx={{
                width: {
                  xl: "60%",
                  lg: "60%",
                  md: "60%",
                  sm: "60%",
                  xs: "100%",
                },
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
      ) : (
        <Container maxWidth="lg">
          <Box
            sx={{ mt: "70px", display: "flex", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            <img src={leftArrow} width={24} height={24} alt="" />
            <Typography sx={{ fontSize: 16, color: "#000000" }}>
              Back
            </Typography>
          </Box>
          <Box
            sx={{
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Project Data Not Found!</Typography>
          </Box>
        </Container>
      )}
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
        <SectionTwoSlide slideData={sliderData} />
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
