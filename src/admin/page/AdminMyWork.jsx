import { Box, Typography } from "@mui/material";
import DescriptionBox from "../components/DescriptionBox";

const AdminMyWork = () => {
  return (
    <Box
      component={"form"}
      onSubmit={async (e) => {
        e.preventDefault();
      }}
      sx={{ overflowY: "scroll", width: "100%" }}
    >
      {/* title  */}
      <Box sx={{ mt: "61px" }}>
        <Typography sx={{ fontSize: 24, fontWeight: 500, color: "#000000" }}>
          My Works
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

      {/* checkout my project  */}
      <Box sx={{ mt: "48px", mb: "60px" }}>
        <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#000000" }}>
          Checkout my projects
        </Typography>
        <Box sx={{ mt: "15px" }}>
          <DescriptionBox title={"Description:"} />
        </Box>
      </Box>

      {/* Divider  */}
      <Box
        component={"div"}
        sx={{ width: "90%", height: "1px", bgcolor: "#d7d7d7", mb: "45px" }}
      />

      {/* Create Categories Btn  */}
      <Box sx={{ mt: "48px", mb: "60px" }}>
        <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#000000" }}>
          Create Categories Btn
        </Typography>
      </Box>
    </Box>
  );
};
export default AdminMyWork;
