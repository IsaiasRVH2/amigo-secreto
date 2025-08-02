# 🎁 Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto desarrollada como parte del programa **Oracle Next Education**.

![Amigo Secreto](assets/amigo-secreto.png)

## 📋 Descripción

**Amigo Secreto** es una aplicación que permite a los usuarios crear una lista de amigos y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". Es perfecta para organizar intercambios de regalos en fiestas, reuniones familiares o eventos con amigos.

## ✨ Funcionalidades

- **➕ Agregar nombres**: Los usuarios pueden escribir el nombre de un amigo en el campo de texto y agregarlo a la lista haciendo clic en "Añadir"
- **✅ Validar entrada**: Si el campo está vacío, se mostrará una alerta solicitando un nombre válido
- **📝 Visualizar lista**: Todos los nombres ingresados aparecen en una lista organizada debajo del campo de entrada
- **🎲 Sorteo aleatorio**: Al hacer clic en "Sortear amigo", se selecciona aleatoriamente un nombre de la lista y se muestra el resultado

## 🚀 Cómo usar

1. **Escribir nombre**: Ingresa el nombre de un amigo en el campo de texto
2. **Añadir a la lista**: Haz clic en el botón "Añadir" para agregarlo a la lista
3. **Repetir**: Continúa agregando tantos nombres como desees
4. **Sortear**: Una vez que tengas todos los nombres, haz clic en "Sortear amigo" para obtener el resultado

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos y diseño responsivo
- **JavaScript**: Lógica de la aplicación y manipulación del DOM
- **Google Fonts**: Tipografías Inter y Merriweather

## 📁 Estructura del proyecto

```
amigo-secreto/
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js              # Lógica JavaScript
├── README.md           # Documentación
└── assets/
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## 🔧 Instalación y ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/IsaiasRVH2/amigo-secreto.git
   ```

2. **Navegar al directorio**:
   ```bash
   cd amigo-secreto
   ```

3. **Abrir en el navegador**:
   - Abre el archivo `index.html` directamente en tu navegador preferido
   - O utiliza un servidor local como Live Server en VS Code

## 💻 Características técnicas

### Funciones principales

- `agregarAmigo()`: Añade un nuevo nombre a la lista
- `validarNombre()`: Valida que el campo no esté vacío
- `actualizarLista()`: Actualiza la visualización de la lista
- `sortearAmigo()`: Realiza el sorteo aleatorio

### Validaciones

- Campo obligatorio para nombres
- Limpieza automática del campo después de añadir
- Validación de lista vacía antes del sorteo

## 🎯 Objetivos del challenge

Este proyecto forma parte del programa **Oracle Next Education** y tiene como objetivos:

- Practicar manipulación del DOM con JavaScript
- Implementar validaciones de formularios
- Crear interfaces de usuario interactivas
- Aplicar conceptos de programación funcional
- Desarrollar habilidades en desarrollo web frontend

## 🤝 Contribuciones

Este es un proyecto educativo, pero las sugerencias y mejoras son bienvenidas. Si tienes ideas para mejorar la aplicación, no dudes en:

1. Hacer fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Hacer commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Hacer push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

**Isaías Ricardo Valdivia** - [IsaiasRVH2](https://github.com/IsaiasRVH2)

---

### 🎓 Oracle Next Education

Este proyecto fue desarrollado como parte del programa de formación **Oracle Next Education**, una iniciativa educativa que busca capacitar a nuevos talentos en tecnología.

**#OracleNextEducation** **#Challenge** **#JavaScript** **#FrontEnd**