import { Box, Button, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import UpArrowImage from "../assets/images/uparrowIcon.png";

const LogoSlider = ({ slideData }) => {
  return (
    <Marquee
      pauseOnHover={true}
      play={true}
      direction={'left'}
    >
      <Box sx={{ display: "flex", overflow: "hidden" }}>
        {slideData.image.map((data, i) => (
          <Box
            key={i}
            sx={
              slideData.action.hover && {
                position: "relative",
                "&:hover .overlay": {
                  opacity: 1,
                  transform: "scale(1)",
                },
                "&:hover .sliderImage": {
                  filter: "blur(3px) brightness(0.7)",
                },
              }
            }
          >
            <img
              className="sliderImage"
              width={slideData.width}
              height={slideData.height}
              src={data}
              style={{
                marginLeft: slideData.marginLeft,
                objectFit: "cover",
                transition: "all 0.4s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0,
                transform: "scale(0.95)",
                transition: "all 0.5s ease",
              }}
              className="overlay"
            >
              <Typography
                sx={{
                  fontSize: 35,
                  fontWeight: "bold",
                  color: "#ffffff",
                  mb: "29px",
                }}
              >
                {data.title}
              </Typography>
              <Button
                variant="text"
                sx={{
                  overflow: "hidden",
                  width: 66,
                  height: 66,
                  borderRadius: "50px",
                }}
              >
                <img src={UpArrowImage} width={66} height={66} />
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Marquee>
  );
};
export default LogoSlider;
