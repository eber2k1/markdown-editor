# MARKDOWN EDITOR

# Descripción

Este proyecto es un editor de Markdown que permite a los usuarios escribir texto en formato Markdown y ver la vista previa HTML en tiempo real. La aplicación es totalmente responsiva, adaptándose a dispositivos móviles y de escritorio con diferentes layouts.

## Características Implementadas

### Historias de Usuario Completadas

#### HU1: Barra de herramientas con botón "Generar Vista Previa"
- Implementación de una barra de herramientas fija en la parte superior
- Layout responsivo que se adapta a dispositivos móviles y desktop
- Zonas claramente definidas para editor y vista previa
- Scroll automático cuando el contenido excede el espacio disponible

#### HU2: Generación de Preview usando Regex
- Transformación de encabezados Markdown a HTML mediante expresiones regulares
- Conversión de listas Markdown a elementos HTML
- Actualización instantánea de la vista previa al hacer clic en el botón

#### HU3: Aplicar estilo dinámico a los encabezados
- Botón "Contrastar Encabezados" que altera el estilo de los encabezados en la vista previa
- Uso de querySelectorAll() para seleccionar y modificar elementos de título
- Aplicación dinámica de estilos diferentes según el nivel de encabezado (h1-h6)
- Funcionalidad de toggle para activar/desactivar el contraste

### Logros Adicionales

#### Transformación de contenido en negrita e itálica
- Detección y conversión de texto en negrita (**texto**) a elementos HTML `<strong>`
- Detección y conversión de texto en itálica (*texto*) a elementos HTML `<em>`
- Soporte para texto en negrita e itálica (***texto***) combinados

#### Contador de caracteres dinámico
- Contador que se actualiza automáticamente al escribir texto en el editor
- Muestra el número total de caracteres en tiempo real

## Estructura del Proyecto

## Tecnologías Utilizadas

- **HTML5**: Estructura base de la aplicación
- **CSS3**: Estilos y layout responsivo mediante Grid
- **JavaScript**: Lógica de conversión Markdown a HTML y manipulación del DOM
- **Tailwind CSS**: Framework CSS para diseño y estilos modernos
- **Font Awesome**: Iconos para mejorar la interfaz de usuario
- **Expresiones Regulares**: Para la conversión de Markdown a HTML

## Cómo Usar

1. Escribe texto en formato Markdown en el panel izquierdo
2. Haz clic en el botón "Vista Previa" para ver el resultado HTML
3. Usa el botón "Contrastar Encabezados" para resaltar los títulos con diferentes colores
4. El contador de caracteres se actualiza automáticamente mientras escribes

## Características de Markdown Soportadas

- Encabezados (# Título a ###### Título)
- Listas (* Elemento)
- Enlaces [texto](url)
- Texto en negrita (**texto**)
- Texto en itálica (*texto*)
- Combinación de negrita e itálica (***texto***)

## Autor

- **eber2k1** - [eber2k1](https://github.com/eber2k1)