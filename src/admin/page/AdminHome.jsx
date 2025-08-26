import { Box, Input, Typography } from "@mui/material";
import ImageUpload from "../components/ImageUpload";
import DescriptionBox from "../components/DescriptionBox";
import MultiImageUploadBox from "../components/testimage";
import InputBox from "../components/InputBox";
import SaveButton from "../components/SaveButton";

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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "35px" }}>
          <Box>
            <Typography
              sx={{ fontSize: 16, fontWeight: 500, color: "#000000" }}
            >
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
                          sx={{ p: "14px", color: "#3e3e3e" }}
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
                          sx={{ p: "14px", color: "#3e3e3e" }}
                          placeholder="Title..."
                        />
                      </Box>
                    </Box>
                    <InputBox
                      type={"text"}
                      color={"#F56969"}
                      placeholder={"Important words..."}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: 302, mt: "15px" }}>
                <DescriptionBox title={`Description`} />
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
                  />
                </Box>
                <Box sx={{ mb: "23px" }}>
                  <InputBox
                    type={"text"}
                    color={"#F56969"}
                    placeholder={"Important words..."}
                  />
                </Box>
                <Box sx={{ mb: "45px" }}>
                  <InputBox
                    type={"text"}
                    color={"#3e3e3e"}
                    placeholder={"Add description"}
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 302,
                }}
              >
                <Typography sx={{ color: "#676767" }}>
                  Collaboration Slider:
                </Typography>
                <Typography sx={{ color: "#676767" }}>Max 12</Typography>
              </Box>
              <ImageUpload />
              <Box sx={{ display: "flex", justifyContent: "end", mt: "10px" }}>
                <Typography sx={{ color: "#676767" }}>0/12</Typography>
              </Box>
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
          <DescriptionBox title={"Description:"} />
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
          <DescriptionBox title={"Description:"} />
        </Box>
        <Box sx={{ mt: "35px", display: "flex", gap: "30px" }}>
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
              <ImageUpload title={"Service 1 Image:"} />
            </Box>
          </Box>
          {/* service two  */}
          <Box>
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
          </Box>
          {/* service three  */}
          <Box>
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
          </Box>
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
                  Question 1:
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
              </Box>
            </Box>
          </Box>

          {/* questions 2 & 5 */}
          <Box sx={{ mt: "15px" }}>
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
          </Box>

          {/* questions 3 */}
          <Box sx={{ mt: "15px" }}>
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
          </Box>
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
