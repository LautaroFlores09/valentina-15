import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Slider,
  Box,
  Fade,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import { useState, useRef, useEffect } from "react";

import Image1 from "../../assets/valenPelotero.png";
import Image2 from "../../assets/valenChiquita.png"; // Imagen de ejemplo para el carrusel
import Image3 from "../../assets/valenGrande.png";
import MusicFile from "../../assets/music/Stray Kids Youtiful.mp3";

const MusicPlayerWidget = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Estado para el carrusel de imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Definir las imágenes del carrusel aquí
  const carouselImages = [Image1, Image2, Image3];

  // Cambiar de imagen cada 4 segundos
  useEffect(() => {
    if (carouselImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Auto-reproducir la canción cuando el componente monta (muted para permitir autoplay)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  // Reproducir cuando el usuario scrollea
  useEffect(() => {
    const handleScroll = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            // Remover el listener después de reproducir exitosamente
            window.removeEventListener("scroll", handleScroll);
          })
          .catch(() => {
            // Si falla, seguir intentando
          });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Manejar cambios de volumen
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      // Si el usuario ajusta el volumen, desmutea automáticamente
      if (volume > 0) {
        audioRef.current.muted = false;
      }
    }
  }, [volume]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.muted = false;
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (event, newValue) => {
    setCurrentTime(newValue);
    if (audioRef.current) {
      audioRef.current.currentTime = newValue;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <Card
      sx={{
        minWidth: 300,
        borderRadius: "16px",
        border: "1px solid #4a6782",
        boxShadow: "none",
        m: "auto",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* Elemento de audio (no visible) */}
      <audio
        ref={audioRef}
        src={MusicFile}
        loop
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
      />

      {/* Portada del Álbum (Carrusel de Imágenes) */}
      <Box
        sx={{
          position: "relative",
          height: 300,
          m: "18px",
          width: "calc(100% - 35px)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {carouselImages.map((img, index) => (
          <Fade key={index} in={index === currentImageIndex} timeout={800}>
            <CardMedia
              component="img"
              height="280"
              image={img}
              alt={`Foto de carrusel ${index + 1}`}
              sx={{
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </Fade>
        ))}
      </Box>

      <CardContent sx={{ p: 1.5, pb: "12px !important", pt: "0 !important" }}>
        {/* Título de la Canción */}
        <Box
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "100%",
            mb: 1.5,
            position: "relative",
            height: "24px",
          }}
        >
          <Typography
            variant="body2"
            component="div"
            sx={{
              color: "#8fbce5", // Color azul pastel del texto
              fontSize: "1.2rem",
              position: "absolute",
              whiteSpace: "nowrap",
              animation: "marquee 10s linear infinite", // Animación en bucle
              "@keyframes marquee": {
                "0%": { transform: "translateX(250px)" }, // Empieza a la derecha del contenedor
                "100%": { transform: "translateX(-100%)" }, // Termina a la izquierda de su propio tamaño
              },
            }}
          >
            Youtiful - Stray kids
          </Typography>
        </Box>

        {/* Barra de Progreso de la Canción */}
        <Box sx={{ width: "100%", px: 1, mb: 1 }}>
          <Slider
            size="small"
            value={currentTime}
            onChange={handleProgressChange}
            min={0}
            max={duration || 100}
            aria-label="Progress"
            sx={{
              color: "#8fbce5", // Color de la barra de progreso
              height: 2,
              "& .MuiSlider-thumb": {
                width: 12,
                height: 12,
                bgcolor: "#012e4f ", // Color del control deslizante oscuro
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${"rgb(26 60 94 / 16%)"}`,
                },
                "&.Mui-active": {
                  width: 16,
                  height: 16,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.38,
              },
            }}
          />
          <Box
            sx={{ display: "flex", justifyContent: "space-between", mt: -1 }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#8fbce5", fontSize: "0.7rem" }}
            >
              {formatTime(currentTime)}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#8fbce5", fontSize: "0.7rem" }}
            >
              {formatTime(duration)}
            </Typography>
          </Box>
        </Box>

        {/* Controles de Reproducción */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          {/* Icono de Corazón */}
          <IconButton aria-label="like" sx={{ color: "#8fbce5", p: 0.5 }}>
            <FavoriteBorderIcon fontSize="medium" />
          </IconButton>

          {/* Grupo de control principal */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Canción Anterior */}
            <IconButton aria-label="previous song" sx={{ color: "#8fbce5" }}>
              <SkipPreviousIcon fontSize="medium" />
            </IconButton>

            {/* Botón Play/Pause */}
            <IconButton
              aria-label="play/pause"
              onClick={handlePlayPause}
              sx={{
                bgcolor: "#8fbce5", // Fondo azul pastel
                color: "#012e4f ", // Color del icono play oscuro
                "&:hover": { bgcolor: "#8eb3ca" }, // Efecto hover ligeramente más oscuro
                width: 48,
                height: 48,
              }}
            >
              {isPlaying ? (
                <PauseIcon sx={{ fontSize: "2rem" }} />
              ) : (
                <PlayArrowIcon sx={{ fontSize: "2rem" }} />
              )}
            </IconButton>

            {/* Siguiente Canción */}
            <IconButton aria-label="next song" sx={{ color: "#8fbce5" }}>
              <SkipNextIcon fontSize="medium" />
            </IconButton>
          </Box>

          {/* Icono de Agregar */}
          <IconButton aria-label="add" sx={{ color: "#8fbce5", p: 0.5 }}>
            <AddIcon fontSize="medium" />
          </IconButton>
        </Box>

        {/* Control de Volumen */}
        <Box
          sx={{
            width: "100%",
            px: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#8fbce5",
              whiteSpace: "nowrap",
              fontSize: "0.75rem",
              fontWeight: "bold",
            }}
          >
            {Math.round(volume)}%
          </Typography>
          <Slider
            size="small"
            value={volume}
            onChange={handleVolumeChange}
            min={0}
            max={100}
            aria-label="Volume"
            sx={{
              color: "#8fbce5",
              height: 2,
              "& .MuiSlider-thumb": {
                width: 10,
                height: 10,
                bgcolor: "#012e4f ",
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 6px ${"rgb(26 60 94 / 16%)"}`,
                },
                "&.Mui-active": {
                  width: 14,
                  height: 14,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.38,
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MusicPlayerWidget;
