# 🎬 Scroll Animations - Sistema de Transiciones Elegantes

## ✨ ¿Qué se Implementó?

Tu invitación ahora tiene **transiciones mágicas y elegantes** mientras el usuario scrollea.

### 🎨 Tipos de Animaciones Disponibles

```
1. 📱 FadeUpIn (Fade + Movimiento arriba)
   └─ Desvanecimiento suave con movimiento vertical
   └─ Ideal para: Textos, párrafos, contenido

2. 🔍 ZoomIn (Zoom desde el centro)
   └─ Amplificación suave desde el centro
   └─ Ideal para: Tarjetas, elementos destacados

3. ← RevealLeft (Revelación desde izquierda)
   └─ Entrada elegante desde la izquierda
   └─ Ideal para: Contenido lateral

4. → RevealRight (Revelación desde derecha)
   └─ Entrada elegante desde la derecha
   └─ Ideal para: Contenido lateral

5. ⭐ ScaleIn (Escala + Rotación sutil)
   └─ Ampliación con rotación elegante
   └─ Ideal para: Elementos decorativos, iconos

6. 🌫️ BlurIn (Blur progresivo)
   └─ Desenfoque que se aclara
   └─ Ideal para: Imágenes, elementos visuales
```

---

## 📁 Archivos Creados

### 1. **useScrollAnimation.js** (Hook)

```javascript
const [ref, isVisible] = useScrollAnimation({
  threshold: 0.2, // Cuándo se activa (20% visible)
  triggerOnce: true, // Animar solo una vez
  rootMargin: "0px 0px -100px 0px",
});
```

### 2. **ScrollAnimations.jsx** (Componentes)

```javascript
<FadeUpIn delay={0.2}>
  <YourComponent />
</FadeUpIn>
```

---

## 🎯 Implementación Actual

### Header ✅

- Título "Valentina" - FadeUpIn con delay 0.2s
- Subtítulo "Mis 15 Años" - FadeUpIn con delay 0.4s

### Body ✅

- MusicPlayerWidget - BlurIn (delay 0.1s)
- CardInfoDay - ZoomIn (delay 0.2s)
- CountdownTimer - FadeUpIn (delay 0.3s)
- UbicacionSection - FadeUpIn (delay 0.4s)
- DressCodeSection - ZoomIn (delay 0.5s)
- RegaloSection - FadeUpIn (delay 0.6s)
- PlaylistSection - BlurIn (delay 0.7s)
- ConfirmacionSection - FadeUpIn (delay 0.8s)

### Footer ✅

- "¡Te espero!" - FadeUpIn

---

## 🚀 Características Premium

✨ **Smooth Easing**: Curva de bezier profesional

```javascript
ease: [0.25, 0.46, 0.45, 0.94]; // Smooth, natural
```

⏱️ **Duración Perfecta**: 0.8-1 segundos

```javascript
duration: 0.8; // No muy rápido, no muy lento
```

🎪 **Efecto en Cascada**: Delays escalonados

```javascript
delay={0}, delay={0.2}, delay={0.4} // Onda visual
```

💯 **Performance**: Intersection Observer API

```javascript
// No monitorea scroll constantemente
// Solo observa cuando entra/sale del viewport
```

---

## 📝 Cómo Usar

### Opción 1: Componentes Simples (Recomendado)

```javascript
import { FadeUpIn } from "@/components/ScrollAnimations";

export function MiComponente() {
  return (
    <FadeUpIn delay={0.2}>
      <Typography>Contenido que aparece mágicamente</Typography>
    </FadeUpIn>
  );
}
```

### Opción 2: Hook Directo (Avanzado)

```javascript
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function MiComponente() {
  const [ref, isVisible] = useScrollAnimation();

  return <Box ref={ref}>{isVisible ? <Contenido /> : <Placeholder />}</Box>;
}
```

---

## 🎨 Patrones Recomendados

### Patrón 1: Cascada Simple (Listas)

```
Elemento 1 (delay: 0)   ↓
Elemento 2 (delay: 0.2) ↓
Elemento 3 (delay: 0.4) ↓
Elemento 4 (delay: 0.6) ↓
```

### Patrón 2: Combinación (Secciones)

```
Imagen  ─────────────── ZoomIn (delay: 0)
Texto   ─────────────── FadeUpIn (delay: 0.3)
Detalles ──────────────── RevealLeft (delay: 0.5)
```

### Patrón 3: Efecto de Carga (Portadas)

```
Fondo   ─────────────── BlurIn (delay: 0.2)
Logo    ─────────────── ScaleIn (delay: 0.5)
Texto   ─────────────── FadeUpIn (delay: 0.8)
```

---

## 💡 Tips Profesionales

**✅ QUÉ SÍ:**

- Usar delays pequeños (0.1 - 0.3s)
- Mezclar máximo 2-3 tipos de animaciones
- Delays totales ≤ 1.2s
- Probar en mobile

**❌ QUÉ NO:**

- Delays > 1s (se ve lento)
- Demasiados tipos de animaciones (caos visual)
- Animaciones que interfieran con usabilidad
- Efectos muy fuertes que hagan lag

---

## 📚 Documentación Extra

- **GUIA_ANIMACIONES.js** - Guía completa con ejemplos
- **EJEMPLOS_ANIMACIONES_AVANZADAS.js** - Ejemplos por componente

---

## 🎬 Resultado Final

Tu invitación ahora se verá como una **web premium** con:

- ✨ Transiciones suaves al scrollear
- 🎭 Efectos elegantes y delicados
- 📱 Funciona perfecto en mobile
- ⚡ Sin lag o performance issues
- 🎨 Estilo consistente y profesional

---

## 🔧 Próximos Pasos (Opcional)

Si quieres más animaciones, puedes:

1. **Animar componentes internos**

   ```javascript
   // Dentro de CardInfoDay.jsx
   <FadeUpIn delay={0}><Imagen /></FadeUpIn>
   <FadeUpIn delay={0.2}><Titulo /></FadeUpIn>
   <FadeUpIn delay={0.4}><Descripcion /></FadeUpIn>
   ```

2. **Agregar más delay varieties**

   ```javascript
   // Para grillas
   const delay = index * 0.15; // Cada elemento +0.15s
   ```

3. **Efectos personalizados**
   ```javascript
   // Usar directamente Framer Motion
   <motion.div initial={{...}} animate={{...}} />
   ```

---

**¡Tu invitación está lista para ser una experiencia premium! 🎉**
