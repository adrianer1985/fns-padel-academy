# 📋 DIRECTRICES Y DOCUMENTACIÓN COMPLETA DEL PROYECTO
## 🦁 FNS Padel Academy — Sitio Web Oficial

Este documento recoge todas las **directrices, decisiones de diseño, especificaciones de negocio, arquitectura técnica y evolución** seguidas para la concepción y desarrollo del sitio web de **FNS Padel Academy** (con sede en el club *La Mirada Pádel*, Campanillas, Málaga).

---

## 📌 1. Información General y Datos de la Academia

* **Nombre Oficial:** FNS Padel Academy
* **Sede Principal:** Club La Mirada Pádel
* **Ubicación:** Campanillas / Santa Rosalía Maqueda, Málaga (España)
* **Dirección Club:** Travesía Santa Rosalía Maqueda, s/n, 29591 Santa Rosalía, Málaga
* **Equipo Directivo:**
  * **Fco Funes:** Gerente del Club y Director de FNS Padel Academy.
  * **Raquel Ruano:** Directora General del Club.
* **Métricas Clave:**
  * **+200 Alumnos Activos**
  * **+20 Años de Experiencia**
  * **7 Pistas de Cristal** con césped de alta calidad
  * **+10 Equipos en Competición** (Series Nacionales de Pádel - SNP, Liga Lapi, entre otras).
* **Canal Principal de Contacto y Conversión:** WhatsApp oficial (+34 647 84 70 65)
* **Plataforma de Reserva de Pistas:** Playtomic (*Padel 4 La Mirada*)

---

## 🎯 2. Objetivos y Estrategia de Conversión

1. **Captación Directa (Lead Generation):** Cada llamada a la acción (CTA) conduce a un flujo de WhatsApp personalizado y pre-redactado para maximizar el contacto inmediato.
2. **Estrategia Comercial en Packs FNS:** En lugar de publicar precios cerrados directamente, los botones de los packs abren un WhatsApp preguntando por el pack concreto (Basic, Pro o Premium), permitiendo a la academia cualificar al alumno (nivel, disponibilidad y objetivos) antes de facilitarle las tarifas.
3. **Potenciar la Escuela Infantil y de Adultos:** Mostrar fotos reales de los alumnos y monitores para transmitir cercanía, confianza, profesionalidad y ambiente familiar.
4. **Reserva Inmediata de Instalaciones:** Botón persistente en la cabecera y en la sección de instalaciones conectado a Playtomic para alquiler de pistas.

---

## 🎨 3. Sistema de Diseño y Estética Visual

### 🌈 Paleta de Colores
* **Modo Oscuro (Predeterminado):**
  * Fondo Principal: `#07090e` (Negro grafito deportivo)
  * Fondo Secundario: `#0e121a` (Azul medianoche oscuro)
  * Tarjetas / Glass: `rgba(20, 27, 41, 0.55)` con desenfoque de fondo (*backdrop-filter*)
  * Color de Acento: `#ccff00` (Amarillo/Verde Neón Pádel)
  * Textos: `#ffffff` (Títulos) y `#9ca3af` (Párrafos)
* **Modo Claro (Adaptación automática por sistema):**
  * Fondo: `#f8fafc` / `#ffffff`
  * Textos: `#0f172a` (Alto contraste)
  * Color de Acento: `#15803d` (Verde deportivo) y `#1e3a8a` (Azul marino)

### ✍️ Tipografía
* **Títulos y Encabezados:** `'Outfit', sans-serif` (Carácter moderno, fuerte y deportivo).
* **Cuerpo y Párrafos:** `'Plus Jakarta Sans', sans-serif` (Legibilidad óptima en pantallas móviles y de escritorio).

### 🧩 Maquetación y Responsive
* **Desktop First & Mobile Optimized:** Diseñado con CSS Grid y Flexbox fluido.
* **Ajuste de Cabezas en Fotos:** Reglas `object-position: center top` en tarjetas para evitar recortes de caras en pantallas panorámicas.
* **Prevenir Zoom en Móviles:** Tamaño de fuente mínimo de `16px` en inputs para evitar auto-zoom indeseado en Safari iOS.
* **Touch Targets:** Botones y enlaces con tamaño táctil mínimo de `44x44px`.

---

## 🏗️ 4. Estructura y Secciones de la Web

### 1. Cabecera (Header / Navbar)
* **Logotipo FNS PADEL ACADEMY:** Con interletrado exacto adaptado por Flexbox (`space-between`).
* **Menú de Navegación:** Inicio, Sobre Nosotros, Programas, Packs FNS, Instalaciones, Opiniones, Contacto.
* **Botón de Música (`#music-toggle`):** Reproduce el tema motivador oficial (*"He's a Pirate" - Piratas del Caribe*).
* **CTA "Reservar Pista":** Enlace directo al perfil del club en Playtomic.

