import { Box, Divider, Typography } from "@mui/material";
import plus from "../assets/images/plus.png";

const Question = ({ data }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      {data.map((data, i) => (
        <Box key={i}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "13px",
            }}
          >
            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
              {data.question}
            </Typography>
            <Box sx={{ cursor: "pointer" }}>
              <img src={plus} width={32} height={32} />
            </Box>
          </Box>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};
export default Question;
