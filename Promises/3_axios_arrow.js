const axios = require('axios')

const url = "https://pokeapi.co/api/v2/ype"
//Configuración de Request
let config = {
    url : url, 
    method: 'get'
}

//Realizar la operación asincrona
axios(config)
        .then(
            response =>
            response.data.results)
            .then(data =>{
                    data.forEach(function (tipo) {
                        console.log(`Tipo: ${tipo.name}`)
                        console.log(`*********************`)
                    })
            })
        .catch(error =>{
            console.log(Error(`Error : ${error}`))
        })