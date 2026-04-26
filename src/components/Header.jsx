import { Box, Typography } from "@mui/material";
import { FadeUpIn } from "./ScrollAnimations";
import ScrollIndicator from "./ScrollIndicator";
import HEADERBACKGROUND from "../assets/headerbackground.jpg";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        aspectRatio: "1625 / 2481",
        width: "100%",
        // backgroundImage: `url('/src/assets/headerbackground.jpg')`,
        backgroundImage: `url(${HEADERBACKGROUND})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        px: { xs: "1rem", md: "2rem" },
        boxSizing: "border-box",
        margin: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <FadeUpIn delay={1}>
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Mea Culpa", cursive',
              fontSize: "5rem",
              color: "white",
              marginRight: "30px",
            }}
          >
            Valentina
          </Typography>
        </FadeUpIn>
        <FadeUpIn delay={1}>
          <Typography
            sx={{
              fontFamily: '"EB Garamond", serif',
              fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.2rem" },
              color: "white",
              marginTop: "-1.3rem",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            Mis 15 Años
          </Typography>
        </FadeUpIn>
      </Box>
      <ScrollIndicator />
    </Box>
  );
}
