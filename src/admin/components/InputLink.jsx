import { Box, Input } from "@mui/material";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const InputLink = ({ icon, setInput }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleChange = () => {
    if (inputRef.current.value) dispatch(setInput(inputRef.current.value));
  };
  return (
    <Box
      sx={{
        width: 302,
        height: 56,
        border: "2px solid #9747FF",
        display: "flex",
        gap: "13px",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Box
        component={"img"}
        src={icon}
        sx={{ width: 24, height: 24, ml: "17px" }}
      />
      <Box
        component={"div"}
        sx={{ width: "1px", height: "90%", bgcolor: "#cfcfcf" }}
      />
      <Input
        placeholder="Link..."
        inputRef={inputRef}
        type="text"
        disableUnderline
        onChange={handleChange}
        sx={{
          outline: "none",
        }}
      />
    </Box>
  );
};
export default InputLink;
