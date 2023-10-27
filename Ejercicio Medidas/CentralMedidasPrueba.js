import CentralMedidas from "../Ejercicio Medidas/CentralMedidas.js";

var medidas = new CentralMedidas();
var meter = [3,12,25,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,22,21,21,21,21,21,21,21,21,21];
console.log(meter.length);
medidas.insertarMedidas("Oviedo",meter);
console.log(medidas._medidas[0]);
medidas.insertarAleatorio("Gijon");
medidas.insertarAleatorio("Gijon");
/*console.log(medidas._medidas[1])
console.log(medidas.mediaMedidas());
console.log(medidas.mediaMedidasPersonalizada('Oviedo'));
console.log(medidas.mediaMedidasPersonalizada("Gijon"));
var ayuda = medidas.eliminaCiudad("Gijon");*/
medidas.toConsole();

