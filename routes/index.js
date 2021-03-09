var router = require('express').Router();

router.get('/', (req, res) => {
    res.send('welcome to adoptapet api');
});

router.use('/usuarios', require('./usuarios.router'));
router.use('/mascotas', require('./mascotas.router'));
router.use('/solicitudes', require('./solicitudes.router'));


module.exports = router;