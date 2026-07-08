# Inde Roll - Landing Page

Dirección Estratégica & Creatividad Aplicada para marcas que buscan crecer.

## 🚀 Inicio Rápido

### Requisitos
- Node.js 20.11.0 (LTS)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/bautidevargo/Inde-Roll.git
cd Inde-Roll

# Cambiar a rama development
git checkout development

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo con watch en Tailwind
npm run dev

# En otra terminal, servir los archivos
npm run preview
```

Abre `http://localhost:8000` en tu navegador.

### Build para Producción

```bash
npm run build
```

Esto genera el CSS optimizado y minificado en `css/tailwind.css`.

## 📁 Estructura del Proyecto

```
Inde-Roll/
├── index.html              # Landing principal con SEO completo
├── pages/                  # Futuras páginas (casos, servicios, blog)
│   ├── casos/
│   ├── servicios/
│   └── blog/
├── css/
│   ├── globals.css        # Estilos globales (entrada para Tailwind)
│   └── tailwind.css       # CSS compilado (generado por build)
├── js/
│   ├── main.js           # Entrada principal y inicialización
│   └── components/
│       ├── smooth-scroll.js   # Navegación suave entre secciones
│       ├── parallax.js        # Efecto parallax en imágenes
│       └── mobile-menu.js     # Menú responsive mobile
├── images/
│   ├── branding/         # Logo, favicon, og-image
│   ├── hero/             # Imágenes de sección hero
│   ├── projects/         # Imágenes de proyectos (Dacks, Munay, NextStay)
│   ├── team/             # Fotos del equipo
│   ├── process/          # Imágenes del proceso
│   ├── backgrounds/      # Imágenes de fondo
│   └── icons/            # Iconos SVG
├── public/
│   ├── robots.txt        # Configuración para crawlers
│   ├── sitemap.xml       # Mapa del sitio para SEO
│   └── site.webmanifest  # Manifiesto PWA
├── package.json          # Dependencias y scripts
├── tailwind.config.js    # Configuración de Tailwind
├── postcss.config.js     # Configuración de PostCSS
├── vercel.json          # Configuración de deploy en Vercel
└── README.md            # Este archivo
```

## 🎨 Diseño y Estilos

- **Framework CSS**: Tailwind CSS 3.4+
- **Tipografías**: Anton (display) y Hanken Grotesk (body)
- **Diseño**: Material Design 3
- **Colores**: Paleta personalizada definida en `tailwind.config.js`

## 🚀 Performance

Objetivos de Lighthouse:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Optimizaciones aplicadas:
- Tailwind CSS purged (solo estilos utilizados)
- Google Fonts con preconnect y font-display: swap
- Lazy loading en imágenes
- Cache headers optimizados en Vercel
- Estructuras de datos Schema.org

## ♿ Accesibilidad

- Semántica HTML5 correcta
- Atributos `alt` descriptivos en todas las imágenes
- `aria-label` en botones sin texto
- `aria-expanded` en menú mobile
- Navegación por teclado totalmente funcional
- Contraste de colores WCAG AA+

## 🔍 SEO

Completamente optimizado:
- Meta tags (title, description, robots, canonical)
- Open Graph (redes sociales)
- Twitter Cards
- Schema.org JSON-LD (Organization)
- robots.txt y sitemap.xml
- Heading hierarchy correcta
- URLs amigables

## 📱 Responsive

- Breakpoints: mobile (< 768px) y desktop (≥ 768px)
- Menú mobile con toggle
- Grid adaptable
- Tipografía escalable
- Touch-friendly buttons

## 🔧 Tecnología

- **HTML5** - Semántica moderna
- **CSS** - Tailwind + PostCSS + Autoprefixer
- **JavaScript** - ES Modules, vanilla JS (sin frameworks)
- **Deploy** - Vercel (static hosting)

## 📦 Scripts Disponibles

```bash
npm run dev      # Iniciar watch en Tailwind durante desarrollo
npm run build    # Compilar y minificar CSS para producción
npm run preview  # Servir archivos localmente (http.server)
```

## 🌐 Deployment en Vercel

El proyecto está completamente configurado para Vercel:

1. Conecta tu repositorio en vercel.com
2. Selecciona la rama `development` (o `main` cuando esté lista)
3. Vercel detectará automáticamente `package.json` y ejecutará `npm run build`
4. El sitio se desplegará en pocos segundos

**No requiere configuración adicional.**

## 📝 Futuro del Proyecto

La estructura está preparada para agregar fácilmente:

- Casos de estudio individuales (`pages/casos/dacks/index.html`)
- Blog (`pages/blog/index.html` + artículos)
- Páginas de servicios (`pages/servicios/index.html`)
- Landing pages adicionales
- Formularios de contacto
- Integración con CMS
- Analytics y Meta Pixel

## 📄 Licencia

© 2026 Inde Roll. Todos los derechos reservados.

## 👥 Equipo

- **Bautista Devargo** - Director Creativo
- **Maximiliano Mammarelli** - Director Audiovisual
- **Desire Pressaco** - Community Manager

---

**Preguntas o sugerencias?** Contacta a inderoll2025@gmail.com
