const ctrl = {};
const axios = require('axios');

let uri = 'https://jsonplaceholder.typicode.com'

ctrl.getUsers = async(req, res) => {

    axios.get(uri + '/users/')
        .then(response => {

            if (response.status == 200) {
                res.json(response.data)
            } else {
                res.json({ error: 'No se pudo recuperar datos del API externa' })
                console.log('Error en respuesta del API, estado: ', response.status);
            }
        })
        .catch((error) => {
            res.json({ error: 'Ocurrio un error inesperado.' + error })
            console.log(error);
        })
}

ctrl.getUserById = async(req, res) => {
    axios.get(uri + '/users/' + req.params.id)
        .then(response => {

            if (response.status == 200) {
                res.json(response.data)
            } else {
                res.json({ error: 'No se pudo recuperar datos del API externa' })
                console.log('Error en respuesta del API, estado: ', response.status);
            }
        })
        .catch((error) => {
            res.json({ error: 'Ocurrio un error inesperado.' + error })
            console.log(error);
        })
}

module.exports = ctrl;