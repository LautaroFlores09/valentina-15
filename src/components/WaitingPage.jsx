import { Box, keyframes } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import BrujulaImg from "../assets/brujula.png";

// Animación para que la imagen rote sobre sí misma
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Animación para que el gradiente del fondo se mueva suavemente
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Animación de aparición del elemento interactivo
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animación de rebote para el icono
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Animación de respiración para el contenedor
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
`;

const WaitingPage = ({ onOpen, isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <Box
      onClick={onOpen}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        // Fondo con tus 3 colores específicos
        background:
          "linear-gradient(-45deg, #8fbce5, #ffffff, #012e4f, #8fbce5)",
        backgroundSize: "400% 400%",
        animation: `${gradientMove} 8s ease infinite`,
      }}
    >
      {/* Contenedor de la Brújula */}
      <Box
        sx={{
          width: 150,
          height: 150,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          backgroundColor: "#012e4f",
          backdropFilter: "blur(5px)",
          boxShadow: "0 8px 32px 0 rgba(1, 47, 79, 0.71)",
        }}
      >
        <Box
          component="img"
          src={BrujulaImg}
          alt="Invitación"
          sx={{
            width: 100,
            height: 100,
            animation: `${rotate} 3s linear infinite`,
          }}
        />
      </Box>

      {/* Elemento interactivo animado */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
          animation: `${fadeInUp} 1s ease-out 0.5s both`,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        {/* Icono con animación de rebote */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 60,
            height: 60,
            animation: `${bounce} 2s ease-in-out infinite`,
          }}
        >
          <KeyboardArrowDown
            sx={{
              fontSize: 32,
              color: "#012e4f",
            }}
          />
        </Box>

        {/* Texto con animación de pulso */}
        <Box
          sx={{
            color: "#012e4f",
            fontSize: "16px",
            fontWeight: "bold",
            animation: `${pulse} 2s ease-in-out infinite`,
            textAlign: "center",
          }}
        >
          Abrir invitación
        </Box>
      </Box>
    </Box>
  );
};

export default WaitingPage;
