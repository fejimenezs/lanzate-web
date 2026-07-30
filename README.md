# 🚀 LÁNZATE — De la Idea a la Acción

Landing page oficial del programa educativo **LÁNZATE**: un ecosistema que ayuda a profesionales, consultores y emprendedores a convertir su conocimiento y experiencia en un proyecto rentable usando Inteligencia Artificial, estrategia y acción.

Sitio estático de una sola página (HTML + CSS + JS puro, sin frameworks ni build), listo para publicar en cualquier hosting estático.

## 🌍 Sitio en vivo

👉 **[lanzatepaginaweb.vercel.app](https://lanzatepaginaweb.vercel.app/)**

Desplegado en Vercel. Cada push a `main` en este repositorio actualiza el sitio en vivo automáticamente.

## ✨ Qué incluye la página

Recorrido completo pensado como embudo de ventas, de arriba hacia abajo:

1. **Hero** — título, subtítulo y banner de marca.
2. **El problema** — checklist con el que se identifica la audiencia.
3. **Nuestra misión**.
4. **¿Qué es LÁNZATE?** — bloque de video + pilares del método.
5. **¿Para quién es?** — perfiles de audiencia.
6. **Lo que aprenderás** — las 8 misiones del programa (Módulo 0 a 7), con las portadas reales de cada módulo.
7. **Todo lo que recibirás** — bonos e incluidos.
8. **¿Por qué funciona?** — estrategia, acción y tecnología.
9. **Casos de transformación** — espacio reservado para testimonios futuros.
10. **Conoce a tu mentor** — Fausto Jiménez.
11. **Preguntas frecuentes** — acordeón interactivo.
12. **Precio** — tarjeta de oferta con **botón de pago real de Hotmart**.
13. **Llamado final** + **footer** con redes sociales y contacto.

Además:
- Botón flotante de **WhatsApp**.
- Iconos de **Instagram, LinkedIn, YouTube, Facebook y WhatsApp** en el footer, enlazados a los perfiles reales.
- Checkout de **Hotmart** integrado en el botón de compra.
- Animaciones suaves al hacer scroll, menú responsive con hamburguesa en móvil, y acordeón de FAQ sin dependencias externas.

## 🎨 Sistema de marca

| Elemento | Valor |
|---|---|
| Negro profundo | `#0D0D0D` |
| Gris grafito | `#1A1A1A` |
| Blanco | `#FFFFFF` |
| Naranja energía (acento) | `#FF6A00` |
| Tipografía | Montserrat (Google Fonts) |

Basado en la guía de identidad visual incluida en [`referencias/guia-marca.png`](referencias/guia-marca.png).

## 📁 Estructura del proyecto

```
index.html                 → toda la página
assets/
  css/style.css             → estilos y sistema de marca
  js/main.js                → menú móvil, acordeón FAQ, animaciones
  img/                       → banner hero, foto del mentor, logo, etc.
    modulos/                 → portadas de las 8 misiones del programa
referencias/                → brief de contenido original y guía de marca (no se publican en la web)
```

## ✅ Antes de publicar — cosas por completar

Quedaron marcadas en el código con `<!-- EDITAR -->` para que sean fáciles de encontrar:

- [x] Número real de WhatsApp (footer + botón flotante).
- [x] Correo de contacto real.
- [x] URLs reales de Instagram, LinkedIn, YouTube y Facebook.
- [x] Precio real del programa ($147 USD).
- [ ] Número real de clases incluidas.
- [ ] Historia del mentor (texto actual es un borrador).
- [ ] Video de presentación (hoy es un botón "play" de ejemplo).
- [ ] Testimonios reales cuando existan alumnos.

## 🖥️ Cómo verla en local

No requiere instalación. Basta un servidor estático simple, por ejemplo:

```bash
python -m http.server 8090
```

y abrir `http://localhost:8090/index.html`.

## 🌐 Publicarla

Al ser un sitio estático, se puede desplegar directo en **GitHub Pages**, **Netlify**, **Vercel** o cualquier hosting, sin pasos de build.

Actualmente está desplegada en **Vercel**, conectada a este repositorio: cada `git push` a `main` dispara un nuevo deploy automático en [lanzatepaginaweb.vercel.app](https://lanzatepaginaweb.vercel.app/).
