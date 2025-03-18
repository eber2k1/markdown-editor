# 📝 MARKDOWN EDITOR

<div align="center">
  
![GitHub last commit](https://img.shields.io/github/last-commit/eber2k1/markdown-editor?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/eber2k1/markdown-editor?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/eber2k1/markdown-editor?style=flat-square)
  
</div>

## 🚀 Descripción

Este proyecto es un editor de Markdown que permite a los usuarios escribir texto en formato Markdown y ver la vista previa HTML en tiempo real. La aplicación es totalmente responsiva, adaptándose a dispositivos móviles y de escritorio con diferentes layouts.

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=Markdown+Editor+Preview" alt="Markdown Editor Preview" width="80%">
</div>

## ✨ Características Implementadas

### 📋 Historias de Usuario Completadas

#### 🔍 HU1: Barra de herramientas con botón "Generar Vista Previa"
- ✅ Implementación de una barra de herramientas fija en la parte superior
- ✅ Layout responsivo que se adapta a dispositivos móviles y desktop
- ✅ Zonas claramente definidas para editor y vista previa
- ✅ Scroll automático cuando el contenido excede el espacio disponible

#### 🔄 HU2: Generación de Preview usando Regex
- ✅ Transformación de encabezados Markdown a HTML mediante expresiones regulares
- ✅ Conversión de listas Markdown a elementos HTML
- ✅ Actualización instantánea de la vista previa al hacer clic en el botón

#### 🎨 HU3: Aplicar estilo dinámico a los encabezados
- ✅ Botón "Contrastar Encabezados" que altera el estilo de los encabezados en la vista previa
- ✅ Uso de querySelectorAll() para seleccionar y modificar elementos de título
- ✅ Aplicación dinámica de estilos diferentes según el nivel de encabezado (h1-h6)
- ✅ Funcionalidad de toggle para activar/desactivar el contraste

### 🌟 Logros Adicionales

#### 💪 Transformación de contenido en negrita e itálica
- ✅ Detección y conversión de texto en negrita (**texto**) a elementos HTML `<strong>`
- ✅ Detección y conversión de texto en itálica (*texto*) a elementos HTML `<em>`
- ✅ Soporte para texto en negrita e itálica (***texto***) combinados

#### 🔢 Contador de caracteres dinámico
- ✅ Contador que se actualiza automáticamente al escribir texto en el editor
- ✅ Muestra el número total de caracteres en tiempo real

## 📂 Estructura del Proyecto

```
markdown-editor/
├── 📄 index.html          # Estructura principal y UI de la aplicación
├── 📁 css/
│   └── 📄 styles.css      # Estilos CSS para layout y estructura básica
├── 📁 js/
│   └── 📄 app.js          # Lógica JavaScript para conversión Markdown a HTML
└── 📄 README.md           # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas

<div align="center">
  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=font-awesome&logoColor=white)
  
</div>

- **HTML5**: Estructura base de la aplicación
- **CSS3**: Estilos y layout responsivo mediante Grid
- **JavaScript**: Lógica de conversión Markdown a HTML y manipulación del DOM
- **Tailwind CSS**: Framework CSS para diseño y estilos modernos
- **Font Awesome**: Iconos para mejorar la interfaz de usuario
- **Expresiones Regulares**: Para la conversión de Markdown a HTML

## 📝 Cómo Usar

1. 🖋️ Escribe texto en formato Markdown en el panel izquierdo
2. 👁️ Haz clic en el botón "Vista Previa" para ver el resultado HTML
3. 🎭 Usa el botón "Contrastar Encabezados" para resaltar los títulos con diferentes colores
4. 🔢 El contador de caracteres se actualiza automáticamente mientras escribes

<div align="center">
  <img src="https://via.placeholder.com/600x300?text=Demo+GIF" alt="Demo GIF" width="60%">
</div>

## 📌 Características de Markdown Soportadas

| Característica | Sintaxis Markdown | Resultado HTML |
|----------------|-------------------|---------------|
| Encabezados    | `# Título`        | `<h1>Título</h1>` |
| Listas         | `* Elemento`      | `<li>Elemento</li>` |
| Enlaces        | `[texto](url)`    | `<a href="url">texto</a>` |
| Negrita        | `**texto**`       | `<strong>texto</strong>` |
| Itálica        | `*texto*`         | `<em>texto</em>` |
| Negrita+Itálica| `***texto***`     | `<strong><em>texto</em></strong>` |

## 👨‍💻 Autor

<div align="center">
  <a href="https://github.com/eber2k1">
    <img src="https://github.com/eber2k1.png" width="100px" alt="eber2k1" style="border-radius:50%">
    <br>
    <sub><b>eber2k1</b></sub>
  </a>
</div>