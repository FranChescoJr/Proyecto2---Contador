const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("dism");
const reiniciar = document.getElementById("rein");

let colorAzul = "blue";
let colorVerde = "green";
let colorRojo = "red";
let numero = 0;

/* Función para cambiar el color dependiendo si es mayor, menor o igual a 0*/

function cambioColor(){
    if(numero >= 1){
        // alert("el color debería ser verde")
        let a = document.getElementById("contar").style.color = colorVerde;
    } else if (numero == 0){
        //alert("el color debería ser Azul")
        let a = document.getElementById("contar").style.color = colorAzul;
    } else{
        //alert("el color debería ser rojo")
        let a = document.getElementById("contar").style.color = colorRojo;
    };
};

/* Incrmento, Diminución o reinicio del valor*/
sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
    cambioColor();
});

restar.addEventListener("click", ()=>{
    numero--;
    contador.innerHTML = numero;
    cambioColor();
});

reiniciar.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;
    cambioColor();
})

