import Carta from './Carta.js';
export default class Baraja{

    constructor(baraja) { 
        this._baraja = new Array(12);
      
        for (var i = 0; i < this._baraja.length; i++) {
          this._baraja[i] = new Array(4);
        }
      
        const nombres = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
        const palos = ['PICAS', 'TREBOLES', 'CORAZONES', 'DIAMANTES'];
      
        for (var i = 0; i < this._baraja.length; i++) {
            for (var j = 0; j < this._baraja[i].length; j++) {
              this._baraja[i][j] = new Carta(nombres[i],palos[j]);
            }
        }
      }
      
    generaCarta(){
        var palo = Math.floor(Math.random()*4);
        var nombre = Math.floor(Math.random()*12);

        return this._Baraja[palo][nombre];
    }
    eliminarCarta(carta){
      for (var i = 0; i < this._baraja.length; i++) {
        for (var j = 0; j < this._baraja[i].length; j++) {
          if(this._baraja[i][j]==carta){
            this._baraja[i][j]=undefined;
          } 
        }
    }
    }
    //necesita funcion para problemas del futuro, sirve para buscar una carta iterando el 
    //Array bidimensional.
    buscarCarta(cartaBuscada){
      var encontrado=false;
      for (var i = 0; i < this._baraja.length && !encontrado ; i++) {
        for (var j = 0; j < this._baraja[i].length && !encontrado ; j++) {
          if(this._baraja[i][j]===cartaBuscada){
            console.log("Se ha encontrado la carta");
            encontrado=true;
          }
        }
      }
      return encontrado;
    }
    toString() {
        for (var i = 0; i < this._baraja.length; i++) {
          for (var j = 0; j < this._baraja[i].length; j++) {
            console.log(this._baraja[i][j].toString());
          }
        }
      }
}