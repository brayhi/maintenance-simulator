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
            from: body.from,
            to: body.to
        },
        euro: body.euro,
        potency: body.potency,
        type: body.type,
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
});

app.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let changes = {
        duration:{
            from: body.from,
            to: body.to
        },
        description: body.description,
        euro: body.euro,
        potency: body.potency,
        tipo:body.type,
        description: body.type
    };
    
    Mantenimiento.findByIdAndUpdate(id, changes, {new:true, runValidators:true}, (err, mantenimiento) => {
        if (err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        if ( !mantenimientoDB)  {
            return res.json({
                ok:false,
                err:{
                    message: 'no existe el mantenimiento'
                }
            });
        }

        return res.status(200).json({
            ok:true,
            mantenimiento
        })
    })
})

app.delete('/:id', (req, res) => {
    let id = req.params.id;
    
    Mantenimiento.findByIdAndRemove(id, (err, mantenimiento) => {
        if (err){
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if( !mantenimiento){
            return res.json({
                ok:false,
                err:{
                    mess: 'mantenimiento no encontrado'
                }
            });
        }

        return res.status(200).json({
            ok:true,
            mantenimiento
        })
    } )
})







module.exports = app;