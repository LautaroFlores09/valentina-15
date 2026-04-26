/**
 * EJEMPLOS DE ANIMACIONES AVANZADAS
 * 
 * Muestra cómo animaciones dentro de componentes específicos
 * para máximo impacto visual
 */

// ============================================================
// EJEMPLO 1: CardInfoDay - Múltiples elementos con cascada
// ============================================================

/*
import { Box } from "@mui/material";
import { FadeUpIn, ZoomIn } from "./ScrollAnimations";

export function CardInfoDayWithAnimations() {
  return (
    <Box>
      <ZoomIn delay={0}>
        <Box sx={{ mb: 2 }}>
          {/* Imagen de la tarjeta */}
        </Box>
      </ZoomIn>
      
      <FadeUpIn delay={0.2}>
        <Typography variant="h5">
          15 Años de Valentina
        </Typography>
      </FadeUpIn>
      
      <FadeUpIn delay={0.4}>
        <Typography variant="body2">
          Sábado, 10 de Mayo de 2026
        </Typography>
      </FadeUpIn>
      
      <FadeUpIn delay={0.6}>
        <Button variant="contained">Ver detalles</Button>
      </FadeUpIn>
    </Box>
  );
}
*/

// ============================================================
// EJEMPLO 2: CountdownTimer - Animación escalonada de números
// ============================================================

/*
import { Box, Typography } from "@mui/material";
import { FadeUpIn, ZoomIn } from "./ScrollAnimations";

export function CountdownTimerWithAnimations() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <FadeUpIn delay={0}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3">45</Typography>
          <Typography>Días</Typography>
        </Box>
      </FadeUpIn>
      
      <FadeUpIn delay={0.15}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3">12</Typography>
          <Typography>Horas</Typography>
        </Box>
      </FadeUpIn>
      
      <FadeUpIn delay={0.3}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3">30</Typography>
          <Typography>Minutos</Typography>
        </Box>
      </FadeUpIn>
      
      <FadeUpIn delay={0.45}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3">15</Typography>
          <Typography>Segundos</Typography>
        </Box>
      </FadeUpIn>
    </Box>
  );
}
*/

// ============================================================
// EJEMPLO 3: DressCodeSection - Cartas animadas lado a lado
// ============================================================

/*
import { Box, Card, Typography } from "@mui/material";
import { RevealLeft, RevealRight } from "./ScrollAnimations";

export function DressCodeWithAnimations() {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <RevealLeft delay={0.2}>
        <Card>
          <Box sx={{ p: 3 }}>
            <Typography variant="h6">👗 Para Ella</Typography>
            <Typography>Vestido de gala elegante</Typography>
          </Box>
        </Card>
      </RevealLeft>
      
      <RevealRight delay={0.2}>
        <Card>
          <Box sx={{ p: 3 }}>
            <Typography variant="h6">🤵 Para Él</Typography>
            <Typography>Traje formal o smoking</Typography>
          </Box>
        </Card>
      </RevealRight>
    </Box>
  );
}
*/

// ============================================================
// EJEMPLO 4: RegaloSection - Grid con desvanecimiento en cascada
// ============================================================

/*
import { Grid, Card, Typography } from "@mui/material";
import { FadeUpIn } from "./ScrollAnimations";

const regalos = [
  { nombre: "Accesorio", description: "Joyas o bisutería" },
  { nombre: "Tecnología", description: "Electrónicos" },
  { nombre: "Libros", description: "Novelas o libros de interés" },
  { nombre: "Experiencia", description: "Viaje o evento" },
];

export function RegaloGridWithAnimations() {
  return (
    <Grid container spacing={2}>
      {regalos.map((regalo, index) => (
        <Grid item md={12} xs={12} sm={12} key={index}>
          <FadeUpIn delay={index * 0.15}>
            <Card>
              <Box sx={{ p: 2 }}>
                <Typography variant="subtitle1">
                  {regalo.nombre}
                </Typography>
                <Typography variant="caption">
                  {regalo.description}
                </Typography>
              </Box>
            </Card>
          </FadeUpIn>
        </Grid>
      ))}
    </Grid>
  );
}
*/

