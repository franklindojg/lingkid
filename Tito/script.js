// Crea una instancia de Artyom
const artyom = new Artyom();

// Definir comandos de voz
artyom.addCommands([
  {
    indexes: ["hi", "morning"],
    action: () => {
      artyom.say("¡hi! how can i help you?");
    }
  },
  // Agrega más comandos según tus necesidades
]);

// Iniciar Artyom
artyom.initialize({
  lang: "en-US", // Establece el idioma
  continuous: true, // Escucha continua
  soundex: true, // Habilita el algoritmo Soundex
  debug: true // Activa el modo de depuración para ver mensajes en la consola
});

function startListening() {
  artyom.fatality(); // Detener cualquier instancia anterior (si existe)
  
  artyom.initialize({
    lang: "en-US",
    continuous: true,
    soundex: true,
    debug: true
  }).then(() => {
    artyom.say("¡hi!"); // Responde con un mensaje de voz
    artyom.start(); // Iniciar escucha
  });
}

