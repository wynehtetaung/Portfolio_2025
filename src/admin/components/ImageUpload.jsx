import { Box, Typography } from "@mui/material";
import UploadImageIcon from "../icons/upload_image.svg";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const ImageUpload = ({ title, setTempStore, backgroundColor }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      dispatch(setTempStore(file.name));
    }
  };
  return (
    <Box>
      <Typography sx={{ color: "#676767" }}>{title}</Typography>
      <Box
        sx={{
          width: 302,
          height: 141,
          bgcolor: backgroundColor,
          border: "2px dashed #9747FF",
          borderRadius: "10px",
          mt: "13px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          userSelect: "none",
          px: "20px",
          py: "90px",

          "&:hover": { backgroundColor: "#f3e8ff" },
        }}
        onClick={() => inputRef.current.click()}
      >
        {preview ? (
          <Box
            component={"img"}
            sx={{
              maxWidth: "100%",
              minHight: "100%",
              objectFit: "cover",
            }}
            src={preview}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: "8px",
            }}
          >
            <Box
              component={"img"}
              src={UploadImageIcon}
              sx={{ width: 24, height: 24 }}
            />
            <Typography sx={{ fontSize: 14, color: "#9747FF" }}>
              Upload image
            </Typography>
          </Box>
        )}

        <Box
          component={"input"}
          type="file"
          accept="image/*"
          sx={{ display: "none" }}
          ref={inputRef}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};
export default ImageUpload;
