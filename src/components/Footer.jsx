import { Box, Typography } from "@mui/material";
import { FadeUpIn } from "./ScrollAnimations";
import FOOTERBACKGROUND from "../assets/footerbackground.jpg";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        aspectRatio: "1625 / 1366",
        width: "100%",
        backgroundImage: `url(${FOOTERBACKGROUND})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        px: { xs: "1rem", md: "2rem" },
        boxSizing: "border-box",
        margin: 0,
      }}
    >
      <FadeUpIn>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "65%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontFamily: '"Mea Culpa", cursive',
            color: "white",
            fontSize: "3rem",
            mt: 2,
          }}
        >
          ¡Te espero!
        </Typography>
      </FadeUpIn>
    </Box>
  );
}
