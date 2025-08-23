import { Box, Button, Typography } from "@mui/material";
import UpArrowImage from "../assets/images/uparrowIcon.png";

const HoverCard = ({ image, title, action }) => {
  return (
    <Box
      sx={{
        mb: "15px",
        position: "relative",
        "&:hover .overlay": {
          opacity: 1,
          transform: "scale(1)",
        },
        "&:hover .sliderImage": {
          filter: "blur(1px) brightness(0.7)",
        },
      }}
    >
      <Box
        component={"img"}
        className="sliderImage"
        src={image}
        sx={{
          mx: "15px",
          objectFit: "cover",
          transition: "all 0.4s ease",
          width: { xl: 470, lg: 470, md: 400, sm: 300, xs: 300 },
          height: { xl: 470, lg: 470, md: 400, sm: 300, xs: 300 },
          borderRadius: "34px",
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
            fontSize: { xl: 35, lg: 28, md: 28, sm: 28, xs: 16 },
            fontWeight: "bold",
            textWrap: "wrap",
            textAlign: "center",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            color: "#ffffff",
            mb: { xl: "29px", lg: "29px", md: "29px", sm: "29px", xs: "20px" },
          }}
        >
          {title}
        </Typography>
        <Button
          variant="text"
          sx={{
            overflow: "hidden",
            width: { xl: 66, lg: 66, md: 66, sm: 66, xs: 40 },
            height: { xl: 66, lg: 66, md: 66, sm: 66, xs: 40 },
            borderRadius: "50px",
          }}
        >
          <Box
            component={"img"}
            src={UpArrowImage}
            width={66}
            height={66}
            sx={{
              width: { xl: 66, lg: 66, md: 66, sm: 66, xs: 40 },
              height: { xl: 66, lg: 66, md: 66, sm: 66, xs: 40 },
            }}
            onClick={action}
          />
        </Button>
      </Box>
    </Box>
  );
};
export default HoverCard;
