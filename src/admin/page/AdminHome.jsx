import { Box, Button, Input, Typography } from "@mui/material";
import ImageUpload from "../components/ImageUpload";
import DescriptionBox from "../components/DescriptionBox";
import InputBox from "../components/InputBox";
import SaveButton from "../components/SaveButton";
import { useState } from "react";
import {
  setHeroTitle,
  setDescription,
  setCheckOutDescription,
  setServiceDescription,
  setFunFact,
  setHeroImage,
  setServices,
  setQa,
  setSliderImages,
} from "../../features/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import MultiImageUploadBox from "../components/MultiImageUploadBox";

const AdminHome = () => {
  const dispatch = useDispatch();
  const {
    heroImage,
    heroTitle,
    description,
    funFact,
    sliderImages,
    checkOutDescription,
    serviceDescription,
    services,
    qa,
  } = useSelector((state) => state.home);
  const [heroFirst, setHeroFirst] = useState(null);
  const [heroMiddle, setHeroMiddle] = useState(null);
  const [heroLast, setHeroLast] = useState(null);
  const [heroError, setHeroError] = useState(null);
  const [heroCheck, setHeroCheck] = useState(false);
  const [funFirst, setFunFirst] = useState(null);
  const [funMiddle, setFunMiddle] = useState(null);
  const [funLast, setFunLast] = useState(null);
  const [funError, setFunError] = useState(null);
  const [funCheck, setFunCheck] = useState(false);
  const [serviceNum, setServiceNum] = useState(null);
  const [serviceTitle, setServiceTitle] = useState(null);
  const [serviceDesc, setServiceDesc] = useState(null);
  const [serviceImg, setServiceImg] = useState(null);
  const [serviceCheck, setServiceCheck] = useState(false);
  const [serviceError, setServiceError] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [qaError, setQaError] = useState(null);
  const [qaCheck, setQaCheck] = useState(false);
  return (
    <Box
      component={"form"}
      onSubmit={async (e) => {
        e.preventDefault();

        console.log("heroImage :", heroImage);
        console.log("heroTitle :", heroTitle);
        console.log("description :", description);
        console.log("funFact :", funFact);
        console.log("sliderImages", sliderImages);
        console.log("checkOutDescription :", checkOutDescription);
        console.log("serviceDescription :", serviceDescription);
        console.log("services :", services);
        console.log("q&a :", qa);
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "35px" }}>
          <Box>
            <Typography
              sx={{ fontSize: 16, fontWeight: 500, color: "#000000" }}
            >
              Hero Section
            </Typography>
            <Box sx={{ display: "flex", gap: "30px" }}>
              <Box sx={{ width: 302, height: 141, mt: "15px" }}>
                <ImageUpload
                  title={`Hero Image`}
                  backgroundColor={`#ffffff`}
                  setTempStore={setHeroImage}
                />
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
                          sx={{ p: "14px", color: "#3e3e3e" }}
                          placeholder="Title..."
                          onChange={(e) => setHeroFirst(e.target.value)}
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
                          sx={{ p: "14px", color: "#3e3e3e" }}
                          placeholder="Title..."
                          onChange={(e) => setHeroLast(e.target.value)}
                        />
                      </Box>
                    </Box>
                    <InputBox
                      type={"text"}
                      color={"#F56969"}
                      placeholder={"Important words..."}
                      setTemp={setHeroMiddle}
                    />
                    {heroError && (
                      <Typography sx={{ color: "#f56969", fontSize: 14 }}>
                        {heroError}
                      </Typography>
                    )}
                    <Button
                      onClick={() => {
                        if (heroFirst && heroMiddle && heroLast) {
                          dispatch(
                            setHeroTitle({
                              first: heroFirst,
                              middle: heroMiddle,
                              last: heroLast,
                            })
                          );
                          setHeroError(null);
                          setHeroCheck(true);
                        } else {
                          setHeroError("required!");
                        }
                      }}
                      variant="text"
                      sx={
                        heroCheck
                          ? { color: "#1af313ff", bgcolor: "#9747ff" }
                          : { color: "#9747ff" }
                      }
                    >
                      save
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: 302, mt: "15px" }}>
                <DescriptionBox title={`Description`} setDes={setDescription} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: "35px", display: "flex", gap: "30px" }}>
            <Box>
              <Typography sx={{ color: "#676767" }}>Fan Fact:</Typography>

              <Box
                sx={{ display: "flex", flexDirection: "column", width: 302 }}
              >
                <Box sx={{ mb: "23px" }}>
                  <InputBox
                    type={"text"}
                    color={"#3e3e3e"}
                    placeholder={"Add description"}
                    setTemp={setFunFirst}
                  />
                </Box>
                <Box sx={{ mb: "23px" }}>
                  <InputBox
                    type={"text"}
                    color={"#F56969"}
                    placeholder={"Important words..."}
                    setTemp={setFunMiddle}
                  />
                </Box>
                <Box sx={{ mb: "10px" }}>
                  <InputBox
                    type={"text"}
                    color={"#3e3e3e"}
                    placeholder={"Add description"}
                    setTemp={setFunLast}
                  />
                </Box>
                {funError && (
                  <Typography sx={{ color: "#f56969", fontSize: 14 }}>
                    {funError}
                  </Typography>
                )}
                <Button
                  onClick={() => {
                    if (funFirst && funMiddle && funLast) {
                      dispatch(
                        setFunFact({
                          first: funFirst,
                          middle: funMiddle,
                          last: funLast,
                        })
                      );
                      setFunError(null);
                      setFunCheck(true);
                    } else {
                      setFunError("required!");
                    }
                  }}
                  variant="text"
                  sx={
                    funCheck
                      ? { color: "#1af313ff", bgcolor: "#9747ff", mb: "45px" }
                      : { color: "#9747ff", mb: "45px" }
                  }
                >
                  save
                </Button>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  minWidth: 302,
                  mb: "12px",
                }}
              >
                <Typography sx={{ color: "#676767" }}>
                  Collaboration Slider:
                </Typography>
                <Typography sx={{ color: "#676767" }}>Max 12</Typography>
              </Box>
              <MultiImageUploadBox setTemp={setSliderImages} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Divider  */}
      <Box
        component={"div"}
        sx={{ width: "90%", height: "1px", bgcolor: "#d7d7d7", mb: "45px" }}
      />

      {/* checkout my project  */}
      <Box>
        <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#000000" }}>
          Checkout My Projects.
        </Typography>
        <Box sx={{ mt: "15px", mb: "45px" }}>
          <DescriptionBox
            title={"Description:"}
            setDes={setCheckOutDescription}
          />
        </Box>
      </Box>

      {/* Divider  */}
      <Box
        component={"div"}
        sx={{ width: "90%", height: "1px", bgcolor: "#d7d7d7", mb: "45px" }}
      />

      {/* Available services  */}
      <Box>
        <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#000000" }}>
          Available Services.
        </Typography>
        <Box sx={{ mt: "15px" }}>
          <DescriptionBox
            title={"Description:"}
            setDes={setServiceDescription}
          />
        </Box>
        <Box sx={{ mt: "35px", display: "flex", gap: "30px", mb: "30px" }}>
          {/* service one  */}
          <Box>
            <Typography sx={{ fontSize: 14, color: "#676767" }}>
              Service 1:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "23px" }}>
              <InputBox
                type={"text"}
                color={"#3e3e3e"}
                placeholder={"Number"}
                setTemp={setServiceNum}
              />
              <InputBox
                type={"text"}
                color={"#3e3e3e"}
                placeholder={"Service title..."}
                setTemp={setServiceTitle}
              />
              <InputBox
                type={"text"}
                color={"#3e3e3e"}
                placeholder={"Add description"}
                setTemp={setServiceDesc}
              />
            </Box>
            <Box sx={{ mt: "29px" }}>
              <ImageUpload
                title={"Image :"}
                backgroundColor={`#ffffff`}
                setTempStore={setServiceImg}
              />
            </Box>
            {services.length > 0 && (
              <Typography sx={{ color: "#676767", fontSize: 14, mt: "10px" }}>
                total services : {services.length}
              </Typography>
            )}
            {serviceError && (
              <Typography sx={{ color: "#f56969", fontSize: 14 }}>
                {serviceError}
              </Typography>
            )}
            <Box sx={{ mt: "20px" }}>
              <Button
                onClick={() => {
                  if (serviceNum && serviceTitle && serviceDesc && serviceImg) {
                    dispatch(
                      setServices({
                        number: serviceNum,
                        title: serviceTitle,
                        description: serviceDesc,
                        image: serviceImg,
                      })
                    );
                    setServiceCheck(true);
                    setServiceError(null);
                  } else {
                    setServiceError("required!");
                  }
                }}
                variant="text"
                sx={
                  serviceCheck
                    ? { color: "#1af313ff", bgcolor: "#9747ff", mb: "45px" }
                    : { color: "#9747ff", mb: "45px" }
                }
              >
                Add
              </Button>
            </Box>
          </Box>

          {/* service two  */}
          {/* <Box>
            <Typography sx={{ fontSize: 14, color: "#676767" }}>
              Service 2:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "23px" }}>
              <InputBox
                type={"text"}
                color={"#3e3e3e"}
                placeholder={"Number"}
              />
              <InputBox
                type={"text"}
                color={"#3e3e3e"}
                placeholder={"Service title..."}
              />
              <InputBox
                type={"text"}
                color={"#3e3e3e"}
                placeholder={"Add description"}
              />
            </Box>
            <Box sx={{ mt: "29px" }}>
              <ImageUpload title={"Service 2 Image:"} />
            </Box>
          </Box> */}
          {/* service three  */}
          {/* <Box>
            <Typography sx={{ fontSize: 14, color: "#676767" }}>
              Service 3:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "23px" }}>
              <InputBox
                type={"text"}
                color={"#3e3e3e"}
                placeholder={"Number"}
              />
              <InputBox
                type={"text"}
                color={"#3e3e3e"}
                placeholder={"Service title..."}
              />
              <InputBox
                type={"text"}
                color={"#3e3e3e"}
                placeholder={"Add description"}
              />
            </Box>
            <Box sx={{ mt: "29px", mb: "45px" }}>
              <ImageUpload title={"Service 3 Image:"} />
            </Box>
          </Box> */}
        </Box>
      </Box>

      {/* Divider  */}
      <Box
        component={"div"}
        sx={{ width: "90%", height: "1px", bgcolor: "#d7d7d7", mb: "45px" }}
      />

      {/* Got questions? I've got answers.  */}

      <Box>
        <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#000000" }}>
          Got questions? I've got answers.
        </Typography>
        <Box sx={{ display: "flex", gap: "30px" }}>
          {/* questions 1 & 4*/}
          <Box sx={{ mt: "15px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography sx={{ fontSize: 14, color: "#676767" }}>
                  Question :
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: 302,
                    flexDirection: "column",
                    gap: "23px",
                  }}
                >
                  <InputBox
                    type={"text"}
                    color={"#3e3e3e"}
                    placeholder={"Question..."}
                    setTemp={setQuestion}
                  />
                  <InputBox
                    type={"text"}
                    color={"#3e3e3e"}
                    placeholder={"Answer..."}
                    setTemp={setAnswer}
                  />
                  {qa.length > 0 && (
                    <Typography sx={{ color: "#676767", fontSize: 14 }}>
                      total Q&A : {qa.length}
                    </Typography>
                  )}
                  {qaError && (
                    <Typography sx={{ color: "#f56969", fontSize: 14 }}>
                      {qaError}
                    </Typography>
                  )}
                  <Button
                    onClick={() => {
                      if (question && answer) {
                        dispatch(
                          setQa({
                            question: question,
                            answer: answer,
                          })
                        );
                        setQaCheck(true);
                        setQaError(null);
                      } else {
                        setQaError("required!");
                      }
                    }}
                    variant="text"
                    sx={
                      qaCheck
                        ? { color: "#1af313ff", bgcolor: "#9747ff", mb: "45px" }
                        : { color: "#9747ff", mb: "45px" }
                    }
                  >
                    add
                  </Button>
                </Box>
              </Box>

              {/* <Box sx={{ mt: "29px" }}>
                <Typography sx={{ fontSize: 14, color: "#676767" }}>
                  Question 4:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: 302,
                    flexDirection: "column",
                    gap: "23px",
                  }}
                >
                  <InputBox
                    type={"text"}
                    color={"#3e3e3e"}
                    placeholder={"Question..."}
                  />
                  <InputBox
                    type={"text"}
                    color={"#3e3e3e"}
                    placeholder={"QAnswer..."}
                  />
                </Box>
              </Box> */}
            </Box>
          </Box>

          {/* questions 2 & 5 */}
          {/* <Box sx={{ mt: "15px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography sx={{ fontSize: 14, color: "#676767" }}>
                  Question 2:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: 302,
                    flexDirection: "column",
                    gap: "23px",
                  }}
                >
                  <InputBox
                    type={"text"}
                    color={"#3e3e3e"}
                    placeholder={"Question..."}
                  />
                  <InputBox
                    type={"text"}
                    color={"#3e3e3e"}
                    placeholder={"QAnswer..."}
                  />
                </Box>
              </Box>

              <Box sx={{ mt: "29px" }}>
                <Typography sx={{ fontSize: 14, color: "#676767" }}>
                  Question 5:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: 302,
                    flexDirection: "column",
                    gap: "23px",
                  }}
                >
                  <InputBox
                    type={"text"}
                    color={"#3e3e3e"}
                    placeholder={"Question..."}
                  />
                  <InputBox
                    type={"text"}
                    color={"#3e3e3e"}
                    placeholder={"QAnswer..."}
                  />
                </Box>
              </Box>
            </Box>
          </Box> */}

          {/* questions 3 */}
          {/* <Box sx={{ mt: "15px" }}>
            <Typography sx={{ fontSize: 14, color: "#676767" }}>
              Question 3:
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: 302,
                flexDirection: "column",
                gap: "23px",
              }}
            >
              <InputBox
                type={"text"}
                color={"#3e3e3e"}
                placeholder={"Question..."}
              />
              <InputBox
                type={"text"}
                color={"#3e3e3e"}
                placeholder={"QAnswer..."}
              />
            </Box>
          </Box> */}
        </Box>
      </Box>

      <Box
        sx={{ mt: "80px", display: "flex", justifyContent: "end", mr: "240px" }}
      >
        <SaveButton type={"submit"} />
      </Box>
    </Box>
  );
};
export default AdminHome;
