import { Typography, Box } from "@mui/material";
import DescriptionBox from "../components/DescriptionBox";
import ImageUpload from "../components/ImageUpload";

const AdminAbout = () => {
  return (
    <Box>
      {/* title  */}
      <Box sx={{ mt: "61px" }}>
        <Typography sx={{ fontSize: 24, fontWeight: 500, color: "#000000" }}>
          About
        </Typography>
        <Box
          component={"div"}
          sx={{
            width: 93,
            height: 3,
            bgcolor: "#9747FF",
            borderRadius: 100,
          }}
        />
        <Box
          component={"div"}
          sx={{
            width: 42,
            height: 3,
            bgcolor: "#9747FF",
            borderRadius: 100,
            mt: "3px",
          }}
        />
      </Box>

      {/* about me  */}

      <Box sx={{ mt: "48px", mb: "60px" }}>
        <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#000000" }}>
          About Me
        </Typography>
        <Box sx={{ mt: "15px", display: "flex", gap: "30px" }}>
          <DescriptionBox title={"Description:"} />
          <DescriptionBox title={"About yourself:"} />
          <ImageUpload
            title={`About Image`}
            backgroundColor={`#ffffff`}
            setTempStore={() => {}}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default AdminAbout;
