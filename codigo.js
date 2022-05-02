/*alert("hola")
String = "Cadena de texto"
Number = 19
Boolean = true //falso 

alert(Number)
var, let, const
const x = "dalto"; 
const se tiene que definir e inicializar
 al tiempo y no se puede modificarDe
prompt es para que pida un dato al usuario en una alerta
let nombre  = prompt("Cual es tu nombre");
alert(nombre);*/


/*let numero = 10;
let numero2 = 3;
 % residuo ** exponente = es asignación 
 -- resta 1 ++ suma 1 & residuo

resultado = numero%numero2;
document.write(resultado);*/

/*saludo = "Hola"
pregunta = " ¿Como estas?"
frase = saludo + pregunta;
document.write(frase);

numero1 = 54;
numero2 = 2;
frase =  ""+ numero1 + numero2;
Nombre = "Soy derly";
frase = `hola, ${Nombre} y tu`;

 Formas de concatenar concat hay que poner "" a uno de los dos numeros
`texto ${Nombre de la variable} texto`
document.write(frase);


Para hacer la comparación == no diferencia tiposs de datos
===Estrictamente iguales mismo valor mismo dato
!= Diferentes 
!== Estrictamente diferentes 
>= mayor o igual  <= menor o igual
&& esto es y, solo devuelve verdadero si ambas son true ;
 || es o, nos devulve false solo si los dos son falsos;
 ! lo contrario;

*/

/*let numero = 10;
let numero2 = 3;

let afirmacion1 = numero> numero2;
let afirmacion2 = numero!= numero2;

num1 = 12;
num2 = 24;
num3 = 12;
num4 = 92;
num5 = 91;

op = (num5 > num2 && num4 < num3);
document.write(op); 

if (num1!=num3){
    alert(9);
}
else if(num1==num2){
    alert(0);
}
else{
    alert("todo es falso");
}*/

/*let monto1 = prompt("Cuanto tienes");
monto1 = parseFloat(monto1); //convertir a decimales ya que lo entra lo ingresa como texto
parseInt es para convertir a numero un string
alert(monto1);

if (monto1 >= 0.6 && monto1 <1 ){
    alert("comprate el helado de crema");
    let devuelta= Number((monto1 = monto1 - 0.6).toFixed(2));
    alert("y te sobra" + " "+ devuelta );
}
else if(monto1>=1 && monto1<1.6){
    alert("comprate el helado de coco");
    alert("y te sobra" +" "+ (Number((monto1-1).toFixed(2))));
}
else if(monto1>=1.6 && monto1<2){
    alert("comprate el helado de chispas");
    alert("y te sobra" +" "+ (Number(monto1-1.6).toFixed(2)));
}
else if(monto1>=2 && monto1<=3){
    alert("comprate el helado de pistachos");
    alert("y te sobra" +" "+ (Number(monto1-2).toFixed(2)));
}
else{
    alert("No tienes sufiente dinero, para comprar un helado")
}*/

/*let Array= ["lucas",24,"buenos aires"]; //arreglo
let frutas = ["banana","manzana","pera"];
document.write (Array[2]);

const emocion = ["feliz","triste"];
const veggies = ["brocoli","maiz"];

const emocionveggies = [...emocion,...veggies];
console.log(emocionveggies);
document.write (emocionveggies);*/

/*let pc = {
    nombre: "derlyPC",
    procesador: "Intel Core 17",
    ram: "16GB",
    espacio: "1TB"
};

let pc1 = ["derlyPC","Intel Core 17","16GB","1TB"];

document.write(pc ["nombre"] + "<br>");

let v = 0;

while(v !== 2){
    v++;
  document.write(v + "<br>" );
};
if (v<4) {
    v++;
    document.write(v + "<br>");
}
do {
    v++;
  document.write(v + "<br>");
}
while (v < 7)

while(v < 30){
    v++;
    document.write(v + "<br>");
    if(v == 15){
        break; //break cierra los bucles
    }
}
document.write("<br>"); // para que se salte un espacio
for (let i = 0; i < 6; i++){
     document.write(i + ",")
}

Declarar e iniciar, luego
condicion, luego
aumento o decremento

 
// Prompt muestra el mensaje pidiendo le al usuario que ingrese un dato
//declararla e inicializarla por fuera
//continue termina la iteracion, osea se salta
for (let i = 0; i < 6; i++){
    if(i==3){
        continue;
    }
    document.write(i + ",")
}*/


