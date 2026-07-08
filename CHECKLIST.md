# Pre-Production Checklist

Esta es la lista de verificación completa antes de hacer merge a `main` y desplegar en producción.

## 🚀 Performance (Lighthouse: 95+)

- [ ] Score en Lighthouse Performance ≥ 95
- [ ] Core Web Vitals:
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] CSS tamaño final < 15KB (minificado)
- [ ] Imágenes optimizadas (WebP fallback JPG)
- [ ] No render-blocking resources
- [ ] Google Fonts con preconnect

## ♿ Accessibility (Lighthouse: 100)

- [ ] Score en Lighthouse Accessibility = 100
- [ ] WCAG 2.1 AA cumplido:
  - [ ] Contraste 4.5:1 para texto
  - [ ] Alt text descriptivo en todas las imágenes
  - [ ] aria-label en botones sin texto
  - [ ] aria-expanded en controles interactivos
  - [ ] Navegación por teclado Tab totalmente funcional
  - [ ] Focus visible en todos los elementos interactivos
  - [ ] Colores no solo para comunicar información
- [ ] Semántica HTML correcta
- [ ] Labels asociados a inputs (cuando aplique)

## 🔍 SEO (Lighthouse: 100)

- [ ] Score en Lighthouse SEO = 100
- [ ] Meta tags completos:
  - [ ] `<title>` (50-60 caracteres)
  - [ ] `<meta name="description">` (155-160 caracteres)
  - [ ] `<meta name="robots">` correcto
  - [ ] `<link rel="canonical">` presente
- [ ] Open Graph:
  - [ ] og:title, og:description, og:image
  - [ ] og:image resolución 1200x630px
  - [ ] og:type, og:url, og:locale
- [ ] Twitter Cards (si aplica):
  - [ ] twitter:title, twitter:description, twitter:image
- [ ] Schema.org JSON-LD:
  - [ ] Organization schema correcto
  - [ ] LocalBusiness si aplica
  - [ ] BreadcrumbList para navegación
- [ ] robots.txt presente y correcto
- [ ] sitemap.xml presente y validado
- [ ] Favicon presente (múltiples formatos)
- [ ] apple-touch-icon presente
- [ ] site.webmanifest presente

## 🛠️ Best Practices (Lighthouse: 100)

- [ ] Score en Lighthouse Best Practices = 100
- [ ] No console errors
- [ ] No console warnings
- [ ] HTTPS en producción
- [ ] No broken links
- [ ] Ninguna librería deprecated
- [ ] CSP headers configurados
- [ ] Cookies policy cumplida

## 🎨 Design & UX

- [ ] Diseño visual sin cambios del original
- [ ] Responsive en mobile, tablet, desktop
- [ ] Estados hover correctos
- [ ] Transiciones suave (duration correcta)
- [ ] Spacing consistente
- [ ] Tipografía legible en todos los tamaños
- [ ] Colores consistentes
- [ ] Sin elementos cortados en responsive

## 🖼️ Imágenes

- [ ] Todas las imágenes optimizadas
- [ ] JPG con 80-85% calidad
- [ ] PNG solo si necesita transparencia
- [ ] No hay imágenes URLs externas
- [ ] Lazy loading implementado
- [ ] Dimensiones explícitas (width, height)
- [ ] Alt text descriptivo
- [ ] Formatos modernos cuando aplique

## 📱 Mobile Testing

- [ ] Menu mobile funcional
- [ ] Touch targets ≥ 48x48px
- [ ] Viewport meta tag correcto
- [ ] Sin horizontal scroll
- [ ] Legible sin zoom
- [ ] Testeo en:
  - [ ] iPhone 12/13/14
  - [ ] Android (Chrome)
  - [ ] Tablet (iPad)

## 🔗 Links & Navigation

- [ ] Todos los links internos funcionan
- [ ] Smooth scroll funciona
- [ ] Anchor links (#sections) funcionan
- [ ] Links externos abren en pestaña nueva
- [ ] rel="noopener noreferrer" en links externos
- [ ] Sitemap actualizado con nuevas páginas

## 📊 Analytics & Tracking

- [ ] Google Analytics configurado (si aplica)
- [ ] Meta Pixel configurado (si aplica)
- [ ] Eventos tracked correctamente
- [ ] No se pierde datos de conversión

## 🌍 Vercel Deployment

- [ ] vercel.json configurado correctamente
- [ ] Environment variables configuradas
- [ ] Build command funciona localmente
- [ ] Redirecciones configuradas (si aplica)
- [ ] Headers de cache optimizados
- [ ] Preview deployment sin errores

## 📝 Documentación

- [ ] README.md actualizado
- [ ] CONTRIBUTING.md actualizado
- [ ] Código comentado (cuando es necesario)
- [ ] Commits con mensajes descriptivos

## 🧪 Browser Testing

- [ ] Chrome (última versión)
- [ ] Firefox (última versión)
- [ ] Safari (macOS + iOS)
- [ ] Edge (última versión)
- [ ] Mobile browsers

## ⚡ Performance Optimization

- [ ] Minificación CSS completa
- [ ] JavaScript modular y sin inline
- [ ] Tailwind CSS purged (solo clases usadas)
- [ ] Preload crítico (si aplica)
- [ ] Dns-prefetch configurado
- [ ] Cache busting en assets

## 🔐 Security

- [ ] No secrets en código
- [ ] HTTPS forzado
- [ ] No información sensible visible
- [ ] Form validation en frontend
- [ ] CSRF tokens si hay formularios

## 📋 Final Checks

- [ ] Todas las casillas arriba marcadas
- [ ] Lighthouse audit full score o 95+
- [ ] Revisión visual completa
- [ ] Testing en dispositivo real
- [ ] Aprobación del cliente/stakeholders

---

**Si todo está ✅, está listo para merge a `main` y deploy a producción.**

Para auditar localmente:
```bash
# Build
npm run build

# Servidor local
npm run preview

# Abre Chrome DevTools → Lighthouse y audita
```
