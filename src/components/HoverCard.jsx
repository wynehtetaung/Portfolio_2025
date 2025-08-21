import { Box, Button, Typography } from "@mui/material";
import UpArrowImage from "../assets/images/uparrowIcon.png";

const HoverCard = ({ image, title, action }) => {
  return (
    <Box
      sx={{
        position: "relative",
        "&:hover .overlay": {
          opacity: 1,
          transform: "scale(1)",
        },
        "&:hover .sliderImage": {
          filter: "blur(3px) brightness(0.7)",
        },
      }}
    >
      <Box
        component={"img"}
        className="sliderImage"
        src={image}
        sx={{
          marginLeft: "20px",
          objectFit: "cover",
          transition: "all 0.4s ease",
          width: { xl: 470, lg: 470, md: 400, sm: 300, xs: 200 },
          height: { xl: 470, lg: 470, md: 400, sm: 300, xs: 200 },
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
          {title}
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
          <Box
            component={"img"}
            src={UpArrowImage}
            width={66}
            height={66}
            onClick={action}
          />
        </Button>
      </Box>
    </Box>
  );
};
export default HoverCard;
