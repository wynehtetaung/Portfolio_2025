import { Box, Button, Typography } from "@mui/material";

const SaveButton = ({ type }) => {
  return (
    <Box sx={{ width: 273, height: 55, borderRadius: "10px", mb: "20px" }}>
      <Button
        type={type}
        variant="contained"
        sx={{ width: "100%", height: "100%", bgcolor: "#9747FF" }}
      >
        <Typography>Save</Typography>
      </Button>
    </Box>
  );
};
export default SaveButton;
