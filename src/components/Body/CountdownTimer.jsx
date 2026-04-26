import { useState, useEffect } from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Componente para cada unidad de tiempo (Días, Horas, etc.)
const FlipUnit = ({ value, label }) => {
  return (
    <Stack spacing={1} alignItems="center">
      <Box
        sx={{
          position: "relative",
          width: { xs: 60, sm: 80 },
          //   height: { xs: 70, sm: 90 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#012e4f ",
                fontFamily: '"EB Garamond", serif',
              }}
            >
              {value.toString().padStart(2, "0")}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Box>
      <Typography
        sx={{
          color: "#012e4f ",
          letterSpacing: 1,
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    días: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    // Fecha objetivo: 30 de Mayo, 21:30 hs (9:30 PM)
    const targetDate = new Date("2026-05-30T21:30:00");

    const calculateTime = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          días: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTime, 1000);
    calculateTime(); // Ejecución inicial

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 4,
        maxWidth: 280,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#012e4f ",
          mb: 3,
          fontFamily: '"EB Garamond", serif',
          fontWeight: "bold",
        }}
      >
        SOLO FALTAN...
      </Typography>

      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 3 }}
        justifyContent="center"
        alignItems="center"
      >
        <FlipUnit value={timeLeft.días} label="Días" />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "#012e4f " }}
        />
        <FlipUnit value={timeLeft.horas} label="Hs" />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "#012e4f " }}
        />
        <FlipUnit value={timeLeft.minutos} label="Min" />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "#012e4f " }}
        />
        <FlipUnit value={timeLeft.segundos} label="Seg" />
      </Stack>
    </Box>
  );
};

export default CountdownTimer;
