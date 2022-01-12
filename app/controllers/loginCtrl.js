const { generarJWT } = require('../helpers/generarJWT')

const login = async(req, res) => {

    const { user, password } = req.body;
    try {

        const usuario = ['user1'].find(element => element == user)

        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / password no son correctos'
            })
        }

        const validPassword = ['123'].find(element => element == password)

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / password no son correctos'
            })
        }

        const token = await generarJWT('userid')

        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrio un error de lado del servidor, contacte con el administrador'
        })
    }




}

module.exports = {
    login
}