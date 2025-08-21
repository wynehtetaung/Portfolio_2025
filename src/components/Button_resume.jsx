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
        mt: { xl: "87px", lg: "87px", md: "87px", sm: "87px", xs: "20px" },
        mb: { xl: "70px", lg: "70px", md: "70px", sm: "20px", xs: "20px" },
      }}
    >
      <Typography>DOWNLOAD RESUME</Typography>
      <img src={upArrow} width={24} height={24} />
    </Button>
  );
};
export default ButtonResume;
