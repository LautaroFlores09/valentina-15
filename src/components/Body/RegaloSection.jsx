import { Box, Typography, Stack, IconButton, Tooltip, Snackbar, Alert } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

// Importa la imagen del regalo
import RegaloImg from "../../assets/regalo.png";

const RegaloSection = () => {
  const [copied, setCopied] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const alias = "martinez.tina";

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Evitar que el teclado en pantalla se abra en móviles
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setOpenSnackbar(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("No se pudo copiar el texto", err);
    }

    document.body.removeChild(textArea);
  };

  const handleCopyAlias = () => {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(alias);
      return;
    }
    navigator.clipboard.writeText(alias).then(() => {
      setCopied(true);
      setOpenSnackbar(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error("Error al copiar: ", err);
      fallbackCopyTextToClipboard(alias);
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 4,
        px: 3,
        maxWidth: 280,
      }}
    >
      {/* Icono de Regalo */}
      <Box
        component="img"
        src={RegaloImg}
        alt="Icono de regalo"
        sx={{
          width: 100,
          height: "auto",
          mb: 3,
          mx: "auto",
        }}
      />
      {/* Título de la sección */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"EB Garamond", serif',
          color: "#012e4f ",
          mb: 2,
          fontWeight: "bold",
        }}
      >
        Regalo
      </Typography>

      {/* Mensaje */}
      <Stack
        spacing={2}
        sx={{
          maxWidth: 350,
          mx: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"EB Garamond", serif',
            fontSize: "1rem",
            color: "#1a3c5e",
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          Compartir este día con vos es lo que más me importa.
        </Typography>

        <Typography
          sx={{
            fontFamily: '"EB Garamond", serif',
            fontSize: "1rem",
            color: "#1a3c5e",
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          Para quienes deseen sumar un detalle, será recibido con alegría...
        </Typography>

        {/* Alias */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{ mt: 1 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"EB Garamond", serif', // Usamos una fuente más legible para el alias
              color: "#8fbce5",
              fontWeight: "bold",
              mt: 1,
              letterSpacing: 0.5,
            }}
          >
            Alias: {alias}
          </Typography>
          <Tooltip title={copied ? "¡Copiado!" : "Copiar alias"}>
            <IconButton
              size="small"
              onClick={handleCopyAlias}
              sx={{ color: "#012e4f " }}
            >
              <ContentCopyIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      {/* Mensaje de confirmación al copiar */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          ¡Alias copiado al portapapeles!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RegaloSection;
