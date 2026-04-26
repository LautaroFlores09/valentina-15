import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import CustomButton from "../CustomButton";

// Importa la imagen de confirmación
import ConfirmacionImg from "../../assets/confirmacion.png";

const ConfirmacionSection = () => {
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipoAlimentacion, setTipoAlimentacion] = useState(false);
  const [detalleAlimentacion, setDetalleAlimentacion] = useState("");

  const phoneNumber = "5491123326699"; // Reemplazar por tu número

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleWhatsapp = (type) => {
    let message = "";

    if (type === "asistire") {
      message = `🌊✨ ¡Hola Valen! Soy ${nombre} ${apellido} 🐚🎉

Te escribo para confirmarte que ¡SÍ asistiré a tu cumple! 💙
${
  tipoAlimentacion
    ? `\nTe comento que tengo un tipo de alimentación especial: ${
        detalleAlimentacion || "por favor consultame"
      }. 🍽️\n`
    : ""
}
¡Estoy muy feliz de poder acompañarte en esta noche tan especial! ✨`;
    }

    if (type === "no_asistire") {
      message = `🌊 ¡Hola Valen! Soy ${nombre} ${apellido} 🐚💙

Te escribo para avisarte que, lamentablemente, no podré asistir a tu cumple. 🥺

De todas formas, ¡te deseo una noche hermosa y súper especial! Que la pases increíble ✨`;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const isSubmitDisabled =
    !nombre.trim() ||
    !apellido.trim() ||
    (tipoAlimentacion && !detalleAlimentacion.trim());

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        px: 3,
        maxWidth: 280,
      }}
    >
      {/* Imagen de Confirmación */}
      <Box
        component="img"
        src={ConfirmacionImg}
        alt="Icono de confirmación"
        sx={{
          width: 90,
          height: "auto",
          mb: 4,
          mx: "auto",
        }}
      />

      {/* Título de la sección */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"EB Garamond", serif',
          color: "#012e4f",
          fontWeight: "bold",
        }}
      >
        Confirmacion de{" "}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"EB Garamond", serif',
          color: "#012e4f",
          mb: 2,
          fontWeight: "bold",
        }}
      >
        asistencia
      </Typography>

      {/* Botón de Confirmar */}
      <CustomButton
        label="Ir a confirmar"
        icon={<CheckCircleIcon />}
        onClick={handleOpen}
      />

      {/* Modal de Confirmación */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="confirmacion-modal-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              xs: "90%",
              sm: 450,
            },
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: "0 8px 32px rgba(1, 46, 79, 0.2)",
            p: 4,
            outline: "none",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Stack spacing={3}>
            {/* Título del Modal */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Typography
                id="confirmacion-modal-title"
                variant="h5"
                fontWeight="bold"
                textAlign="center"
                sx={{
                  fontFamily: '"EB Garamond", serif',
                  color: "#012e4f",
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                }}
              >
                Confirmación de Asistencia
              </Typography>
            </Box>

            {/* Subtítulo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <FavoriteIcon sx={{ fontSize: "1.2rem", color: "#8fbce5" }} />
              <Typography
                variant="body1"
                textAlign="center"
                sx={{
                  textAlign: "center",
                  color: "#666",
                  fontFamily: '"EB Garamond", serif',
                  fontSize: "1rem",
                }}
              >
                Valentina quiere saber si vas a acompañarla en su noche especial
              </Typography>
              <FavoriteIcon sx={{ fontSize: "1.2rem", color: "#8fbce5" }} />
            </Box>

            {/* Campo de Nombre */}
            <TextField
              fullWidth
              label="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  fontFamily: '"EB Garamond", serif',
                  "& fieldset": {
                    borderColor: "#8fbce5",
                  },
                  "&:hover fieldset": {
                    borderColor: "#012e4f",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#012e4f",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  fontFamily: '"EB Garamond", serif',
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#012e4f",
                },
              }}
            />

            {/* Campo de Apellido */}
            <TextField
              fullWidth
              label="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  fontFamily: '"EB Garamond", serif',
                  "& fieldset": {
                    borderColor: "#8fbce5",
                  },
                  "&:hover fieldset": {
                    borderColor: "#012e4f",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#012e4f",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  fontFamily: '"EB Garamond", serif',
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#012e4f",
                },
              }}
            />

            {/* Checkbox de Alimentación Especial */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={tipoAlimentacion}
                  onChange={(e) => setTipoAlimentacion(e.target.checked)}
                  sx={{
                    color: "#8fbce5",
                    "&.Mui-checked": {
                      color: "#012e4f",
                    },
                  }}
                />
              }
              label={
                <Typography sx={{ fontFamily: '"EB Garamond", serif' }}>
                  ¿Tenés algún tipo de alimentación especial?
                </Typography>
              }
            />

            {/* Campo de Detalle de Alimentación (condicional) */}
            {tipoAlimentacion && (
              <TextField
                fullWidth
                label="Ej: vegetariano, celíaco, vegano..."
                value={detalleAlimentacion}
                onChange={(e) => setDetalleAlimentacion(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                    fontFamily: '"EB Garamond", serif',
                    "& fieldset": {
                      borderColor: "#8fbce5",
                    },
                    "&:hover fieldset": {
                      borderColor: "#012e4f",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#012e4f",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    fontFamily: '"EB Garamond", serif',
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#012e4f",
                  },
                }}
              />
            )}

            {/* Botón Asistiré */}
            <Button
              fullWidth
              variant="contained"
              startIcon={<AutoAwesomeIcon />}
              onClick={() => handleWhatsapp("asistire")}
              disabled={isSubmitDisabled}
              sx={{
                bgcolor: "#8fbce5",
                color: "white",
                borderRadius: "25px",
                py: 1.5,
                textTransform: "none",
                fontSize: "1rem",
                fontFamily: '"EB Garamond", serif',
                fontWeight: "bold",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                "&:hover": {
                  bgcolor: "#8eb3ca",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                },
              }}
            >
              Asistiré
            </Button>

            {/* Botón No podré asistir */}
            <Button
              fullWidth
              variant="outlined"
              startIcon={<SentimentVeryDissatisfiedIcon />}
              onClick={() => handleWhatsapp("no_asistire")}
              disabled={isSubmitDisabled}
              sx={{
                borderColor: "#8fbce5",
                color: "#012e4f",
                borderRadius: "25px",
                py: 1.5,
                textTransform: "none",
                fontSize: "1rem",
                fontFamily: '"EB Garamond", serif',
                fontWeight: "bold",
                "&:hover": {
                  borderColor: "#012e4f",
                  bgcolor: "rgba(1, 46, 79, 0.05)",
                },
              }}
            >
              No podré asistir
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default ConfirmacionSection;
