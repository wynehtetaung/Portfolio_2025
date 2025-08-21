import { Box, Typography } from "@mui/material";

const Card = ({ card }) => {
  return (
    <Box sx={{ color: "#fff" }}>
      <Typography sx={{ fontSize: 32, fontWeight: "bold", color: "#ffffff" }}>
        0<span style={{ color: "#FF0B55" }}>{card.No}</span>
      </Typography>
      <Typography
        sx={{
          mt: "7px",
          fontSize: 36,
          fontWeight: 600,
          color: "#fff",
        }}
      >
        {card.title}
      </Typography>
      <Typography
        sx={{
          mt: "10px",
          fontSize: 16,
          color: "#a8a8a8",
          lineHeight: "200%",
          height: "180px",
          width: {
            xl: "368px",
            lg: "368px",
            md: "368px",
            sm: "320px",
            xs: "300px",
          },
          textWrap: "wrap",
          mb: "62px",
        }}
      >
        {card.content}
      </Typography>
      <Box
        component={"img"}
        src={card.image}
        sx={{
          mb: "66px",
          width: { xl: 370, lg: 370, md: 370, sm: 340, xs: 280 },
          height: { xl: 335, lg: 335, md: 335, sm: 305, xs: 255 },
        }}
      />
    </Box>
  );
};
export default Card;
