var router = require('express').Router()
var loginCtrl = require('../controllers/loginCtrl')

router.post('/', loginCtrl.login)


module.exports = router