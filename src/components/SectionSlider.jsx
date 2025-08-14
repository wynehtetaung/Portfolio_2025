import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";

const SectionSlider = ({ slideData }) => {
  return (
    <Marquee pauseOnHover={slideData.action.pause} play={slideData.action.play}>
      <Box sx={{ display: "flex", overflow: "hidden" }}>
        {slideData.image.map((data, i) => (
          <Box
            key={i}
            sx={
              slideData.action.hover && {
                ":hover": {
                  transform: "scale(1.3)",
                },
              }
            }
          >
            <img
              width={slideData.width}
              height={slideData.height}
              src={data}
              style={{ marginLeft: slideData.marginLeft }}
            />
          </Box>
        ))}
      </Box>
    </Marquee>
  );
};
export default SectionSlider;
