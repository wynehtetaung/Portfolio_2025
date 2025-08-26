import { Box, Button, Input, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import ImageUpload from "../components/ImageUpload";
import DescriptionBox from "../components/DescriptionBox";
import facebookIcon from "../icons/facebook.svg";
import linkedInIcon from "../icons/linkedIn.svg";
import instagramIcon from "../icons/instagram.svg";
import SaveButton from "../components/SaveButton";
import {
  setLogoBlack,
  setLogoWhite,
  setDescription,
  setLinkedInLink,
  setFacebookLink,
  setInstagramLink,
} from "../../features/dashboardSlice";
import { useSelector } from "react-redux";
import InputLink from "../components/InputLink";

const Dashboard = () => {
  const { key } = useParams();
  const {
    logoBlack,
    logoWhite,
    description,
    linkedInLink,
    facebookLink,
    instagramLink,
  } = useSelector((state) => state.dashboard);

  return key === import.meta.env.VITE_KEY ? (
    <Box
      sx={{
        bgcolor: "#eceef7",
        display: "flex",
        gap: "50px",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* navigation  */}
      <Box sx={{ position: "static" }}>
        <Nav />
      </Box>
      {/* Dashboard content  */}

      <Box
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("logoBlack", logoBlack);
          console.log("logoWhite", logoWhite);
          console.log("description", description);
          console.log("linkedInLink", linkedInLink);
          console.log("facebookLink", facebookLink);
          console.log("instagramLink", instagramLink);
        }}
        sx={{ overflowY: "scroll", width: "100%" }}
      >
        {/* title  */}
        <Box sx={{ mt: "61px" }}>
          <Typography sx={{ fontSize: 24, fontWeight: 500, color: "#000000" }}>
            Dashboard
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
        {/* Navigation  */}
        <Box sx={{ mt: "48px" }}>
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#000000" }}>
            Navigation
          </Typography>
          <Box
            sx={{
              mt: "15px",
              width: 635,
              display: "flex",
              gap: "30px",
            }}
          >
            <ImageUpload
              title={`Logo 1:`}
              backgroundColor={`#ffffff`}
              setTempStore={setLogoBlack}
            />
            <ImageUpload
              title={`Logo 2:`}
              backgroundColor={`#e0dfdf91`}
              setTempStore={setLogoWhite}
            />
          </Box>
        </Box>

        <Box
          component={"div"}
          sx={{
            width: "100%",
            height: "1px",
            bgcolor: "#D7D7D7",
            mt: "45px",
          }}
        />

        {/* footer  */}
        <Box sx={{ mt: "48px" }}>
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#000000" }}>
            Footer
          </Typography>
          <Box
            sx={{
              mt: "15px",
              width: 635,
              display: "flex",
              gap: "30px",
            }}
          >
            <DescriptionBox title={`Description:`} setDes={setDescription} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "29px" }}>
              {[linkedInIcon, facebookIcon, instagramIcon].map(
                (icon, index) => (
                  <InputLink
                    key={index}
                    icon={icon}
                    setInput={
                      index === 0
                        ? setLinkedInLink
                        : index === 1
                        ? setFacebookLink
                        : index === 2
                        ? setInstagramLink
                        : null
                    }
                  />
                )
              )}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            mt: "80px",
            width: "90%",
            mb: "148px",
          }}
        >
          <SaveButton type={"submit"} />
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography sx={{ fontSize: 20 }}>Page Not Found</Typography>
      <Typography sx={{ fontSize: 18, color: "red" }}>
        Check Your Key
      </Typography>
    </Box>
  );
};
export default Dashboard;
