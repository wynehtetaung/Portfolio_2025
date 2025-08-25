import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";

export default function DragDropUpload() {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  const handleRemove = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <Box>
      {/* Upload Area */}
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed #9c4dff",
          borderRadius: "12px",
          p: 4,
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: isDragActive ? "#f3e8ff" : "#fafafa",
          "&:hover": { backgroundColor: "#f3e8ff" },
        }}
      >
        <input {...getInputProps()} />
        <ImageIcon sx={{ fontSize: 40, color: "#9c4dff" }} />
        <Typography sx={{ mt: 1, color: "#9c4dff", fontWeight: 500 }}>
          {isDragActive
            ? "Drop images here..."
            : "Drag & drop images or click to upload"}
        </Typography>
      </Box>

      {/* Preview */}
      {images.length > 0 && (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {images.map((img) => (
            <Grid item xs={6} sm={4} md={3} key={img.id}>
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
                    e.stopPropagation();
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
    </Box>
  );
}
