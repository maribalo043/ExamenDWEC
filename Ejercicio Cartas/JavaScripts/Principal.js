import Baraja from './Baraja.js';
import Carta from './Carta.js';
import Partida from './Partida.js'

var primeraPartida = new Partida();
primeraPartida.selecciona();
primeraPartida.baraja();
primeraPartida.reparte();
var fin = false;
while(!fin){
console.table(primeraPartida.getMazo);
var fila1 = prompt("Indica la fila(Primera carta) desde 0 hasta las filas que pusiste menos 1");
var columna1 = prompt("indica la columna(Primera carta) desde 0 hasta las columnas que pusiste menos 1");
primeraPartida.voltea(fila1,columna1);
var fila2 = prompt("Indica la fila(Segunda carta) desde 0 hasta las filas que pusiste menos 1");
var columna2 = prompt("indica la columna desde(Segunda carta) 0 hasta las columnas que pusiste menos 1");
var haAcertado = primeraPartida.compruebaAcierto(fila2,columna2);
if (haAcertado === true){
    primeraPartida.eliminarCartas(fila1,fila2,columna1,columna2);
}
primeraPartida.pintarMazo();
fin = primeraPartida.haFinalizado();
setTimeout(pedirCartas(), 5000);
}
console.log("Partida Finalizada, has necesido " + primeraPartida._numeroIntentos + " intentos");

/*falta poner bien la vista de el array bidimensional...*/


