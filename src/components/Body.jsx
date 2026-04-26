import { Box, Grid } from "@mui/material";
import MusicPlayerWidget from "./Body/MusicPlayerWidget";
import CardInfoDay from "./Body/CardInfoDay";
import CountdownTimer from "./Body/CountdownTimer";
import UbicacionSection from "./Body/UbicacionSection";
import DressCodeSection from "./Body/DressCodeSection";
import RegaloSection from "./Body/RegaloSection";
import PlaylistSection from "./Body/PlayListSection";
import ConfirmacionSection from "./Body/ConfirmacionSection";
import { FadeUpIn, ZoomIn, BlurIn } from "./ScrollAnimations";
import BODYBACKGROUND from "../assets/bodybackground.jpg";

export default function Body() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: "3rem", md: "4rem" },
        width: "100%",
        backgroundImage: `url(${BODYBACKGROUND})`,
        backgroundSize: "100% auto",
        backgroundPosition: "center center",
        padding: { xs: "2rem 1rem", md: "4rem 2rem" },
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: 0,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "600px",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <BlurIn delay={0.1}>
            <MusicPlayerWidget />
          </BlurIn>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ZoomIn delay={0.2}>
            <CardInfoDay />
          </ZoomIn>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <FadeUpIn delay={0.3}>
            <CountdownTimer />
          </FadeUpIn>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <FadeUpIn delay={0.4}>
            <UbicacionSection />
          </FadeUpIn>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ZoomIn delay={0.5}>
            <DressCodeSection />
          </ZoomIn>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <FadeUpIn delay={0.6}>
            <RegaloSection />
          </FadeUpIn>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <FadeUpIn delay={0.8}>
            <ConfirmacionSection />
          </FadeUpIn>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <BlurIn delay={0.7}>
            <PlaylistSection />
          </BlurIn>
        </Grid>
      </Grid>
    </Box>
  );
}