/*let Array1 = ["Dormir","Descansar","Felicidad"];
let Array2 = ["Comer","Estudiar","Salir",Array1];

for(let Array in Array2){
    if(Array == 3){
        Array = 0;
        for (let array in Array1){
            document.write(Array1[Array]+ "<br>");
            Array ++ ;
        }
    }
    else{
        document.write(Array2[Array]+ "<br>");
    }
}
//le puedo asinar el nombre a todo el ciclo 
document.write("<br>");
forDerly:
for(let Array in Array2){
    if(Array == 3){
        Array = 0;
        for (let array in Array1){
            document.write(Array1[Array]+ "<br>");
            Array ++ ;
            break forDerly;
        }
    }
    else{
        document.write(Array2[Array]+ "<br>");
    }
}

function saludo(){
    let respuesta = prompt("Hola, como estas")
    if (respuesta == "bien"){
        alert("que bien");
    } else{
        alert("una pena");
    }
}
saludo();

function salad(){
    let resultado = prompt ("ingrese un valor");
    if (resultado > 3){
        let x = resultado * 2;
        return x; //retorna el valor
    } 
    else if (resultado = 3){
        let j = resultado - 1;
        return j;
    }
}
let operacion = salad();
let x = operacion * 2;
document.write(x);
document.write("<br>");


function ope(num1,num2){
    let oper = num1 + num2;
    document.write(oper);
    document.write("<br>");
}
ope(12,13);
ope(15,15);
document.write("<br>");*/
/*let nombre = prompt("Ingrese su nombre");
let frase = `Hola ${nombre}, como estas`
const saludar = nombre => document.write(frase)
 saludar(nombre);
//const funcion = ()=>{
 //   funcion
//}*/
//let gratis = false;
/*function dejarPasar (){
    let edad = prompt("ingrese su edad");
    if(edad>= 18){
        alert("Dejar lo pasar");
        let hora = prompt("Que hora son");

        if(hora>=2 && gratis == false){
            alert("Puedes entrar, y no pagas");
            gratis = true;
        }else{
            alert("Puedes entar, pero tienes que pagar");
        }
    }else{
        alert("No puede entrar");
    }
}
dejarPasar();*/
/*let cantidad = prompt("¿cuantos alumnos son:");
let dias = prompt("dias que tomara a asistencia")
let alumnosTotales = [];
 
for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
}
const tomarAsistencia = (nombre,p)=>{ //p es la posicion en la lista 
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia =="P"){
        alumnosTotales[p][1]++;
    }
}
for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }
}
for (alumno in alumnosTotales){
    let resultado =` ${alumnosTotales[alumno][0]}: <br>
    _______Asistencias: ${alumnosTotales[alumno][1]}  <br>
    _______Ausencias: ${30 - alumnosTotales[alumno][1] } <br>
    `;
    if(30 - alumnosTotales[alumno][1] > 18){
        resultado += "REPROBADO <br><br>";
    } else{
        resultado += "<br><br>";
    }
    document.write(resultado);
}*/

/*const suma = (num1, num2 ) =>{
    let resultado = parseInt(num1) + parseInt(num2);
    document.write("El resultado es: ",resultado);
}
const resta = (num1, num2 ) =>{
    let resultado =  parseInt(num1) - parseInt(num2);
    document.write("El resultado es: ",resultado);
}
const multiplicacion = (num1, num2 ) =>{
    let resultado = parseInt(num1) * parseInt(num2);
    document.write("El resultado es: ",resultado);
}
const division = (num1, num2 ) =>{
    let resultado = parseInt(num1) / parseInt(num2);
    document.write("El resultado es: ",resultado);
}

alert("que opera")
let operacion = prompt("1: sumar, 2: restar, 3: multiplicar, 4: dividir ");
parseInt (operacion);
let num1 = prompt ("ingrese el primer valor");
let num2 = prompt ("ingrese el segundo valor");


let sum,res;

sum = 3;
res = 2;
sum *= res;
document.write(sum);*/


//como trabajar los datos en javascript del formulario de html
/*function datosFormulario(){
    var  nombre = document.getElementById("nombre").addEventListener('submit').value;
    var edad =  document.getElementById("edad").value;
    var hora = document.getElementById("hora").value;
    console.log(nombre,edad,hora);
    return edad,nombre,hora;
}
let gratis = false;
function dejarPasar(){
    var  nombre = document.getElementById("nombre").addEventListener('submit').value;
    var edad =  document.getElementById("edad").addEventListener('submit').value;
    var hora = document.getElementById("hora").addEventListener('submit').value;
    
    if(edad >= 18){
        alert("Hola " + nombre + "bienvendido");
        if(hora >= 8 && gratis == false){
            alert("Puedes entrar, y no pagas");
            gratis = true;
        }else{
            alert("Puedes entrar, pero tienes que pagar");
        }
    }else{
        alert(nombre + " Tu no puede entrar");
    }
}*/

/*while(i>2){
    document.write(i);
    if(i=4){
        break;
    }
}*/

let  array = ["Derly", "Juan", "Manuel", 10];

let posicion = array.indexOf("Derly"); //busca la posicion o indice de ese elemento
document.write (posicion);

//siempre poner el nombre de el arreglo
array.push("Alberto"); //agregar un elemento al final
array.unshift("yerar"); //agrega el elemento al principio
for (let i=0; i<6; i++){
    document.write(array[i] + "<br>");
};
document.write("<br>");
array.shift();
array.pop();
for (let i=0; i<6; i++){
    document.write(array[i] + "<br>");
};
document.write("<br>");
let array2 = ["Hola","Adios",15];

let arreglo = array.concat(array2); //unir arreglos

for (let i=0; i<7; i++){
    document.write(arreglo[i] + "<br>");
};
let cantidad = arreglo.length;
document.write(cantidad);

for (let i in arreglo){
    document.write(i + "<br>")
}
