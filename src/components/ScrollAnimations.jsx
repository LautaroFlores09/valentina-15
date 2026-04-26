import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * FadeUpIn - Desvanecimiento elegante hacia arriba
 * Perfecto para textos y contenido principal
 */
export const FadeUpIn = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * ZoomIn - Zoom suave desde el centro
 * Ideal para elementos importantes como tarjetas
 */
export const ZoomIn = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={
        isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * RevealLeft - Revelación elegante desde la izquierda
 * Perfecto para secciones laterales
 */
export const RevealLeft = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * RevealRight - Revelación elegante desde la derecha
 * Perfecto para secciones laterales
 */
export const RevealRight = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 60 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScaleIn - Escala suave con rotación sutil
 * Ideal para elementos decorativos
 */
export const ScaleIn = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
      animate={
        isVisible
          ? { opacity: 1, scale: 1, rotate: 0 }
          : { opacity: 0, scale: 0.7, rotate: -5 }
      }
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * BlurIn - Blur elegante con fade
 * Muy sofisticado para imágenes
 */
export const BlurIn = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: "blur(20px)",
      }}
      animate={
        isVisible
          ? {
              opacity: 1,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              filter: "blur(20px)",
            }
      }
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};
