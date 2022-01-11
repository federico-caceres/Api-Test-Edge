var router = require('express').Router()
const res = require('express/lib/response')
var users = require('./users')
var auth = require('./auth')
const { validarJWT } = require('../middlewares/validar-jwt')

router.get('/', function(req, res) {

    res.status(200).json({ message: 'Estás conectado a nuestra API v1' })

})

router.use('/login', auth)
router.use('/users', validarJWT, users)

module.exports = router