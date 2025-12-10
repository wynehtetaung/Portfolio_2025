import { Box, Button, IconButton, Typography } from "@mui/material";
import DescriptionBox from "../components/DescriptionBox";
import InputBox from "../components/InputBox";
import { Plus } from "lucide-react";
import ImageUpload from "../components/ImageUpload";
import { useState } from "react";

const AdminMyWork = () => {
  const [appImage, setAppImage] = useState(null);
  const [webImage, setWebImage] = useState(null);

  console.log(appImage, webImage);
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
        <Typography sx={{ fontSize: 14, color: "#676767", mt: "15px" }}>
          Section Btn Name:
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: 400,
            justifyContent: "center",
          }}
        >
          <InputBox
            type={"text"}
            color={"#000000"}
            placeholder={"APPLICATION"}
            setTemp={() => {}}
          />
          <Box
            sx={{
              width: 59,
              height: 59,
              bgcolor: "#9747FF",
              mt: "15px",
              borderRadius: "10px",
            }}
          >
            <IconButton
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Plus color="#ffffff" />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Divider  */}
      <Box
        component={"div"}
        sx={{ width: "90%", height: "1px", bgcolor: "#d7d7d7", mb: "45px" }}
      />

      {/* application section  */}

      <Box sx={{ mt: "48px", mb: "60px" }}>
        <Typography
          sx={{ fontSize: 16, fontWeight: 500, color: "#000000", mb: "15px" }}
        >
          APPLICATION
        </Typography>
        <ImageUpload
          title={`Project Image`}
          backgroundColor={`#ffffff`}
          setTempStore={setAppImage}
        />
        <Button variant="text" sx={{ mt: "10px" }}>
          Click Me
        </Button>
      </Box>

      {/* Divider  */}
      <Box
        component={"div"}
        sx={{ width: "90%", height: "1px", bgcolor: "#d7d7d7", mb: "45px" }}
      />

      {/* website section  */}

      <Box sx={{ mt: "48px", mb: "60px" }}>
        <Typography
          sx={{ fontSize: 16, fontWeight: 500, color: "#000000", mb: "15px" }}
        >
          Website
        </Typography>
        <ImageUpload
          title={`Project Image`}
          backgroundColor={`#ffffff`}
          setTempStore={setWebImage}
        />
        <Button variant="text" sx={{ mt: "10px" }}>
          Click Me
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "end", mb: "20px", pr: "20px" }}
      >
        <Button
          variant="contained"
          sx={{ width: "273px", height: "55px", bgcolor: "#9747FF" }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};
export default AdminMyWork;
