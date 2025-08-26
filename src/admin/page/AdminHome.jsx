import { Box, Input, Typography } from "@mui/material";
import ImageUpload from "../components/ImageUpload";
import DescriptionBox from "../components/DescriptionBox";
import MultiImageUploadBox from "../components/testimage";

const AdminHome = () => {
  return (
    <Box
      component={"form"}
      onSubmit={(e) => {
        e.preventDefault();
      }}
      sx={{ overflowY: "scroll", width: "100%" }}
    >
      {/* title  */}
      <Box sx={{ mt: "61px" }}>
        <Typography sx={{ fontSize: 24, fontWeight: 500, color: "#000000" }}>
          Home
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

      {/* hero section  */}
      <Box sx={{ mt: "48px" }}>
        <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#000000" }}>
          Hero Section
        </Typography>
        <Box sx={{ display: "flex", gap: "30px" }}>
          <Box sx={{ width: 302, height: 141, mt: "15px" }}>
            <ImageUpload title={`Hero Image`} backgroundColor={`#ffffff`} />
          </Box>
          <Box sx={{ width: 302 }}>
            <Box sx={{ mt: "15px" }}>
              <Typography sx={{ color: "#676767" }}>Hero Title</Typography>
              <Box
                sx={{
                  mt: "13px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "23px",
                }}
              >
                <Box sx={{ display: "flex", gap: "16px" }}>
                  <Box
                    sx={{
                      width: 143,
                      height: 59,
                      border: "2px solid #9747ff",
                      borderRadius: "10px",
                    }}
                  >
                    <Input
                      type="text"
                      disableUnderline
                      sx={{ p: "14px" }}
                      placeholder="Title..."
                    />
                  </Box>
                  <Box
                    sx={{
                      width: 143,
                      height: 59,
                      border: "2px solid #9747ff",
                      borderRadius: "10px",
                    }}
                  >
                    <Input
                      type="text"
                      disableUnderline
                      sx={{ p: "14px" }}
                      placeholder="Title..."
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: 59,
                    border: "2px solid #9747ff",
                    borderRadius: "10px",
                  }}
                >
                  <Input
                    disableUnderline
                    type="text"
                    sx={{ p: "14px", color: "#F56969" }}
                    placeholder="Important words..."
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: 302, mt: "15px" }}>
            <DescriptionBox title={`Description`} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: 302, height: 141, mt: "50px" }}>
        <MultiImageUploadBox />
      </Box>
    </Box>
  );
};
export default AdminHome;
