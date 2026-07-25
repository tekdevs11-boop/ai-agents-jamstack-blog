# 🤖 Agentes.AI — JAMstack Blog & B2B AI Agents Landing Page (Cero Costo)

Aplicación web estática moderna desarrollada con **Astro**, **Decap CMS**, **Content Collections** y **Netlify Forms**, con un diseño **Tech Minimalist / SaaS Moderno** (Dark mode native, acentos neón violeta/cian y simulador interactivo de Agente IA).

---

## 🚀 Guía de Despliegue 100% Gratuito en Netlify (5 Minutos)

### Paso 1: Subir el proyecto a GitHub
1. Crea un nuevo repositorio **Público** o **Privado** en tu cuenta de GitHub (ej. `agentes-ia-jamstack-blog`).
2. En la terminal dentro de esta carpeta del proyecto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Astro JAMstack Blog + Decap CMS"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

### Paso 2: Conectar con Netlify
1. Ve a [Netlify.com](https://www.netlify.com) e inicia sesión con tu cuenta de **GitHub**.
2. Haz clic en **"Add new site"** → **"Import an existing project"** → Elige **GitHub**.
3. Selecciona tu repositorio recién subido (`agentes-ia-jamstack-blog`).
4. Netlify detectará Astro automáticamente con estas configuraciones:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Presiona **"Deploy site"**. ¡En menos de 1 minuto tu sitio estará publicado con HTTPS gratuito!

---

## 🔑 Paso 3: Activar Decap CMS (Panel `/admin` en 2 clics)

Para poder administrar tus publicaciones y subir imágenes desde `https://tu-sitio.netlify.app/admin`:

1. En el panel de control de tu sitio en **Netlify**:
   - Ve a **Site configuration** → **Identity**.
   - Haz clic en **"Enable Identity service"**.
2. Desplázate hacia abajo hasta la sección **Services** → **Git Gateway**:
   - Haz clic en **"Enable Git Gateway"** y conecta con tu cuenta de GitHub.
3. En la sección **Registration preferences**:
   - Puedes dejarlo en *Open* para registrarte tú mismo la primera vez y luego cambiarlo a *Invite only*.
4. **¡Listo!** Ahora ve a `https://tu-sitio.netlify.app/admin`:
   - Haz clic en **"Sign up"** o ingresa con tu correo.
   - Podrás crear, editar, borrar entradas de blog y subir imágenes. Cada guardado hará un `git commit` automático en tu repositorio.

---

## 📩 Paso 4: Recepción de Leads (Formularios Gratuitos)

El formulario en la página `/producto` ya incluye los atributos de **Netlify Forms** (`data-netlify="true"`).

Cada vez que un cliente solicite una demostración o complete sus datos:
1. Recibirás una notificación instantánea.
2. Los datos del prospecto quedarán guardados en **Netlify Dashboard** → **Forms** → `b2b-lead-capture`.

---

## 🛠️ Comandos de Desarrollo Local

Si deseas probar el proyecto localmente en tu computadora:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (validación de errores de compilación)
npm run build
```

---

## 🎨 Estructura de Archivos
- `src/content/blog/`: Artículos en Markdown.
- `src/content/config.ts`: Validación de esquemas con Zod.
- `public/admin/config.yml`: Configuración de colecciones del CMS.
- `src/components/AgentChatMockup.astro`: Widget interactivo de demostración de Agente IA.
- `src/pages/producto.astro`: Landing page de conversión de productos digitales.
