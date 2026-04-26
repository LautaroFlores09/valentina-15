import { Box, Typography } from "@mui/material";

// Importa el archivo del vestido
import VestidoImg from "../../assets/vestido.png";

const DressCodeSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 4,
        px: 2,
        maxWidth: 280,
      }}
    >
      {/* Ilustración del Vestido */}
      <Box
        component="img"
        src={VestidoImg}
        alt="Ilustración de vestido elegante"
        sx={{
          width: "auto",
          height: 180, // Ajuste para que luzca estilizado como en el diseño
          mb: 2,
          mx: "auto",
          // Opcional: filtro para asegurar que el tono azul combine perfectamente
          filter: "drop-shadow(0px 4px 4px rgba(164, 194, 214, 0.2))",
        }}
      />

      {/* Título Dress Code */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"EB Garamond", serif',
          color: "#012e4f ", // Azul oscuro para resaltar el título
          fontWeight: "bold",
          mb: 0.5,
        }}
      >
        Dress Code
      </Typography>

      {/* Estilo Sugerido */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: '"EB Garamond", serif',
          color: "#012e4f ",
          mb: 3,
          fontSize: "1.2rem",
        }}
      >
        Elegante
      </Typography>

      {/* Restricción de Colores */}
      <Box sx={{ maxWidth: 250, mx: "auto" }}>
        {/* Orbes de colores prohibidos */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1.5 }}>
          {[
            { bg: "#a0c8e3" }, // Celeste
            { bg: "#FFFFFF" }, // Blanco
            { bg: "linear-gradient(135deg, #fdfdfd 0%, #a6a6a6 100%)" }, // Plateado
          ].map((color, index) => (
            <Box
              key={index}
              sx={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: color.bg,
                border: "1px solid #dcdcdc",
                boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "130%",
                  height: "2.5px",
                  backgroundColor: "#012e4f", // Mismo color del texto para mantener elegancia
                  transform: "rotate(45deg)",
                  borderRadius: "2px",
                },
              }}
            />
          ))}
        </Box>
        <Typography
          sx={{
            fontFamily: '"EB Garamond", serif',
            fontSize: "1rem",
            color: "#012e4f ",
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          *Prohibido celeste,{" "}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"EB Garamond", serif',
            fontSize: "1rem",
            color: "#012e4f ",
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          blanco y plateado
        </Typography>
      </Box>
    </Box>
  );
};

export default DressCodeSection;
