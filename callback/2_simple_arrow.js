// Dependecia a XMLHttpRequest 
const http = require('xmlhttprequest').XMLHttpRequest

//Funcion para conectarnos con una API publica
const url = "https://pokeapi.co/api/v2/type"

const exito = data =>{
   const tipos = JSON.parse (data).results 
   //Recorrer el arreglo de tipos 
   tipos.forEach(function (element) {
    console.log(`Tipo: ${element.name}`)
    console.log(`----------------`)
   });
}
const fallo = status =>{
    console.log(status)
}



const get_data = (endpoint , exito , fallo) =>{  
    //Crear objeto de una conexion 
   const h = new http()
   //Abrir una conexion a la API
   h.open('GET' , endpoint)
   //Enviar la Request definida
   h.send()
   // Una vez, recibida la response  tratar la información 
   h.onload = () =>{
    if(h.status === 200){
        exito(h.responseText)
    }else{
        fallo(h.status)
    }
}
}

//Invocar la GET DATA 
   get_data(url , exito, fallo )
