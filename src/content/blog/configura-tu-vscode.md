---
title: "Deja de tener tu VSCode como un Bot"
tags: ["Productividad"]
description: "No es lógico que en 2024 esté usando VSCode con las configuraciones por defecto."
image:
  src: "/images/blogs/vscode.webp"
  alt: "Foto de mi VSCode"
publishDate: 2024-02-23T12:00:00-00:00
---

**¿Me vas a decir que no te gusta como se ve el VSCode de arriba?**
Minimalista, sin cosas molestas en la pantalla, una muy buena visibilidad del código y del directorio de trabajo.
Si no te gusta la apariencia de tu VSCode este post te va a servir. Da un paso hacia delante e **incrementa tu productividad**.

## Tabla de contenidos

## Requisitos

De primera cabe recalcar que lo que voy a decir son recomendaciones, cada uno es libre de elegir y modificar lo que desee. Todo se configura en un archivo JSON.

### Fuente del código

Esta fuente es utilizada unicamente en el código, hace tiempo vengo utilizando la misma fuente y no veo otra que pueda desplazarla: [JetBrains Mono](https://www.jetbrains.com/es-es/lp/mono/)

### Fuente del editor

Esta otra fuente es utilizada en todo las demás características del editor, tanto como en la vista de las carpetas, la fuente de la terminal integrada, etc. Recomiendo fuertemente la fuente [Inter](https://fonts.google.com/specimen/Inter), si sos usuario de Windows viene instalada por defecto, de lo contrario hay que instalarla.

### Tema

En la captura de pantalla de arriba estoy utilizando el tema [Codely Dark](https://marketplace.visualstudio.com/items?itemName=codely.codely-theme), sin embargo el tema no es la énfasis de este post, es algo secundario y bastante subjetivo. Cualquier tema que no te queme los ojos viene bien, otras alternativas pueden ser: [Gruvbox Dark Hard](https://marketplace.visualstudio.com/items?itemName=tomphilbin.gruvbox-themes) o [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

## Instalar extension APC Customize

Nativamente VSCode no te ofrece la posibilidad de elegir que fuente queres utilizar en el editor, por lo tanto necesitamos una extension: [Apc Customize](https://marketplace.visualstudio.com/items?itemName=drcika.apc-extension) la cual nos permite mediante codigo CSS y configuraciones de Electron, configurar un paso mas allá nuestro editor.

### Activar la extension

Hay que abrir el menu de configuración, presiona <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> y escribir _Enable Apc extension_, probablemente pidas que reinicies el VSCode, hacelo.

## Copiar el archivo de configuración

Nuevamente, presionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> y escribiendo Open User Settings (JSON) accedemos al archivo de configuración, hay que pegar lo de abajo al final del archivo.

```json
  "window.titleBarStyle": "native",
  "apc.electron": {
    "titleBarStyle": "hidden",
    "trafficLightPosition": {
      "x": 20,
      "y": 10
    },
    "frame": true
  },
  "apc.header": {
    "height": 36
  },
  "apc.listRow": {
    "height": 25
  },
  "apc.font.family": "Inter",
  "apc.stylesheet": {
    "body": "font-weight: semibold;",
    ".title-label > h2": "display: none",
    ".editor-actions": "display: none",
    ".nosidebar .inline-tabs-placeholder": "width: 100px",
    ".pane-header": "padding: 0px 8px",
    ".pane-body": "padding: 0px 0px",
    ".split-view-view:first-child .pane-header": "display: none !important;",
    ".monaco-list-row": "border-radius: 4px;",
    ".monaco-workbench .monaco-list:not(.element-focused):focus:before": "display: none;"
  },
  "explorer.sortOrder": "foldersNestsFiles",
  "explorer.fileNesting.patterns": {
    "package.json": ".eslint*, prettier*, tsconfig*, vite*, pnpm-lock*, bun.lockb",
    "tailwind.config.js": "tailwind.config*, postcss.config*",
    ".env.local": ".env*",
    ".env": ".env*"
  },
  "explorer.fileNesting.enabled": true,
  "editor.semanticHighlighting.enabled": false,
  "terminal.integrated.gpuAcceleration": "off",
  "editor.fontLigatures": true,
```

Apenas guardemos los cambios nos dirá que se debe reiniciar el editor para que surgan los efectos, luego del reinicio tendremos nuestro VSCode con una apariencia mejorada. Si quieres revertir el efecto debes borrar lo que pegaste en el archivo de configuración.
