import { useRef, useState } from "react";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";

export default function MultiImageUploadBox({ setTemp }) {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [check, setCheck] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9), // unique id
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...previews]);
  };

  const handleRemove = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleSave = () => {
    if (images.length > 0) {
      const image = images.map((img) => img.url);
      dispatch(setTemp(image));
      setCheck(true);
      setErrorMsg(null);
    } else {
      setErrorMsg("required!");
    }
  };
  return (
    <Box>
      <Box
        sx={{
          border: "2px dashed #9c4dff",
          borderRadius: "12px",
          maxWidth: 650,
          minHeight: "180px",
          p: 2,
          cursor: "pointer",
          backgroundColor: "#fafafa",
          "&:hover": { backgroundColor: "#f3e8ff" },
        }}
        onClick={handleClick}
      >
        {images.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <ImageIcon sx={{ fontSize: 40, color: "#9c4dff" }} />
            <Typography sx={{ mt: 1, color: "#9c4dff", fontWeight: 500 }}>
              Upload images
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={2}>
            {images.map((img) => (
              <Grid key={img.id}>
                <Box
                  sx={{
                    position: "relative",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={img.url}
                    alt="preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {/* Remove Button */}
                  <IconButton
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 5,
                      right: 5,
                      bgcolor: "rgba(0,0,0,0.5)",
                      color: "white",
                      "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent box click
                      handleRemove(img.id);
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}

        {/* hidden file input */}
        <input
          type="file"
          multiple
          accept="image/*"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", mt: "10px" }}>
        <Typography sx={{ color: "#676767" }}>{images.length}/12</Typography>
      </Box>
      {errorMsg && (
        <Typography sx={{ color: "#f56969", fontSize: 14 }}>
          {errorMsg}
        </Typography>
      )}
      <Button
        onClick={handleSave}
        variant="text"
        sx={
          check
            ? { color: "#1af313ff", bgcolor: "#9747ff", mt: "20px", mb: "30px" }
            : { color: "#9747ff", mt: "20px", mb: "30px" }
        }
      >
        save
      </Button>
    </Box>
  );
}
