import { Box, Typography, Stack } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CustomButton from "../CustomButton";

// Importa la imagen de la playlist
import PlaylistImg from "../../assets/playlist.png";

const PlaylistSection = () => {
  const handleOpenPlaylist = () => {
    const playlistUrl =
      "https://www.youtube.com/playlist?list=PLivvLvQVWNyS4TEfKIIlbhbNgW_6cp2gx&jct=YsvCirutFg8U4jpYBj2HSA";
    window.open(playlistUrl, "_blank");
  };

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          py: 4,
          px: 3,
          maxWidth: 280,
        }}
      >
        {/* Imagen de Playlist */}
        <Box
          component="img"
          src={PlaylistImg}
          alt="Icono de playlist"
          sx={{
            width: 120,
            height: "auto",
            mb: 2,
            mx: "auto",
          }}
        />
        {/* Título de la sección */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"EB Garamond", serif',
            color: "#012e4f",
            mb: 2,
            fontWeight: "bold",
          }}
        >
          Play List
        </Typography>

        {/* Pregunta */}
        <Typography
          sx={{
            fontFamily: '"EB Garamond", serif',
            fontSize: "1rem",
            color: "#012e4f",
            fontWeight: 500,
            lineHeight: 1.4,
            mb: 3,
          }}
        >
          ¿Qué canción no puede faltar?
        </Typography>

        {/* Stack de botones */}
        <Stack spacing={2}>
          <CustomButton
            label="Ver playlist"
            icon={<MusicNoteIcon />}
            onClick={handleOpenPlaylist}
          />
        </Stack>
      </Box>
    </>
  );
};

export default PlaylistSection;
