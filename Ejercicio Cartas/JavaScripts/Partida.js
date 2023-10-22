import Baraja from "./Baraja.js";
import Carta from "./Carta.js";
export default class Partida{

    constructor(filas = 4, columnas = 4) {
 
        this._filas = prompt("Indica el numero de filas, el minimo es 4");
        this._filas *= 1;
        this._columnas = prompt("Indica el numero de columnas, el minimo es 4");
        this._columnas *= 1;
        //primero hago un if para saber si algo esta mal, y luego lo separo por si uno esta bien mantenerlo,
        //y cambiar el que esta mal.
        if (filas < 4||columnas < 4) {
          if(filas < 4){
            this._filas = 4;
          }
          if(columnas < 4){
            this._columnas = 4;
          }
        }
        this._baraja = new Baraja();
        this._cartasSeleccionadas = [];
        this._mazo = new Array();
        this._cartaVolteada = null;
        this._aciertos = 0;
        this._numeroIntentos = 0;
      }
      selecciona() {
        var i = 0;
        const cuantasVeces = (this._columnas * this._filas)-1;
        const nombres = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
        const palos = ['PICAS', 'TREBOLES', 'CORAZONES', 'DIAMANTES'];
        const cartasSeleccionadas = [];
        while(i<=cuantasVeces){
          var numeroPalo = Math.floor(Math.random()*3);
          var numeroNombre = Math.floor(Math.random()*12);
          const cartaUno = new Carta(nombres[numeroNombre],palos[numeroPalo]);
          this._cartasSeleccionadas.push(cartaUno);
          i++;
          this._cartasSeleccionadas.push(cartaUno);
          i++;
        }
      }
      /*No funciona*/
      baraja(){
        function  compararAleatoriamente(){
          return Math.random() - 0.5;
        }
        this._cartasSeleccionadas.sort(compararAleatoriamente());

      }
      reparte(){
        this._mazo = new Array(this._filas);

        for (var i = 0; i < this._mazo.length; i++) {
          this._mazo[i] = new Array(this._columnas);
        }
        var numero = 0;
        for (var i = 0; i < this._mazo.length; i++) {
          for (var j = 0; j < this._mazo[i].length; j++) {
              this._mazo[i][j] = this._cartasSeleccionadas[numero];
              numero++;
          }
      }
      
        console.table(this._mazo);
      }
      get getMazo(){
        return this._mazo;
      }
}