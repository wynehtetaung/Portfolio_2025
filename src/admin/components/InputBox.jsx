import { Box, Input } from "@mui/material";

const InputBox = ({ type, color, placeholder, setTemp }) => {
  return (
    <Box
      sx={{
        mt: "15px",
        width: "100%",
        height: 59,
        border: "2px solid #9747ff",
        borderRadius: "10px",
      }}
    >
      <Input
        disableUnderline
        type={type}
        sx={{ p: "14px", color: color }}
        placeholder={placeholder}
        onChange={(e) => setTemp(e.target.value)}
      />
    </Box>
  );
};
export default InputBox;
