const jwt = require('jsonwebtoken')

const validarJWT = (req, res, next) => {

    const token = req.header('token')

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }

    try {

        jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}

module.exports = {
    validarJWT
}