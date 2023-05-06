// Crea una instancia de Artyom
const artyom = new Artyom();

// Definir comandos de voz
artyom.addCommands([
  {
    indexes: ["hola", "saludos"],
    action: () => {
      artyom.say("¡Hola! ¿En qué puedo ayudarte?");
    }
  },
  // Agrega más comandos según tus necesidades
]);

// Iniciar Artyom
artyom.initialize({
  lang: "es-ES", // Establece el idioma
  continuous: true, // Escucha continua
  soundex: true, // Habilita el algoritmo Soundex
  debug: true // Activa el modo de depuración para ver mensajes en la consola
});

function startListening() {
  artyom.fatality(); // Detener cualquier instancia anterior (si existe)
  
  artyom.initialize({
    lang: "es-ES",
    continuous: true,
    soundex: true,
    debug: true
  }).then(() => {
    artyom.say("¡Hola! Estoy escuchando."); // Responde con un mensaje de voz
    artyom.start(); // Iniciar escucha
  });
}

