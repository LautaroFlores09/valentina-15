# 🎉 Guía de Personalización - Invitación 15 Años

## Descripción General

Tu proyecto de invitación digital ya está completamente funcional y listo para personalizarse. Los 3 componentes principales están diseñados con enfoque mobile first, estilos elegantes y animaciones suaves.

---

## 📝 Cómo Personalizar Cada Componente

### 1️⃣ HEADER - Portada Principal

**Archivo:** `src/components/Header.jsx`

**Qué puedes cambiar:**

- Nombre de la celebración: Busca el texto "Quinceañera" en `<h1 className={styles.title}>`
- Mensaje principal: Cambiar "15 Años" en `<h2 className={styles.name}>`
- Tagline/Lema: Cambiar el texto en `<p className={styles.tagline}>`

**Estilos:** `src/components/Header.module.css`

- Colores de fondo: Busca `background:` y ajusta los `rgba()` values
- Animaciones: Puedes modificar duración en `animation: fadeInDown 0.8s ease-out;`

---

### 2️⃣ BODY - Detalles del Evento

**Archivo:** `src/components/Body.jsx`

**Qué puedes cambiar:**

- **Fecha del evento:** Busca `"Sábado, 15 de Junio de 2024"` y actualiza
- **Hora:** Cambiar `"7:00 PM"` por la hora deseada
- **Lugar:** Reemplaza `"Salón de Eventos Casa Blanca"` con tu ubicación
- **Mensaje especial:** Edita los párrafos dentro de `<div className={styles.message}>`
- **Código de vestuario:** Cambiar `"Elegante / Formal"` según necesites

**Elementos interactivos:**

- Los emojis (📅, 🕐, 📍) pueden cambiarse por otros: 🎂, ⏰, 📌, etc.

**Estilos:** `src/components/Body.module.css`

---

### 3️⃣ FOOTER - Confirmación y Contacto

**Archivo:** `src/components/Footer.jsx`

**Qué puedes cambiar:**

- **Fecha de RSVP:** Busca `"1 de Junio de 2024"` y actualiza
- **Teléfono:** Reemplaza `"+1 (234) 567-8900"` con tu número
- **Email:** Cambiar `"invitacion@cumple15.com"` por tu email
- **Mensaje inspiracional:** Edita la cita entre comillas en `<p className={styles.messageText}>`
- **Firma:** Cambiar `"— Con amor, tu familia"` personalmente

**Estilos:** `src/components/Footer.module.css`

---

## 🎨 Personalización de Colores

Todos los componentes usan la paleta de colores morada/azul elegante.

**Para cambiar el color principal en toda la invitación:**

1. **Abre cada archivo `.module.css`**
2. **Busca valores como `#c9a3cc`, `#9b7b9e`**
3. **Reemplaza con tu color hexadecimal preferido**

**Paleta de colores elegante recomendada:**

- `#c9a3cc` - Morado claro
- `#9b7b9e` - Morado oscuro
- `#d4c5e2` - Morado muy claro
- `#6b5b7f` - Morado profundo

---

## 📱 Responsividad

Los componentes se adaptan automáticamente a:

- ✅ Mobile (320px - 480px)
- ✅ Tablet (481px - 768px)
- ✅ Desktop (769px+)

**No necesitas hacer nada especial**, los estilos ya incluyen media queries.

---

## 🖼️ Imágenes de Fondo

Las imágenes utilizadas están ubicadas en:

- `src/assets/headerbackground.jpg`
- `src/assets/bodybackground.jpg`
- `src/assets/footerbackground.jpg`

**Para cambiar las imágenes:**

1. Reemplaza los archivos `.jpg` con nuevas imágenes
2. O actualiza las rutas en cada `Header.module.css`, `Body.module.css`, `Footer.module.css`

---

## 🔤 Tipografías

El proyecto utiliza dos fuentes elegantes de Google Fonts (ya cargadas en `index.html`):

- **Mea Culpa** - Fuente decorativa para títulos
- **EB Garamond** - Fuente serif elegante para cuerpo

Para cambiar una fuente en un elemento específico, edita la propiedad `font-family` en los `.module.css`

---

## ✨ Características Implementadas

✅ Diseño Mobile First  
✅ Componentes reutilizables  
✅ Animaciones suaves  
✅ CSS Modules para estilos aislados  
✅ Buenas prácticas de React  
✅ Código limpio y ordenado  
✅ Responsive design completo  
✅ Imágenes de fondo integradas  
✅ Fácil de personalizar

---

## 🚀 Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Generar build para producción
npm run build
```

---

## 💡 Consejos Finales

1. **Prueba en tu teléfono** para ver cómo se ve en mobile
2. **Usa colores coherentes** en toda la invitación
3. **Personaliza los datos de contacto** para que sea auténtica
4. **Comparte el link con familiares y amigos** para que vean en sus dispositivos

¡Que disfrutes creando la invitación perfecta! 🎉💖
