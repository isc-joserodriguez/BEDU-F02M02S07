const mongoose = require('mongoose')
const Mascota = require('../models/mascota.model')

function crearMascota(req, res, next) {
    var mascota = new Mascota(req.body)
    mascota.anunciante = req.usuario.id
    mascota.estado = 'disponible'
    mascota.save().then(mascota => {
        res.status(201).send(mascota)
    }).catch(next)
}

function obtenerMascotas(req, res, next) {
    if (req.params.id) {
        Mascota.findById(req.params.id)
            .populate('anunciante', 'username nombre apellido bio foto').then(mascotas => {
                res.send(mascotas)
            }).catch(next)
    } else {
        Mascota.find().then(mascotas => {
            res.send(mascotas)
        }).catch(next)
    }
}

function obtenerMascota(req, res) {
    // Simulando dos Mascotas y respondiendolos
    var mascota1 = new Mascota(1, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg', 'bien bonita', '1', 'CDMX');
    res.send(mascota1)
}

function modificarMascota(req, res) {
    // simulando un mascota previamente existente que el mascota utili
    var mascota1 = new Mascota(req.params.id, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg', 'bien bonita', '1', 'CDMX');
    var modificaciones = req.body
    mascota1 = { ...mascota1, ...modificaciones }
    res.send(mascota1)
}

function eliminarMascota(req, res) {
    // Líneas que buscan un usaurio en la bd, una vez que lo encuenra lo elimina.
    res.status(200).send(`Mascota ${req.params.id} eliminado`);
}

module.exports = {
    crearMascota,
    obtenerMascotas,
    modificarMascota,
    eliminarMascota,
    obtenerMascota
}