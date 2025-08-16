import { Box, Typography } from "@mui/material";

const UserInfoCard = ({ title, content }) => {
  return (
    <Box sx={{ width: "300px" }}>
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: "500",
          color: "#ff0b55",
          textTransform: "capitalize",
        }}
      >
        {title}:
      </Typography>
      <Typography
        sx={{
          mt: "10px",
          fontSize: 24,
          fontWeight: "bold",
          color: "#222222",
        }}
      >
        {content}
      </Typography>
      <Box sx={{ height: "1px", bgcolor: "#a8a8a8", mt: "15px" }}></Box>
    </Box>
  );
};
export default UserInfoCard;
