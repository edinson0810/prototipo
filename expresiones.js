let palabra = "Lorem ipsum Dolor sit amet consectetur adipisicing elit. Fugiat facilis, explicabo accusantium Dolor sint 2 ducimus a"
// buscar letras sin importar que sean minusculas o mayusculas que tenga al menos dos veces la palabra
// let exprecion = /dolor{2,3}/gi;

// buscar si tiene letras
// let exprecion = /[a-zA-Z]/gi;

// buscar si tiene numeros
// let exprecion = /[0-9]/gi;



// // buscar las palabra en el Lorem
// console.log(exprecion.test(palabra));

console.clear;


let correo = "edinson.barrios@soy.sena.edu.co";

let exp = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+(\.[a-zA-Z]{2,4}){1,2}/;

console.log(exp.test(correo));

(function () {
    console.log("anonima");
    
})();


(function (d, w, c) {
    console.log(d);
    
})(document, window,console);

