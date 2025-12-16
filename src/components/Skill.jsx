import { Box, Typography } from "@mui/material";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Skill = ({ skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, skill.skill, {
        duration: 1.2,
        ease: "easeOut",
      });
      return () => controls.stop();
    } else {
      count.set(0);
    }
  }, [isInView, count, skill.skill]);

  return (
    <Box ref={ref} sx={{ mb: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          mb: "8px",
        }}
      >
        <Typography sx={{ fontSize: 16, color: "#000000" }}>
          {skill.title}
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Typography
            component={motion.span}
            sx={{ color: "#ff0b55", fontSize: 16 }}
          >
            {rounded}
          </Typography>
          <Box sx={{ color: "#ff0b55", fontSize: 16 }}>%</Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "10px",
          bgcolor: "#eeeeee",
          borderRadius: "50px",
        }}
      >
        <Box
          component={motion.div}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.skill}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          sx={{
            height: "10px",
            bgcolor: "#ff0b55",
            borderRadius: "50px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Skill;
