/* eslint-disable no-unused-vars */
import { Box, Container, Typography } from "@mui/material";
import LOGO from "../assets/images/Freddie....png";
import LOGO_BLACK from "../assets/images/Freddie... _black.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { sub, id } = useParams();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    latest > previous && latest > 160 ? setHidden(true) : setHidden(false);
  });
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        position: "sticky",
        top: 0,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textTransform: "uppercase",
          color: "#bababa",
          fontSize: 16,
          py: "35px",
          cursor: "pointer",
        }}
      >
        <img
          width={111}
          height={29}
          srcSet={`${pathname === "/" ? LOGO : LOGO_BLACK} `}
        />
        <Box
          sx={{
            display: "flex",
            gap: 10,
            textTransform: "uppercase",
          }}
        >
          <Typography
            onClick={() => navigate("/")}
            sx={
              pathname === "/"
                ? {
                    position: "relative",
                    color: "#FF0B55",
                    ":before": {
                      content: '""',
                      position: "absolute",
                      width: 8,
                      height: 8,
                      bgcolor: "#FF0B55",
                      borderRadius: "50%",
                      bottom: "-8px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    },
                  }
                : {
                    ":hover": {
                      color: "#FF0B55",
                    },
                  }
            }
          >
            home
          </Typography>

          <Typography
            onClick={() => navigate("/my-work/app")}
            sx={
              pathname === `/my-work/${sub}` ||
              pathname === `/my-work/${sub}/${id}`
                ? {
                    position: "relative",
                    color: "#FF0B55",
                    ":before": {
                      content: '""',
                      position: "absolute",
                      width: 8,
                      height: 8,
                      bgcolor: "#FF0B55",
                      borderRadius: "50%",
                      bottom: "-8px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    },
                  }
                : {
                    "&:hover": {
                      color: "#FF0B55",
                    },
                  }
            }
          >
            my works
          </Typography>
          <Typography
            onClick={() => navigate("/about")}
            sx={
              pathname === "/about"
                ? {
                    position: "relative",
                    color: "#FF0B55",
                    ":before": {
                      content: '""',
                      position: "absolute",
                      width: 8,
                      height: 8,
                      bgcolor: "#FF0B55",
                      borderRadius: "50%",
                      bottom: "-8px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    },
                  }
                : {
                    "&:hover": {
                      color: "#FF0B55",
                    },
                  }
            }
          >
            about
          </Typography>
        </Box>
        <a
          href="#contactMe"
          style={{ outline: "none", textDecoration: "none", color: "#bababa" }}
        >
          <Typography
            sx={{
              "&:hover": {
                color: "#FF0B55",
              },
            }}
          >
            contact
          </Typography>
        </a>
      </Container>
    </motion.nav>
  );
};
export default Nav;
