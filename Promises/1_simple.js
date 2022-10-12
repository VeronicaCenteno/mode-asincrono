// Dependecia a XMLHttpRequest 
const http = require('xmlhttprequest').XMLHttpRequest

//Funcion para conectarnos con una API publica
const url = "https://pokeapi.co/api/v2/type"

function get_data(endpoint){  

    let promise = new Promise(function (resolve , rejected ){
         //Crear objeto de una conexion 
   const h = new http()
   //Abrir una conexion a la API
   h.open('GET' , endpoint)
   //Enviar la Request definida
   h.send()
   // Una vez, recibida la response  tratar la información 
   h.onload = function(){
    if(h.status === 200){
        resolve(h.responseText)
    }else{
        rejected(h.status)
    }
   }
})
return promise
}


function exito(data){
    const tipos = JSON.parse (data).results 
    //Recorrer el arreglo de tipos 
    tipos.forEach(function (element) {
     console.log(`Tipo: ${element.name}`)
     console.log(`---------------- `)
    });
 }

 function fallo (status){
    console.log(status)
}


 get_data(url).then(function(data){
    exito(data)
 })