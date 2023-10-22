import Baraja from './Baraja.js';
import Carta from './Carta.js';
import Partida from './Partida.js'

var primeraPartida = new Partida();
primeraPartida.selecciona();
for(var i = 0;i<primeraPartida._cartasSeleccionadas.length;i++){
    console.log("La carta "+ (i+1) +" es: " + primeraPartida._cartasSeleccionadas[i]);
}
primeraPartida.reparte(); 
/*console.log("-------------Cartas Reordenadas-------------");
primeraPartida.baraja();
for(var i =1;i<primeraPartida._cartasSeleccionadas.length;i++){
    console.log("La carta "+ i +" es: " + primeraPartida._cartasSeleccionadas[i]);
}
primeraPartida.reparte();
console.log(primeraPartida._mazo);*/


