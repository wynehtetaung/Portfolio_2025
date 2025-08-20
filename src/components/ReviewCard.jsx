import { Avatar, Box, Typography } from "@mui/material";

const ReviewCard = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {data.map((data, i) => (
        <Box
          key={i}
          sx={{
            flex: "1 1 0",
            width: "370px",
            height: "auto",
            border: "1px solid #B6B6B6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "25px",
            gap: "40px",
          }}
        >
          <Typography
            sx={{
              width: "290px",
              height: "auto",
              mt: "30px",
              color: "#575757",
              fontSize: 14,
              lineHeight: "200%",
            }}
          >
            {data.content}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              mb: "30px",
            }}
          >
            <Avatar src={data.avatar} />
            <Box>
              <Typography
                sx={{ fontSize: 16, fontWeight: "medium", color: "#000" }}
              >
                {data.name}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#7f7f7f" }}>
                {data.position}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default ReviewCard;
