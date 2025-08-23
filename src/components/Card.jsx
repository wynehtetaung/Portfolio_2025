import { Box, Typography } from "@mui/material";

const Card = ({ card }) => {
  return (
    <Box
      sx={{
        color: "#fff",
        width: { xl: 370, lg: 370, md: 300, sm: 220, xs: 388 },
      }}
    >
      <Typography sx={{ fontSize: 32, fontWeight: "bold", color: "#ffffff" }}>
        0<span style={{ color: "#FF0B55" }}>{card.No}</span>
      </Typography>
      <Typography
        sx={{
          mt: "7px",
          fontSize: 36,
          fontWeight: 600,
          color: "#fff",
          minHeight: {
            xl: "auto",
            lg: "auto",
            md: "auto",
            sm: 120,
            xs: "auto",
          },
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
          minHeight: {
            xl: 180,
            lg: 180,
            md: 192,
            sm: 256,
            xs: "auto",
          },
          width: "100%",
          // width: {
          //   xl: "368px",
          //   lg: "368px",
          //   md: "368px",
          //   sm: "340px",
          //   xs: "100%",
          // },
          textWrap: "wrap",
          mb: "62px",
        }}
      >
        {card.content}
      </Typography>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Box
          component={"img"}
          src={card.image}
          sx={{
            mb: "66px",
            width: "100%",
            borderRadius: "34px",
          }}
        />
      </Box>
    </Box>
  );
};
export default Card;
