import { Box } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ScrollIndicator() {
  // Animación de bounce para los iconos
  const arrowVariants = {
    animate: {
      y: [0, 12, 0],
      opacity: [1, 0.5, 1],
    },
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: { xs: "2rem", md: "3rem" },
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        zIndex: 10,
      }}
    >
      {/* Primera flecha */}
      <motion.div
        variants={arrowVariants}
        animate="animate"
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <KeyboardArrowDownIcon
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "#8fbce5",
            filter: "drop-shadow(0 2px 8px rgba(1, 46, 79, 0.3))",
          }}
        />
      </motion.div>

      {/* Segunda flecha con delay */}
      <motion.div
        variants={arrowVariants}
        animate="animate"
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <KeyboardArrowDownIcon
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "#012e4f",
            filter: "drop-shadow(0 2px 8px rgba(1, 46, 79, 0.3))",
            marginTop: "-0.8rem",
          }}
        />
      </motion.div>

      {/* Tercera flecha con delay mayor */}
      <motion.div
        variants={arrowVariants}
        animate="animate"
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        <KeyboardArrowDownIcon
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "#8fbce5",
            filter: "drop-shadow(0 2px 8px rgba(1, 46, 79, 0.3))",
            marginTop: "-0.8rem",
          }}
        />
      </motion.div>
    </Box>
  );
}
