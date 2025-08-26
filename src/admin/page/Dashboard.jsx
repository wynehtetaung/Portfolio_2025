import { Box, Typography } from "@mui/material";
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
  const {
    logoBlack,
    logoWhite,
    description,
    linkedInLink,
    facebookLink,
    instagramLink,
  } = useSelector((state) => state.dashboard);
  return (
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
          {/* description  */}
          <DescriptionBox title={`Description:`} setDes={setDescription} />
          {/* icon links  */}
          <Box>
            <Typography sx={{ color: "#676767" }}>Icon Links:</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "29px",
                mt: "13px",
              }}
            >
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
  );
};
export default Dashboard;
