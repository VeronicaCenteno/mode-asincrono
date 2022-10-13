const axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"
//Configuración de Request
let config = {
    url : url, 
    method: 'get'
}

const f = async() =>{
    try{
    let response = await axios (config)
    const tipos = response.data.results
    //Recorrer el arreglo de tipos 
        tipos.forEach(element => {
            console.log(element.name)
            console.log(`************`)

        });
}catch(error){
        console.log(Error (error))
    }

}

f()