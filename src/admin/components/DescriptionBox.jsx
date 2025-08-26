import { Box, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const DescriptionBox = ({ title, setDes }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleChange = () => {
    dispatch(setDes(inputRef.current.value));
  };
  return (
    <Box>
      <Typography sx={{ color: "#676767" }}>{title}</Typography>

      <TextField
        multiline
        inputRef={inputRef}
        onChange={handleChange}
        rows={5}
        placeholder="Add description..."
        variant="outlined"
        sx={{
          width: 302,
          mt: "13px",
          "& fieldset": {
            border: "2px solid",
            borderColor: "#9747FF",
          },
          "&:hover fieldset": {
            border: "2px solid",
            borderColor: "#9747FF",
          },
          "&.Mui-focused fieldset": {
            border: "2px solid",
            borderColor: "#9747FF",
          },

          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
        }}
      />
    </Box>
  );
};
export default DescriptionBox;
