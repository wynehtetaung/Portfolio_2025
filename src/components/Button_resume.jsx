import { Typography, Button, Box } from "@mui/material";
import upArrow from "../assets/images/arrow-up-right.png";
import { resume } from "../store/resume.store";

const ButtonResume = () => {
  return (
    <Box component={"a"} href={resume.file} download={resume.name}>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#ff0b55",
          width: "290px",
          height: "66px",
          borderRadius: "50px",
        }}
      >
        <Typography>DOWNLOAD RESUME</Typography>
        <img src={upArrow} width={24} height={24} />
      </Button>
    </Box>
  );
};
export default ButtonResume;
