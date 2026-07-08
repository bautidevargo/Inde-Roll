# Notas Técnicas - Inde Roll

Documentación técnica para desarrolladores y optimización del proyecto.

## Arquitectura

### Stack Tecnológico
- **Lenguaje:** HTML5 + CSS3 + JavaScript ES Modules
- **CSS Framework:** Tailwind CSS 3.4+
- **Build Tool:** PostCSS + Tailwind CLI
- **Hosting:** Vercel (static)
- **Versionamiento:** Git + GitHub

### Sin Dependencias Runtime
El proyecto NO usa frameworks (React, Vue, Next.js). Es 100% vanilla:
- Menos JavaScript = Mejor performance
- Menor huella de carbono
- Más control sobre el código
- Más fácil de mantener

## Performance Targets

```
Lighthouse Audit Goals:
├─ Performance: 95+
├─ Accessibility: 100
├─ Best Practices: 100
└─ SEO: 100
```

### Core Web Vitals (Google 2024)
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## Optimizaciones Implementadas

### CSS
- Tailwind CSS purged (solo clases utilizadas)
- Build genera CSS minificado (~12KB)
- PostCSS + Autoprefixer para compatibilidad
- No CSS-in-JS (más rápido)

### JavaScript
- ES Modules (lazy loading por navegador)
- main.js divide en componentes
- Lazy initialization con DOMContentLoaded
- Passive event listeners en scroll

### Imágenes
- Lazy loading nativo (`loading="lazy"`)
- Formato JPG con compresión 80-85%
- Dimensiones explícitas (previene CLS)
- Alt text descriptivo (accesibilidad + SEO)

### Fuentes
- Google Fonts con preconnect
- font-display: swap (evita FOUT)
- Solo 2 tipografías (Anton + Hanken Grotesk)
- Subconjuntos minimales

### Cache (Vercel Headers)
```
CSS:     public, max-age=31536000, immutable (1 año)
Images:  public, max-age=31536000, immutable (1 año)
JS:      public, max-age=31536000, immutable (1 año)
HTML:    default (cache-control: max-age=0, must-revalidate)
```

## Estructura de Tailwind

### Configuración Personalizada
`tailwind.config.js` extiende el tema con:
- **Colores:** Paleta Material Design 3
- **Tipografía:** Escalas de tamaño de letra personalizadas
- **Espaciado:** Márgenes desktop/mobile, gaps de sección
- **Bordes:** Radio personalizado

### Clases Personalizadas
```css
@apply class-name
```

Evita crear nuevas clases. Usa Tailwind directives en `css/globals.css` si es necesario.

## SEO Strategy

### Meta Tags
- Title: 50-60 caracteres máximo
- Description: 155-160 caracteres
- Canonical: Presente en cada página
- robots: index, follow

### Schema.org
```json
{
  "@type": "Organization",
  "name": "Inde Roll",
  "url": "https://inderoll.com",
  "description": "...",
  "sameAs": [...],
  "contactPoint": {...}
}
```

### Robots.txt & Sitemap
- robots.txt: Permite todos, delay en crawlers agresivos
- sitemap.xml: URLs prioritarias y frecuencias

### Open Graph & Twitter Cards
Para compartir en redes sociales con preview correcto.

## Accesibilidad (WCAG 2.1 AA)

### Color & Contraste
- Mínimo 4.5:1 en texto normal
- Material Design 3 colors cumplen
- No confiar solo en color

### Semántica
```html
<header>, <nav>, <main>, <section>, <article>, <footer>
```

### Atributos ARIA
- `aria-label`: Botones sin texto
- `aria-expanded`: Controles expandibles
- `role`: Solo cuando semántica no existe
- `aria-hidden`: En decoración

### Navegación
- Tab order lógico
- Focus visible siempre
- Smooth scroll compatible

## Mobile Responsiveness

### Breakpoints
- Mobile-first approach
- md: 768px (tablet +)
- lg: 1024px (desktop +)

### Touch Targets
- Mínimo 48x48px (accesibilidad)
- Tapping/gestures testeadas
- Sin hover-only content

## Deployment Vercel

### Configuración
`vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".",
  "headers": [...]
}
```

### Proceso
1. Push a `development` → Preview auto
2. Merge a `main` → Production auto
3. Vercel ejecuta `npm run build`
4. Sirve archivos estáticos

### Variables de Entorno
- Ninguna necesaria (sitio estático)
- Si se agrega backend: .env.local

## Testing Local

### Lighthouse CLI
```bash
npm install -g lighthouse
lighthouse https://localhost:8000 --view
```

### WebPageTest
https://www.webpagetest.org/
- Profiling real de red/CPU
- Waterfall charts

### Browsers
- Chrome DevTools (main)
- Firefox Developer Tools (alt)
- Safari (macOS dev)
- Edge (Windows)

## Futuros Mejoras

### Bajo Costo
- [ ] Preload críticas (si aplica)
- [ ] DNS prefetch (3er party)
- [ ] Resource hints
- [ ] Image optimization avanzada

### Mediano Costo
- [ ] Blog (estático con 11ty o Hugo)
- [ ] CMS headless (opcional)
- [ ] Formularios con Formspree/Basin
- [ ] Analytics con Fathom

### Alto Costo
- [ ] Backend Node.js
- [ ] Base de datos
- [ ] Admin panel
- [ ] Integración CRM

## Debugging

### Network Tab
- Verifica waterfall de recursos
- Identifica requests lentos
- Cachés correctamente

### Console
- `document.querySelectorAll()` test
- Event listeners debug
- Network requests manual

### Performance Tab
- Record sección
- Identifica jank
- Long tasks (JS)

## Estándares de Código

### HTML
- Indentación 2 espacios
- Semántica antes que divs
- alt text en imágenes
- Eventos unobtrusive

### CSS/Tailwind
- Utility-first
- Orden: spacing, colors, effects
- Mobile-first
- Comentar lógica compleja

### JavaScript
- ES6+
- Modules
- Nombres descriptivos
- Funciones pequeñas

## Security

### XSS Prevention
- Sanitize user input (si hay)
- CSP headers
- No innerHTML innecesario

### HTTPS
- Vercel fuerza HTTPS
- No mixed content
- HSTS headers

## Monitoreo

### Real User Monitoring (RUM)
- Analytics (Google, Fathom)
- Error tracking
- Performance trends

### Alertas
- Lighthouse score < 90
- Error rate > 1%
- Load time > 3s

---

**Preguntas técnicas?** Abre issue o contacta: inderoll2025@gmail.com
