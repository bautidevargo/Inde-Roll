# Inde Roll - Guía de Contribución

## Estándares de Código

Este proyecto mantiene altos estándares de calidad y claridad. Por favor, sigue estas pautas al contribuir.

### HTML

- Usa etiquetas semánticas (`<section>`, `<article>`, `<nav>`, etc.)
- Siempre incluye atributos `alt` descriptivos en imágenes
- Usa `aria-label` en botones y controles interactivos
- Mantén la estructura de indentación consistente (2 espacios)
- Una sección por línea en bloques grandes

### CSS

- Solo usa Tailwind CSS para estilos (no CSS personalizado innecesario)
- Los estilos custom van en `css/globals.css`
- Agrupa propiedades lógicamente en CSS personalizado
- Usa variables CSS para valores repetidos
- Comenta secciones complejas

### JavaScript

- Usa ES Modules (`import`/`export`)
- Mantén funciones pequeñas y enfocadas
- Comenta la lógica no obvia
- Usa nombres descriptivos para variables y funciones
- Evita variables globales
- Siempre maneja errores potenciales

### Estructura de Carpetas

```
- css/           → Solo estilos
- js/            → Solo lógica (modular)
- images/        → Organizado por categoría
- pages/         → Nuevas páginas
- public/        → Assets estáticos (robots.txt, sitemap.xml)
```

## Agregar Nuevas Imágenes

1. **Optimiza antes de subir:**
   - JPG: 80-85% de calidad (max 200KB)
   - PNG: Solo si es necesario transparencia
   - WebP: Considera para futuro

2. **Organiza en carpetas:**
   - `images/branding/` → Logo, favicon
   - `images/hero/` → Sección hero
   - `images/projects/{nombre}/` → Proyecto específico
   - `images/team/` → Fotos del equipo
   - `images/process/` → Imágenes del proceso
   - `images/backgrounds/` → Fondos

3. **Actualiza rutas en HTML:**
   ```html
   <img src="/images/carpeta/archivo.jpg" alt="Descripción clara">
   ```

## Agregar Nuevas Páginas

1. Crea carpeta en `pages/`
2. Copia la estructura de `index.html` como base
3. Actualiza metas y canonical
4. Modifica Schema.org si es necesario
5. Usa mismas tipografías y paleta de colores
6. Importa `js/main.js` al final del body

Ejemplo:
```
pages/
└── casos/
    ├── dacks/
    │   └── index.html
    ├── munay/
    │   └── index.html
    └── index.html
```

## Build y Deploy

### Local
```bash
npm install
npm run dev        # Watch en Tailwind
npm run preview    # Servir localmente
```

### Production
```bash
npm run build      # Genera CSS optimizado
```

Vercel despliega automáticamente cuando haces push a `main`.

## Lighthouse Targets

Antes de hacer commit, verifica que los cambios no rompan estos objetivos:

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

Usa Chrome DevTools → Lighthouse para auditar localmente.

## Commits

Sigue conventional commits:

```
feat: Agregar nueva sección
fix: Corregir bug en navegación
docs: Actualizar README
chore: Actualizar dependencias
perf: Optimizar carga de imágenes
```

## Performance

- No agregues librerías innecesarias
- Lazy load en imágenes (+ de 1 en viewport)
- Minimiza JavaScript
- Preload solo recursos críticos
- Cache assets con Vercel

## SEO

- Title: Max 60 caracteres
- Meta description: 155-160 caracteres
- H1: Uno por página
- Links internos con anchor text descriptivo
- Actualiza sitemap.xml si agregas páginas

## Accessibility (WCAG 2.1 AA)

- Contraste mínimo 4.5:1 para texto
- Todos los inputs deben tener labels
- Navegación por teclado funcional
- Focus indicadores visibles
- Alt text en todas las imágenes

## Testing

Antes de hacer merge a `main`:

1. Verifica en múltiples navegadores
2. Test mobile y desktop
3. Lighthouse audit (todos 100 o 95+)
4. Links internos funcionales
5. Formularios (si existen)
6. Velocidad en conexión lenta (throttle)

---

¿Preguntas? Contacta a inderoll2025@gmail.com