// ============================================================
// EJEMPLO 5: PlayListSection - Canciones con blur y fade
// ============================================================

/*
import { Box, List, ListItem, Typography } from "@mui/material";
import { BlurIn, FadeUpIn } from "./ScrollAnimations";

const canciones = [
  "Canción 1 - Artista",
  "Canción 2 - Artista",
  "Canción 3 - Artista",
];

export function PlaylistWithAnimations() {
  return (
    <BlurIn delay={0.1}>
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          🎵 Playlist Especial
        </Typography>
        <List>
          {canciones.map((cancion, index) => (
            <FadeUpIn delay={0.3 + index * 0.15} key={index}>
              <ListItem>
                <Typography>{cancion}</Typography>
              </ListItem>
            </FadeUpIn>
          ))}
        </List>
      </Box>
    </BlurIn>
  );
}
*/

// ============================================================
// EJEMPLO 6: ConfirmacionSection - Formulario progresivo
// ============================================================

/*
import { Box, TextField, Button } from "@mui/material";
import { FadeUpIn } from "./ScrollAnimations";

export function ConfirmacionWithAnimations() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <FadeUpIn delay={0.1}>
        <TextField
          label="Nombre"
          fullWidth
          sx={{ mb: 2 }}
        />
      </FadeUpIn>
      
      <FadeUpIn delay={0.25}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          sx={{ mb: 2 }}
        />
      </FadeUpIn>
      
      <FadeUpIn delay={0.4}>
        <TextField
          label="Teléfono"
          fullWidth
          sx={{ mb: 2 }}
        />
      </FadeUpIn>
      
      <FadeUpIn delay={0.55}>
        <Button
          variant="contained"
          fullWidth
        >
          Confirmar asistencia
        </Button>
      </FadeUpIn>
    </Box>
  );
}
*/

// ============================================================
// EJEMPLO 7: UbicacionSection - Mapa con elementos decorativos
// ============================================================

/*
import { Box, Typography, Card } from "@mui/material";
import { BlurIn, ScaleIn, FadeUpIn } from "./ScrollAnimations";

export function UbicacionWithAnimations() {
  return (
    <Box>
      <BlurIn delay={0.1}>
        {/* Mapa o imagen de ubicación */}
        <Box
          sx={{
            width: "100%",
            height: 300,
            bgcolor: "lightgray",
            borderRadius: 2,
            mb: 2,
          }}
        />
      </BlurIn>
      
      <ScaleIn delay={0.4}>
        <Box sx={{ mb: 2 }}>
          📍 Pin de ubicación decorativo
        </Box>
      </ScaleIn>
      
      <FadeUpIn delay={0.6}>
        <Card sx={{ p: 2 }}>
          <Typography variant="h6">Salón de Eventos</Typography>
          <Typography variant="body2">
            Calle Principal 123, Ciudad
          </Typography>
        </Card>
      </FadeUpIn>
    </Box>
  );
}
*/

// ============================================================
// TIPS PROFESIONALES PARA ESTAS ANIMACIONES
// ============================================================

/**
 * 🎨 COMPOSICIÓN VISUAL:
 * - Usa BlurIn para el fondo/contexto
 * - Usa ZoomIn para elementos destacados
 * - Usa FadeUpIn para el contenido principal
 * - Usa RevealLeft/Right para secciones laterales
 * 
 * ⏱️ TIMING:
 * - Primera animación: delay = 0
 * - Cascada: incrementa 0.15s entre elementos
 * - Máximo 5-6 elementos en cascada
 * - Total no debe superar 1.2s (transición + delay)
 * 
 * 🎭 EFECTOS ESPECIALES:
 * - Combina FadeUpIn + ZoomIn en elementos muy importantes
 * - Usa ScaleIn para elementos decorativos
 * - Usa BlurIn para imágenes o fondos
 * 
 * 📱 RESPONSIVE:
 * - Todas las animaciones son responsive
 * - Los delays funcionan igual en mobile
 * - Prueba en dispositivos reales
 * 
 * ✅ VALIDACIÓN:
 * - Las animaciones se ven suave en Chrome, Firefox, Safari
 * - No causan lag o scroll jank
 * - Se ejecutan solo una vez (triggerOnce: true)
 */
