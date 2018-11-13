const express = require('express');
const Mantenimiento = require('../models/mantenimientos');
const app = express();


app.get('/', (req, res) => {

    Mantenimiento.find({})
        .exec((err, mantenimiento) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            return res.json({
                ok: true,
                mantenimiento
            })
        })

});

app.post('/', (req, res) => {
    let body = req.body;

    let mantenimiento = new Mantenimiento({
        park: body.park,
        countryName: body.countryName,
        country: body.country,
        turbine: body.turbine,
        duration: {
            from: body.start,
            to: body.end
        },
        euro: body.euro,
        potency: body.potency,
        tipo: body.type,
        description: body.description

    });

    mantenimiento.save((err, mantenimiento) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            mantenimiento
        })
    })
})







module.exports = app;