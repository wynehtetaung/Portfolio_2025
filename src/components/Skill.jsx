import { Box, Typography } from "@mui/material";

const Skill = ({ skill }) => {
  return (
    <Box sx={{ mb: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          mb: "8px",
        }}
      >
        <Typography sx={{ fontSize: 16, color: "#000000" }}>
          {skill.title}
        </Typography>
        <Typography sx={{ color: "#ff0b55", fontSize: 16 }}>
          {skill.skill}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "10px",
          bgcolor: "#eeeeee",
          borderRadius: "50px",
        }}
      >
        <Box
          sx={{
            width: skill.skill,
            height: "10px",
            bgcolor: "#ff0b55",
            borderRadius: "50px",
          }}
        ></Box>
      </Box>
    </Box>
  );
};
export default Skill;
