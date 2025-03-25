# 📝 MARKDOWN EDITOR

<div align="center">
  
![GitHub last commit](https://img.shields.io/github/last-commit/eber2k1/markdown-editor?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/eber2k1/markdown-editor?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/eber2k1/markdown-editor?style=flat-square)
  
</div>

## 🚀 Descripción

Este proyecto es un editor de Markdown que permite a los usuarios escribir texto en formato Markdown y ver la vista previa HTML en tiempo real. La aplicación es totalmente responsiva, adaptándose a dispositivos móviles y de escritorio con diferentes layouts.

## ✨ Características Implementadas

### Editor en tiempo real
- ✅ Un textarea permite escribir texto en formato Markdown.
- ✅ La vista previa se actualiza automáticamente al escribir.

### Botones de Formato
- ✅ Negrita: Convierte el texto seleccionado a **negrita**.
- ✅ Cursiva: Convierte el texto seleccionado a *cursiva*.
- ✅ Sin formato: Elimina el formato del texto seleccionado.

### Botón de Contraste de Encabezados
- ✅ Aplica estilos visuales a encabezados (# H1, ## H2, etc.), mejorando la visibilidad.
- ✅ Alterna entre estilos contrastados y normales.

### Borrado de Texto
- ✅ Botón de Borrar Texto: Elimina todo el contenido del editor.

### Contador de Caracteres
- ✅ Muestra en tiempo real la cantidad de caracteres escritos en el editor.

### Conversión de Markdown a HTML
El texto ingresado en Markdown se transforma en HTML, aplicando:

- ✅ Conversión de encabezados (H1, H2, H3, etc.)
- ✅ Conversión de listas (ordenadas y desordenadas) 
- ✅ Conversión de enlaces [Texto](URL).
- ✅ Conversión de negrita y cursiva (**negrita** y *cursiva*).
- ✅ Conversión de código con triple comilla invertida (``` código ```).

## 📂 Estructura del Proyecto

```
markdown-editor/
├── 📄 index.html          # Estructura principal y UI de la aplicación
├── 📁 css/
│   └── 📄 styles.css      # Estilos CSS para layout y estructura básica
├── 📁 js/
│   ├── 📄 app.js          # Controla eventos y funciones principales, como formato de texto y actualización de la vista previa.
│   ├── 📄 blocks.js       # Gestiona estilos para encabezados y el contador de caracteres.
│   ├── 📄 format.js       # Convierte texto Markdown a HTML aplicando estilos y formatos.
│   └── 📄 lists.js        # Maneja la conversión de listas ordenadas y desordenadas en la vista previa.
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
2. 👁️ La vista previa se actualiza automáticamente al escribir.
3. 🎭 Usa el botón "Contrastar Encabezados" para resaltar los títulos con diferentes colores
4. 🔢 El contador de caracteres se actualiza automáticamente mientras escribes
5. 🖍️ Utiliza los botones de formato para aplicar negrita, cursiva o eliminar formato.
6. 🗑️ Usa el botón "Borrar texto" para limpiar el contenido del editor.

## 📌 Características de Markdown Soportadas

| Característica | Sintaxis Markdown | Resultado HTML |
|----------------|-------------------|---------------|
| Encabezados    | `# Título`        | `<h1>Título</h1>` |
| Enlaces        | `[texto](url)`    | `<a href="url">texto</a>` |
| Negrita        | `**texto**`       | `<strong>texto</strong>` |
| Itálica        | `*texto*`         | `<em>texto</em>` |
| Negrita+Itálica| `***texto***`     | `<strong><em>texto</em></strong>` |
| Codigo         | `` `código` ``    | `<code>código</code>` |
| Listas Ordenadas| `1. Elemento`     | `<ol><li>Elemento</li></ol>` |
| Listas Desordenadas| `* Elemento`     | `<ul><li>Elemento</li></ul>` |

## 👨‍💻 Autor

<div align="center">
  <a href="https://github.com/eber2k1">
    <img src="https://github.com/eber2k1.png" width="100px" alt="eber2k1" style="border-radius:50%">
    <br>
    <sub><b>eber2k1</b></sub>
  </a>
</div>