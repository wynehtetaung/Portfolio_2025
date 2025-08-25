import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import LOGO from "../assets/images/Freddie....png";
import LOGO_BLACK from "../assets/images/Freddie... _black.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import AppNav from "./AppNav";
const Nav = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { sub, id } = useParams();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [checkBlur, setCheckBlur] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    latest > previous && latest > 160 ? setHidden(true) : setHidden(false);
    latest > 0 ? setCheckBlur(true) : setCheckBlur(false);
  });
  return isMobile ? (
    <AppNav />
  ) : (
    <Box
      component={motion.div}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        position: "sticky",
        top: 0,
        backdropFilter: checkBlur && "blur(5px) brightness(0.5)",
        zIndex: 3,
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
        <Box
          component={"img"}
          width={111}
          height={29}
          src={`${
            pathname === "/" || pathname === "/contact" ? LOGO : LOGO_BLACK
          } `}
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
                    fontWeight: 600,
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
                    fontWeight: 600,
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
                    fontWeight: 600,
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
        <Typography
          onClick={() => navigate("/contact")}
          sx={{
            "&:hover": {
              color: "#FF0B55",
            },
          }}
        >
          contact
        </Typography>
        {/* </a> */}
      </Container>
    </Box>
  );
};
export default Nav;
