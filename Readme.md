# Shopify Simulator Landing Page – Gradiweb Technical Test

Este es el resultado de mi prueba técnica para Gradiweb usando el framework Shopify Simulator. El objetivo fue construir una landing page **responsiva y pixel-perfect** basada en los diseños entregados para desktop y mobile.

---

## 🎯 Objetivo

Construir una landing page con:

- HTML semántico y accesible.
- CSS modular usando **BEM**.
- JavaScript limpio y reutilizable (sin frameworks).
- Scroll y animaciones suaves.
- Datos dinámicos desde `settings_data.json`.

---

## ✅ Secciones implementadas

### 1. **Top Bar**
- Comportamiento tipo marquee animado.
- Texto dinámico desde `settings_data.json`.
- Efecto de filtro morado a los lados.

### 2. **Header**
- Sticky con fondo transparente al hacer scroll.
- Logo, separador y medios de pago (centrado).
- Links con scroll interno: "All products" y "Collections".
- Botón de carrito presentacional.
- Responsivo en pantallas pequeñas con menú hamburguesa.

### 3. **Hero Banner**
- Imagen con hover animado y botón dinámico.
- Texto y enlace del botón desde `settings_data.json`.
- Marquee inferior animado con estrellas y texto dinámico.

### 4. **Carrusel de Productos**
- Muestra 4 productos visibles + 6 ocultos.
- Botón "View All" revela los ocultos con JavaScript.
- Hover animado que hace zoom a la imagen.
- Renderiza nombre, precio y tags del producto.

### 5. **Últimas Colecciones**
- Título centrado y decorado con estrellas ✦.
- Muestra solo colecciones creadas desde el 2025-01-01.
- Fondo con `radial-gradient` dinámico y difuminado.

### 6. **Footer**
- Columna izquierda: logo y textos dinámicos.
- Columna central: links principales y secundarios (mayúsculas desde Liquid, no CSS).
- Columna derecha: input de newsletter, íconos de redes sociales.
- 100% responsive.

---

## 💡 Extras añadidos

- 🎨 Animaciones en scroll con AOS.
- ✨ Hover y transiciones suaves para mejorar UX.
- 🔍 SEO básico: `meta`, `title`, `favicon`, `alt` en imágenes.
- 📦 Código modular y limpio.
- 🧪 Buenas prácticas en estructura CSS y JS.

---

## 🛠️ Stack técnico

- Liquid (templating)
- HTML5 semántico
- SCSS usando BEM
- Vanilla JavaScript (sin frameworks)
- Webpack (optimizaciones propias añadidas)

---

## 📂 Estructura del proyecto

```
├── sections/
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-banner.liquid
│   ├── products-carousel.liquid
│   └── lastest-collection.liquid
├── assets/
│   └── imágenes y logos
├── src/
│   ├── styles/
│   └── scripts/
├── settings_data.json
├── index.html
└── README.md
```

---

## 🚀 Cómo ejecutar localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/Shopify-simulator-Framework.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Para generar build de producción:
   ```bash
   npm run build
   ```

---

## 📬 Comentarios finales

Esta prueba me permitió demostrar atención al detalle, adaptación a tecnologías nuevas como Liquid y trabajar bajo estándares de calidad y diseño visual. ¡Gracias por la oportunidad!

## 👨‍💻 Autor

**Nicolás Díaz**  
Frontend Developer  
[GitHub](https://github.com/nicolas1102) – [LinkedIn](https://www.linkedin.com/in/nicolas-diaz-vargas/)

---
