/**
 * GUÍA DE TRANSICIONES CON SCROLL
 *
 * Este archivo documenta cómo usar los componentes de animación
 * para crear transiciones elegantes al hacer scroll
 */

// ============================================================
// ANIMACIONES DISPONIBLES
// ============================================================

// 1. FadeUpIn - Desvanecimiento elegante hacia arriba
// Uso: Para textos, párrafos, contenido principal
// Delay recomendado: 0 - 1 segundo
import { FadeUpIn } from "@/components/ScrollAnimations";

// Ejemplo:
// <FadeUpIn delay={0.2}>
//   <Typography>Tu contenido aquí</Typography>
// </FadeUpIn>

// ============================================================

// 2. ZoomIn - Zoom suave desde el centro
// Uso: Para tarjetas, imágenes, elementos destacados
// Perfecto para elementos que quieres enfatizar
import { ZoomIn } from "@/components/ScrollAnimations";

// Ejemplo:
// <ZoomIn delay={0.3}>
//   <Card>Contenido importante</Card>
// </ZoomIn>

// ============================================================

// 3. RevealLeft - Revelación elegante desde la izquierda
// Uso: Para contenido lateral izquierdo
// Crea un efecto de "entrada desde fuera del viewport"
import { RevealLeft } from "@/components/ScrollAnimations";

// Ejemplo:
// <RevealLeft delay={0.2}>
//   <Box>Contenido lateral</Box>
// </RevealLeft>

// ============================================================

// 4. RevealRight - Revelación elegante desde la derecha
// Uso: Para contenido lateral derecho
// Complemento de RevealLeft
import { RevealRight } from "@/components/ScrollAnimations";

// Ejemplo:
// <RevealRight delay={0.2}>
//   <Box>Contenido lateral derecho</Box>
// </RevealRight>

// ============================================================

// 5. ScaleIn - Escala suave con rotación sutil
// Uso: Para elementos decorativos, iconos, flores
// Añade un toque de elegancia con la rotación
import { ScaleIn } from "@/components/ScrollAnimations";

// Ejemplo:
// <ScaleIn delay={0.4}>
//   <Icon>✨</Icon>
// </ScaleIn>

// ============================================================

// 6. BlurIn - Blur elegante con fade
// Uso: Para imágenes, fondos, elementos visuales
// Muy sofisticado y premium
import { BlurIn } from "@/components/ScrollAnimations";

// Ejemplo:
// <BlurIn delay={0.5}>
//   <Image src="foto.jpg" />
// </BlurIn>

// ============================================================
// PARÁMETROS
// ============================================================

/**
 * delay (número) - Retraso en segundos antes de comenzar la animación
 * Uso: Para crear efecto en cascada cuando múltiples elementos aparecen
 * Rango recomendado: 0 - 1.2
 *
 * Ejemplo de cascada:
 * <FadeUpIn delay={0}>Elemento 1</FadeUpIn>
 * <FadeUpIn delay={0.2}>Elemento 2</FadeUpIn>
 * <FadeUpIn delay={0.4}>Elemento 3</FadeUpIn>
 */

// ============================================================
// PATRONES RECOMENDADOS
// ============================================================

/**
 * Patrón 1: Cascada Simple (Recomendado para listas)
 * Cada elemento tiene 0.2s de delay respecto al anterior
 */

// <FadeUpIn delay={0.0}>Título</FadeUpIn>
// <FadeUpIn delay={0.2}>Párrafo 1</FadeUpIn>
// <FadeUpIn delay={0.4}>Párrafo 2</FadeUpIn>
// <FadeUpIn delay={0.6}>Botón</FadeUpIn>

/**
 * Patrón 2: Combinación de Animaciones (Recomendado para secciones)
 * Mezcla diferentes tipos para más dinamismo
 */

// <ZoomIn delay={0}>Imagen principal</ZoomIn>
// <FadeUpIn delay={0.3}>Texto descriptivo</FadeUpIn>
// <RevealLeft delay={0.5}>Detalles izquierda</RevealLeft>
// <RevealRight delay={0.5}>Detalles derecha</RevealRight>

/**
 * Patrón 3: Efecto de Carga (Recomendado para portadas)
 * Comienza lentamente y acelera
 */

// <BlurIn delay={0.2}>Fondo decorativo</BlurIn>
// <ScaleIn delay={0.5}>Logo o icono</ScaleIn>
// <FadeUpIn delay={0.8}>Texto principal</FadeUpIn>

// ============================================================
// TIPS PARA ANIMACIONES PREMIUM
// ============================================================

/**
 * ✨ TIP 1: Los delays pequeños (0.1-0.3s) son más elegantes
 *    que los delays grandes. Evita delays > 1s
 *
 * ✨ TIP 2: Mezcla máximo 2-3 tipos de animaciones en una sección
 *    Demasiados tipos genera caos visual
 *
 * ✨ TIP 3: Usa FadeUpIn para contenido importante
 *    Usa ZoomIn para elementos destacados
 *    Usa BlurIn para elementos visuales/fotos
 *
 * ✨ TIP 4: El delay total no debería superar 1.2 segundos
 *    (tiempo de transición + máximo delay)
 *
 * ✨ TIP 5: Prueba en mobile. Los efectos deben verse igual de bien
 */

// ============================================================
// CONFIGURACIÓN AVANZADA (Hook useScrollAnimation)
// ============================================================

/**
 * Si necesitas comportamiento custom, puedes usar el hook directamente:
 *
 * import { useScrollAnimation } from "@/hooks/useScrollAnimation";
 *
 * const [ref, isVisible] = useScrollAnimation({
 *   threshold: 0.2,        // Cuánto del elemento debe ser visible (0-1)
 *   rootMargin: "0px 0px -100px 0px",  // Margen del viewport
 *   triggerOnce: true      // Solo animar una vez (false = animar cada vez)
 * });
 */

// ============================================================
// ESTADO ACTUAL DEL PROYECTO
// ============================================================

/**
 * ✅ Header - Animaciones aplicadas
 * ✅ Body (8 secciones) - Animaciones aplicadas con delays en cascada
 * ✅ Footer - Animaciones aplicadas
 *
 * Próximas secciones que podrían tener animaciones:
 * - CardInfoDay
 * - CountdownTimer
 * - UbicacionSection
 * - DressCodeSection
 * - RegaloSection
 * - PlaylistSection
 * - ConfirmacionSection
 *
 * Si quieres animaciones más detalladas en estos componentes,
 * puedes envolver elementos internos con los componentes de animación.
 */
