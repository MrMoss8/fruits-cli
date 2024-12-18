<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fruits CLI - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      background-color: #f4f4f9;
    }
    h1, h2, h3 {
      color: #333;
    }
    code {
      background-color: #eee;
      padding: 2px 4px;
      border-radius: 4px;
      font-size: 1em;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    ul {
      margin: 10px 0;
      padding: 0 20px;
    }
    a {
      color: #1a73e8;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>🍉 Fruits CLI</h1>
  <p><strong>Fruits CLI</strong> es una herramienta modular interactiva creada con <a href="https://nestjs.com" target="_blank">NestJS</a>. Su propósito es ofrecer una interfaz de línea de comandos divertida y extensible para ejecutar diferentes programas y tareas.</p>

  <h2>🚀 Características</h2>
  <ul>
    <li>Interfaz interactiva con opciones de menú.</li>
    <li>Fácil expansión mediante módulos y servicios personalizados.</li>
    <li>Funcionalidades predefinidas como "Salúdame" y "Círculos".</li>
    <li>Validación y manejo de entradas del usuario.</li>
  </ul>

  <h2>⚙️ Estructura del Proyecto</h2>
  <p>El proyecto está estructurado en módulos de NestJS que permiten agregar y gestionar funcionalidades de manera organizada.</p>
  <ul>
    <li><code>MenuModule</code>: Gestiona la lógica del menú principal y permite registrar programas.</li>
    <li><code>HelloModule</code>: Incluye un programa para saludar al usuario pidiéndole su nombre.</li>
    <li><code>CirculosModule</code>: Calcula el perímetro y área de un círculo a partir de un radio proporcionado por el usuario.</li>
  </ul>

  <h2>📋 Instalación</h2>
  <pre>
    <code>$ git clone https://github.com/tu-usuario/fruits-cli.git
$ cd fruits-cli
$ npm install
    </code>
  </pre>

  <h2>▶️ Uso</h2>
  <ol>
    <li>Ejecuta el programa con el siguiente comando:</li>
    <pre>
      <code>$ npx ts-node src/main.ts</code>
    </pre>
    <li>Selecciona una opción del menú utilizando las teclas de flecha y presiona <code>Enter</code>.</li>
    <li>Interactúa con el programa según las instrucciones en pantalla.</li>
  </ol>

  <h2>📖 Ejemplo de Programas</h2>

  <h3>👋 Programa: Salúdame</h3>
  <ul>
    <li>Solicita al usuario su nombre.</li>
    <li>Muestra un saludo personalizado.</li>
    <li>Hace una pausa antes de regresar al menú principal.</li>
  </ul>
  <pre>
    <code>👋 Hola! Este es el programa "Salúdame".
Por favor, ingresa tu nombre: Juan
👋 ¡Hola, Juan!
Presiona cualquier tecla para continuar...
    </code>
  </pre>

  <h3>⚪ Programa: Círculos</h3>
  <ul>
    <li>Solicita al usuario el radio de un círculo.</li>
    <li>Calcula y muestra el perímetro y el área.</li>
    <li>Hace una pausa antes de regresar al menú principal.</li>
  </ul>
  <pre>
    <code>⚪ Bienvenido al programa "Círculos".
Por favor, ingresa el radio del círculo: 5
🔹 Perímetro: 31.42
🔹 Área: 78.54
Presiona cualquier tecla para continuar...
    </code>
  </pre>

  <h2>🛠️ Extensión del Proyecto</h2>
  <p>Fruits CLI está diseñado para ser fácilmente extensible. Puedes agregar nuevos programas creando un nuevo módulo en <code>src</code>, registrándolo en <code>MenuService</code>, y definiendo la lógica personalizada.</p>

  <h2>📜 Licencia</h2>
  <p>Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo, modificarlo y compartirlo.</p>

  <h2> Autor</h2>
  <p>Creador:Elias Higuera Acosta</p>
  <p>Linkedin:<a href="https://www.linkedin.com/in/el%C3%ADas-higuera-acosta-/" target="_blank">Elias Higuera</a></p>

  <h2>🤝 Contribuciones</h2>
  <p>Las contribuciones son bienvenidas. Si tienes ideas para nuevos programas o mejoras, no dudes en hacer un fork del repositorio y enviar un pull request.</p>

  <h2>📞 Soporte</h2>
  <p>Si tienes preguntas o necesitas ayuda, por favor abre un <a href="https://github.com/mrmoss12-cli/fruits-cli/issues" target="_blank">issue</a> en el repositorio.</p>
</body>
</html>
