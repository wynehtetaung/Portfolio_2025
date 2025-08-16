import { Typography, Button } from "@mui/material";
import upArrow from "../assets/images/arrow-up-right.png";

const ButtonResume = () => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#ff0b55",
        width: "237px",
        height: "66px",
        borderRadius: "50px",
        mt: "87px",
        mb: "70px",
      }}
    >
      <Typography>DOWNLOAD RESUME</Typography>
      <img src={upArrow} width={24} height={24} />
    </Button>
  );
};
export default ButtonResume;
