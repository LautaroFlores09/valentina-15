import { Box, Typography, Stack, keyframes } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CustomButton from "../CustomButton";

// Asumiendo que ya tienes el PNG de la brújula
import BrujulaImg from "../../assets/brujula.png";
import SalonImg from "../../assets/salon.png";

const UbicacionSection = () => {
  const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          py: 1,
          px: 2,
          maxWidth: 280,
          mx: "auto",
        }}
      >
        {/* Imagen de la Brújula (PNG de 100x100) */}
        <Box
          component="img"
          src={BrujulaImg}
          alt="Cargando invitación..."
          sx={{
            width: 100,
            height: 100,
            // Aquí la imagen gira sobre su propio eje
            animation: `${rotate} 6s linear infinite`,
          }}
        />
        {/* Título de la sección */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Mea Culpa", cursive',
            color: "#012e4f ",
            fontSize: "4rem",
          }}
        >
          ¿Dónde?
        </Typography>
      </Box>

      {/* Imagen del Salón - Full Width */}
      <Box
        component="img"
        src={SalonImg}
        alt="Salón El Molino"
        sx={{
          display: "block",
          width: "100vw",
          height: "auto",
          marginLeft: "calc(-50vw + 50%)",
          mt: 3,
        }}
      />

      <Box
        sx={{
          textAlign: "center",
          py: 1,
          px: 2,
          maxWidth: 280,
          mx: "auto",
        }}
      >
        {/* Detalles del Salón */}
        <Stack spacing={0.5} sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"EB Garamond", serif',
              color: "#012e4f ",
              fontWeight: "bold",
            }}
          >
            Salón El Molino
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"EB Garamond", serif',
              fontSize: "1rem",
              color: "#012e4f ",
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            Calle 137 N° 2524{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"EB Garamond", serif',
              fontSize: "1rem",
              color: "#012e4f ",
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            entre 24 y 25 Berazategui, 1884
          </Typography>
        </Stack>

        {/* Botón de "Cómo llegar" */}
        <CustomButton
          label="Cómo llegar"
          icon={<LocationOnIcon />}
          href="https://www.google.com/maps/search/?api=1&query=El+Molino+Eventos+Berazategui"
        />
      </Box>
    </Box>
  );
};

export default UbicacionSection;
