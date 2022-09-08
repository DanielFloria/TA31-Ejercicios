//1
let validar_fecha = /.*(0[1-9]|1[0-9]|2[0-9]|3[01])[/-](0[1-9]|1[12])[/-](19|20)\d\d.*/;
let frase = "Nací el 05/04/1982 en Donostia";
console.log(validar_fecha.test(frase));

//2
let validar_correo = /^[a-z0-9.-]+@[a-z0-9]+\.[a-z]{2,3}$/;
let correo = "francisco.gomez@gmail.com";
console.log(validar_correo.test(correo));

//3
let texto = "&\"\"<<<>>>>"
console.log(texto
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
);

//4
let nombre_completo = "Daniel Floria";
let regex = /([a-zA-Z]+)\s([a-zA-Z]+)/;
let comprobacion = nombre_completo.match(regex);
let resultado = comprobacion[2] + ", " + comprobacion[1];
console.log(resultado);

//5
let cadena = "<body><script>const execSync = require('child_process').execSync;const output = execSync('ls', { encoding: 'utf-8'});</script></body>";
let validar_script = /<script>.*<\/script>/;
console.log(cadena.replace(validar_script, ''));
