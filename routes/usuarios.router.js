const router = require('express').Router();
const {
    crearUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario,
    iniciarSesion
} = require('../controllers/usuarios.controller')
const auth = require('../middleware/auth');

router.get('/', auth.requerido, obtenerUsuarios)
router.get('/:id', auth.requerido, obtenerUsuarios);
router.post('/', crearUsuario)
router.post('/entrar', iniciarSesion)
router.put('/:id', auth.requerido, modificarUsuario)
router.delete('/:id', auth.requerido, eliminarUsuario)

module.exports = router;