export default class Carta{

    constructor(nombre,palo){
        this._palo = palo;
        this._nombre = nombre; 
    }
    get getNombre(){
        return this._nombre;
    }
    get getPalo(){
        return this._palo; 
    }
    set setPalo(paloNuevo){
        this._palo = paloNuevo;
    }
    set setNombre(nombreNuevo){ 
        this.nombre = nombreNuevo;
    }
    toString(){
        return this._nombre + " de " + this._palo;
    }
}