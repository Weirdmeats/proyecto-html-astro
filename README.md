# PROYECTO-HTML IMPORTADO
Este proyecto fue realizado con el fin de crear una página con el framework "Astro" y estilos con "Tailwind", que sea funcional, responsive, es decir, que sirva en todas las pantallas, ya sean celulares, tablets o computadores. También se hizo una reforma del código, volviendo el código más "DRY". ¿Y qué significa que sea DRY? Significa Don't Repeat Yourself, es decir: no te repitas. Esto fue posible gracias a la ayuda de Astro al ocupar componentes reutilizables, separando y desglosando el código para optimizarlo.


ASTRO+TAILWIND4/VITE
# Que contiene el proyecto?
El proyecto contiene HTML, ASTRO, JAVASCRIPT, CSS con TAILWIND 4
Consta de 4 páginas principales, una base de datos JSON API de prueba, componentes reutilizables, código optimizado, estilos y fuentes personalizadas.

# SIMULAMOS UNA API CON JSONPLACEHOLDER MEDIANTE EL SIGUENTE LINK
"https://my-json-server.typicode.com/Weirdmeats/products-json/products"

# Como inicializar el proyecto
Abrir un IDE de su agrado, abrir la terminar y escribir los siguentes pasos:

1./ Para instalar el proyecto:
    npm install

2./ Para hacer funcionar el proyecto:
    npm run dev




Estructura del Proyecto

```
PROYECTO-HTML-ASTRO/
├── public/
├── src/
│   ├── assets/
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   ├── components/
│   │   ├── FooterComponent.astro
│   │   ├── HeaderComponent.astro
│   │   ├── MenuDropCategoryComponent.astro
│   │   ├── MenuNavComponent.astro
│   │   ├── MenuRedesComponent.astro
│   │   ├── ProductCardComponent.astro
│   │   ├── ProductDetailComponent.astro
│   │   ├── ParrafoComponent.astro
│   │   ├── TitlesComponent.astro
│   ├── data/
│   │   ├── ItemsMenu.ts
│   │   ├── #products.json #NO OCUPADO, SOLO ESTA DE REFERENCIA, SIMULAMOS UNA API CON JSONPLACEHOLDER
│   ├── layouts/
│   │   ├── Layout.astro
│   ├── pages/
│   │   ├── [slug].astro
│   │   ├── Blog.astro
│   │   ├── Contacto.astro
│   │   ├── index.astro
│   │   ├── Servicios.astro
│   ├── styles/
│   │   ├── global.css
├── .env
├── .gitignore
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
```
# LINK DEL JSON DEL GiTHUB

"https://github.com/Weirdmeats/products-json"