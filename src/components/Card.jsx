import { Box, Typography } from "@mui/material";

const Card = ({ cardData }) => {
  return (
    <Box sx={{ display: "flex", gap: "30px" }}>
      {cardData.map((data, i) => (
        <Box key={i} sx={{ color: "#fff" }}>
          <Typography
            sx={{ fontSize: 32, fontWeight: "bold", color: "#ffffff" }}
          >
            0<span style={{ color: "#FF0B55" }}>{data.card.No}</span>
          </Typography>
          <Typography
            sx={{
              mt: "7px",
              fontSize: 36,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {data.card.title}
          </Typography>
          <Typography
            sx={{
              mt: "10px",
              fontSize: 16,
              color: "#a8a8a8",
              lineHeight: "200%",
              height: "160px",
              mb: "62px",
            }}
          >
            {data.card.content}
          </Typography>
          <img
            style={{ marginBottom: "66px" }}
            src={data.card.image}
            width={370}
            height={335}
          />
        </Box>
      ))}
    </Box>
  );
};
export default Card;
