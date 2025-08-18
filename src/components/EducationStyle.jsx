import { Box, Typography } from "@mui/material";
import Calender from "../assets/images/Calender 1.png";

const EducationStyle = ({ information }) => {
  return (
    <Box>
      <Typography
        sx={{
          color: "#222222",
          fontSize: 34,
          fontWeight: 500,
          textTransform: "uppercase",
          mb: "31px",
        }}
      >
        {information.title}
      </Typography>

      {information.data.map((info, i) => (
        <Box key={i} sx={{ display: "flex", gap: "15px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "25px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                bgcolor: "#ff0b55",
              }}
            ></Box>
            <Box
              sx={{ bgcolor: "#ff0b55", width: "5px", height: "100%" }}
            ></Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <img src={Calender} width={24} height={24} />
              <Typography
                sx={{ color: "#696969", fontSize: 16, fontWeight: 400 }}
              >
                {info.date}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#222222",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: 1,
                mt: "12px",
                lineHeight: "160%",
              }}
            >
              {info.title}
            </Typography>
            <Typography
              sx={{
                mt: "8px",
                color: "#696969",
                fontSize: 16,
                lineHeight: "200%",
                letterSpacing: 1,
                mb: "38px",
              }}
            >
              {info.content}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default EducationStyle;
