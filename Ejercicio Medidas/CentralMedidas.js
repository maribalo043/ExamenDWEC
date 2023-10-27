export default class CentralMedidas{

    constructor(_medidas){
        this._medidas = new Array();
    }
    //Metodo que sirve 
    estaCiudad(ciudad){
        for (let i = 0; i < this._medidas.length; i++) {
            for (let j = 0; j < this._medidas[i].length; j++) {
              if (this._medidas[i][j] === ciudad) {
                return false; // Si la ciudad se encuentra en el array bidimensional, devuelve false
              }
            }
          }
          return true; // Si la ciudad no se encuentra, devuelve true
        }

    
    insertarMedidas(ciudad,valores){
        var devolver = true;
        var ayuda = this.estaCiudad(ciudad);
        if(valores.lenght!=30 && !ayuda){
              devolver = false;  
        }
        if(devolver){
            valores.unshift(ciudad);
            this._medidas.unshift(valores);
        }
        
        return devolver;
    }
    insertarAleatorio(ciudad){
        var devolver = true;
        if(!this.estaCiudad(ciudad)){
            devolver = false;
        }
        if(devolver){
            var insertar = new Array(30);
            insertar.push(ciudad);
            var contador = 1;
            while(contador<insertar.length){
                insertar[contador] = Math.floor(Math.random() * (41 - (-10))) + (-10);
                contador++;
            }
            insertar[0] = ciudad;
            this._medidas.push(insertar);
        }
        return devolver;
    }
    mediaMedidasPersonalizada(ciudad){
        var suma = 0;
        var contador = 0;
      
        for (var i = 0; i < this._medidas.length; i++) {
            if (this._medidas[i][0] === ciudad) {
                for(var j = 1;j<this._medidas[i].length;j++){
                    suma += this._medidas[i][j];
                    contador++;
                }
             }
        }
        // Para evitar la división por cero
        if (contador === 0) {
          return 0;
        }
        return (suma / contador).toFixed(2);
    }
    mediaMedidas(){
        var suma = 0;
        var contador = 0;
      
        for (var i = 0; i < this._medidas.length; i++) {
          for (var j = 0; j < this._medidas[i].length; j++) {
            if (!isNaN(parseInt(this._medidas[i][j]))) {
              suma += parseInt(this._medidas[i][j]);
              contador++;
            }
          }
        }
        //Para evitar divisiones por 0 y que casque el programa
        if (contador === 0) {
          return 0;
        }
        return suma / contador;
    }
    //funciona a medias
    eliminaCiudad(ciudad){
        var eliminado = false;
        if(this.estaCiudad){
            eliminado = true;
        }
        //En resumen este tocho es para eliminar la ciudad, si solo hay una elimina la que hay, si hay dos mira a ver cual es la que queremos eliminar
        //y si hay mas de dos acude a los metodos de ayuda eliminarFila(ciudad) y filaBuscada(ciudad);
        if(eliminado){
            for(var i = 0;i<this._medidas.length;i++){
                var longitud = this._medidas[i].lenght;
                    if(this._medidas[i][0]===ciudad){
                        if(this._medidas.length==1){
                            this._medidas.shift();
                        }else if(this._medidas.length==2){
                            for(var i = 0;i<this._medidas.length;i++ ){
                                if (this._medidas[i][0] === ciudad) {
                                    if(i==0){
                                        this._medidas.shift();
                                    }else{
                                        this._medidas.pop();
                                    }
                                 }
                                }
                        }else{
                            this.eliminarFila(ciudad);
                        }
                        
                    }

            }
        }
        return eliminado;
    }
    /*tanto el metodo eliminar fila como el metodo fila buscada sirven para identificar y eliminar la fila
    este donde este */
    eliminarFila(ciudad){
        var fila = this.filaBuscada(ciudad);
        var arrayPartidoPrimero = this._medidas.slice(0,fila);
        var arrayPartidoSegundo = this._medidas.slice(fila,this._medidas.length);
        arrayPartidoSegundo.shift();
        var devolver = arrayPartidoPrimero.concat(arrayPartidoSegundo);
        return devolver
    }
    filaBuscada(ciudad){

        for(var i = 0;i<this._medidas.length;i++ ){
            if (this._medidas[i][0] === ciudad) {
                return i;
             }
        }

    }
    toConsole(){
        console.table(this._medidas);
    }
}