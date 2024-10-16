// const gato = {
//     nombre: "Nimbo",
//     comer() {
//         console.log(`${this.nombre} esta comiendo`);
        
//     }
// }
// const gato2 = {
//     nombre: "Abigail",
//     comer() {
//         console.log(`${this.comer} esta comiendo`);
        
//     }
// }

// console.log(gato.nombre);

// gato.comer();

class Animal {
    constructor(nombre,genero) {
        this.nombre= nombre;
        this.genero = genero
    }
    comer(){
        console.log(`${this.nombre} esta comiendo`);
        
    }

    pedirComida(){
        console.log(`${this.nombre} esta pidiendo comida`);
        
    }
}

class Gato extends Animal {
    constructor(nombre, genero, tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
    }
    comer(){
        console.log(`soy el gato que mas come y me llamo ${this.nombre}`);
        
    }
}


const Abigail = new Animal("Abigail", "Hembra");
const nimbo = new Gato("Nimbo","Macho", "Grande");

console.log(Abigail);
console.log(nimbo);

Abigail.comer();

nimbo.comer();



