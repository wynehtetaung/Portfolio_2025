import { useRef, useState } from "react";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";

export default function MultiImageUploadBox({ setTemp }) {
  const inputRef = useRef(null);
  const [images, setImages] = useState([]);

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
            {images.map((img, i) => (
              <Grid item xs={6} sm={4} md={3} key={img.id}>
                <Box
                  key={i}
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
      <Button
        onClick={() => setTemp(images)}
        variant="text"
        sx={{ mt: "20px", mb: "30px" }}
      >
        save
      </Button>
    </Box>
  );
}
