"use strict";
 document.addEventListener("DOMContentLoaded",iniciarpagina);
 
 function iniciarpagina(){

let datos=[];

function agregar (evento) {
    
    evento.preventDefault();

    let nombre=document.getElementById("nombre").value;

    let apellido=document.getElementById("apellido").value;

    let cel=document.getElementById("cel").value;

    let email=document.getElementById("email").value;
   

    datos.push({
                "nombre":nombre,
                "apellido": apellido, 
                "cel":cel, 
                "email" : email
            });
    console.log(datos);        

    actualizartabla();

}

function borrarfilastabla(){

    let tabla=document.getElementById("mytabla");

    while (tabla.rows.length>1){

        tabla.deleteRow(1);
    }

}

function agregarfila(persona){

    let tabla=document.getElementById("mytabla");

    let apellido=persona.apellido;

    let nombre= persona.nombre;

    let cel=persona.cel;

    let email=persona.email;


    let fila=document.createElement("tr");

    let columna1=document.createElement("td");

    let columna2=document.createElement("td");

    let columna3=document.createElement("td");

    let columna4=document.createElement("td");


    columna1.innerHTML=nombre;

    columna2.innerHTML=apellido;

    columna3.innerHTML=cel;

    columna4.innerHTML=email;


    tabla.appendChild(fila);

    fila.appendChild(columna1);

    fila.appendChild(columna2);

    fila.appendChild(columna3);

    fila.appendChild(columna4);

}

function actualizartabla(){


    borrarfilastabla();

    for(let i=0 ; i<datos.length ; i++ ){
        
        let persona = datos[i];
        agregarfila(persona);
    }
}

function borrarultimo(evento){
   
    evento.preventDefault();
    datos.pop();
    actualizartabla();
}

function borrartabla(evento){
   
    evento.preventDefault();
    datos=[]; 
    actualizartabla();
} 

function cargar3(evento){
    
    evento.preventDefault();
    
    let personas=[
        
        {"nombre":"Juana",
         "apellido": "Fernández", 
         "cel": 15572089, 
         "email" : "juanafer@gmail.com"},
        
         {"nombre":"María",
         "apellido":"Pérez" , 
         "cel":15572089, 
         "email" :"mariperez@gmail.com" },
         
         {"nombre":"Lucas",
         "apellido":"Díaz" , 
         "cel":15639524, 
         "email" :"lucasdiaz@gmail.com" }
        ];
    
    for(let i=0;i<personas.length;i++){
        datos.push(personas[i]);
    }
        
    actualizartabla();


}

let btagregar=document.getElementById("btnagregar");
btagregar.addEventListener("click",agregar);

let btborrar=document.getElementById("borrar_ultimo");
btborrar.addEventListener("click",borrarultimo);

let btnborrartabla=document.getElementById("borrar_tabla");
btnborrartabla.addEventListener("click",borrartabla);

let btncargarx3=document.getElementById("cargarx3");
btncargarx3.addEventListener("click",cargar3);


}

