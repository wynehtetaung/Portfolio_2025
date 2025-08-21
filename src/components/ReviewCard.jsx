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
            width: {
              xl: 370,
              lg: 370,
              md: 310,
              sm: 350,
              xs: 400,
            },
            height: "auto",
            border: "1px solid #B6B6B6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
            gap: "40px",
            p: {
              xl: "0px",
              lg: "0px",
              md: "0px",
              sm: "0px",
              xs: "5px",
            },
          }}
        >
          <Typography
            sx={{
              width: {
                xl: "290px",
                lg: "290px",
                md: "290px",
                sm: "290px",
                xs: "275px",
              },
              height: "auto",
              mt: "30px",
              color: "#575757",
              fontSize: 14,
              lineHeight: "200%",
              textWrap: "wrap",
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
