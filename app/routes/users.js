var router = require('express').Router()
var usersCtrl = require('../controllers/usersCtrl')

router.get('/', usersCtrl.getUsers)

router.get('/:id', usersCtrl.getUserById)

module.exports = router