### 2. Portada (Hero Section)
* **Tagline:** `🏆 Academia de Pádel de Alto Rendimiento para Menores y Adultos`.
* **Título:** `Eleva tu Pádel al Siguiente Nivel`.
* **Fondo:** Imagen real de los alumnos de la academia en pista con una capa protectora oscura del 88% para máxima legibilidad.
* **Botones:** "Ver Programas" y "Prueba una Clase Gratis".

### 3. Pop-up / Modal Promocional
* **Estado actual:** El antiguo cartel individual del campamento se ha retirado.
* **Versión actual:** Collage 2 × 2 con los carteles general, Premium, Medium y Basic. Aparece automáticamente a los 800 ms, permanece visible durante 5 segundos y permite cierre manual, clic fuera del cartel o tecla Escape.
* **Archivos optimizados:** `promo-packs-fns.webp`, `promo-pack-premium.webp`, `promo-pack-medium.webp` y `promo-pack-basic.webp`.

### 4. Sobre Nosotros (¿Quiénes Somos?)
* **Título:** `Pasión, Técnica y un Ambiente Familiar Único`.
* **Fotografía Principal:** Foto de presentación del equipo directivo (Fco Funes, Raquel Ruano y equipo) en pista con distintivo de **"20+ Años de Exp."**.
* **Puntos Fuertes:** Trato Cercano, Metodología Adaptativa, Eventos Sociales y Competiciones por Equipos (+10 equipos en SNP y Liga Lapi).

### 5. Programas para Todos los Niveles
* **Escuela Infantil (4-15 años):** Foto real de los alumnos infantiles en pista.
* **Escuela de Adultos (Más Popular):** Formatos de 1h con opción de 1 o 2 días a la semana.
* **Particulares y Competición:** Foto real adaptada en ancho completo sin zoom forzado.

### 6. Packs FNS de Alto Rendimiento (Planes Especiales)
* **Pack FNS Basic (2h semanales):** 1h clase particular + 1h clase grupal semanal.
* **Pack FNS Pro (3h semanales - Más Vendido):** 2h particulares + 1h grupal semanal.
* **Pack FNS Premium (4h semanales):** 2h particulares + 2h grupales semanales.
* **Integración WhatsApp:** Cada pack tiene su propio mensaje codificado automático para solicitar información y tarifas.

### 7. Instalaciones (La Mirada Pádel)
* **Especificaciones:** 7 pistas de cristal, parking fácil y gratuito, cafetería/terraza social y vestuarios.
* **Mapa Interactivo:** Mapa limpio de la ubicación exacta en Campanillas en español, con efecto zoom al pasar el ratón y enlace directo a Google Maps para navegación GPS.
* **Botón Playtomic:** Para reserva directa de pistas.

### 8. Opiniones y Testimonios
* Reseñas reales y valoraciones de alumnos adultos y familias de la escuela infantil.

### 9. Formulario y Contacto
* Formulario con validación en tiempo real que formatea los datos y abre una conversación de WhatsApp con el mensaje estructurado listo para enviar.

---

## 🔍 5. Optimización SEO y Rendimiento (Core Web Vitals)

* **Schema JSON-LD:** Metadatos estructurados para `SportsActivityLocation` con coordenadas geográficas, horarios y datos de contacto para Google Maps y motores de búsqueda.
* **Open Graph & Twitter Cards:** Previsualización enriquecida con imagen oficial y descripción al compartir la web por redes sociales y WhatsApp.
* **Lazy Loading:** `loading="lazy"` en todas las imágenes secundarias para acelerar la carga inicial.
* **Archivos Locales:** Sin dependencias externas pesadas, fuentes optimizadas y scripts nativos sin frameworks redundantes.

---

## 🚀 6. Publicación y Despliegue

* **Alojamiento:** GitHub Pages (Despliegue automático en la rama `main`).
* **URL de Producción:** [https://adrianer1985.github.io/fns-padel-academy/](https://adrianer1985.github.io/fns-padel-academy/)
* **Repositorio:** [https://github.com/adrianer1985/fns-padel-academy](https://github.com/adrianer1985/fns-padel-academy)
* **Dominio previsto:** `fnspadelacademy.com` (sin guion) se usará cuando esté comprado, conectado y accesible. Hasta entonces, las etiquetas canónicas, el sitemap y los metadatos sociales deben apuntar a la URL activa de GitHub Pages.

---

## 🔎 7. Revisión SEO — 18/09/2026

* Añadidos `robots.txt` y `sitemap.xml`, incluyendo las imágenes principales.
* Corregida temporalmente la URL canónica para que apunte a la web realmente publicada.
* Open Graph y Twitter Cards usan una imagen social de 1200 × 630 px y URLs absolutas.
* Datos estructurados actualizados con la dirección confirmada: Travesía Santa Rosalía Maqueda, s/n, 29591 Málaga.
* Imágenes principales convertidas a WebP y redimensionadas, manteniendo los originales como respaldo.
* Añadidas dimensiones explícitas y carga diferida a las imágenes secundarias para mejorar estabilidad y velocidad.
