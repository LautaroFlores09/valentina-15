import { Box, Typography, Grid, Divider } from "@mui/material";
import fondoFecha from "../../assets/fondo-fecha-frase.png";

export default function CardInfoDay() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minWidth: 285,
      }}
    >
      <Box
        component="img"
        src={fondoFecha}
        alt="Fondo Fecha y Frase"
        sx={{
          display: "block",
          width: "100vw",
          height: "auto",
          marginLeft: "calc(-50vw + 50%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Contenedor Principal con 3 Columnas */}
        <Grid
          container
          spacing={3}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          width="100%"
        >
          {/* Columna 1: Sábado */}
          <Grid item md={12} xs={12} sm={12} sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: '"EB Garamond", serif',
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                color: "#012e4f ",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              Sábado
            </Typography>
          </Grid>

          {/* Columna 2: Mes y Día */}
          <Grid item md={12} xs={12} sm={12} sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: '"EB Garamond", serif',
                fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                color: "#012e4f",
                fontWeight: 400,
                letterSpacing: "0.02em",
                mb: -0.5,
              }}
            >
              Mayo
            </Typography>
            <Typography
              sx={{
                fontFamily: '"EB Garamond", serif',
                fontSize: { xs: "3rem", sm: "3.5rem", md: "4rem" },
                color: "#012e4f",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              30
            </Typography>
          </Grid>

          {/* Columna 3: Hora */}
          <Grid item md={12} xs={12} sm={12} sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: '"EB Garamond", serif',
                fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                color: "#012e4f ",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              9:30PM
            </Typography>
          </Grid>
        </Grid>
        {/* Texto Superior */}
        <Divider sx={{ width: "80%", borderColor: "#012e4f", my: 2 }} />
        <Box sx={{ textAlign: "center", mt: 2.5 }}>
          <Typography
            sx={{
              fontFamily: '"EB Garamond", serif',
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              color: "#012e4f ",
              fontWeight: "bold",
              letterSpacing: "0.02em",
              lineHeight: 1.4,
            }}
          >
            Hay momentos inolvidables que se atesoran en el corazón para siempre
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
