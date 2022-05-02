var nombre = "derly";
var edad = 14;
/*
var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>que vaina con esto</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h6>mi edad es: ${edad}</h6>
`;
if(edad>= 16){
    datos.innerHTML += '<h1>Eres grande</h1>';
}else{
    datos.innerHTML += '<h1>Eres pequeña</h1>';
}

for(var i=10; i<=14; i++){
    datos.innerHTML += "<h5>Tu edad es: </h5>"+i;
}
*/

function Muestraminombre(nombre,edad){
    var misDatos = `
        <h1>que vaina con esto</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h6>mi edad es: ${edad}</h6>
    `;
    return misDatos;
}
function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = Muestraminombre("Derly",16);

}
imprimir();

var nombres = ['vor','antonio','elena'];
alert(nombres[0]);

var x = 2


