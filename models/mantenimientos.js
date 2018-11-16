const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let mantenimientoSchema = new Schema({
    park: {
        type: String
    },
    turbine:{
        type: String
    },
    countryName: {
        type: String
    },
    country: {
        type: String,
    },

    duration: {
        from: {
            type: Number,

        },
        to: {
            type: Number
        }
    },
    euro: {
        type: Number
    },
    potency: {
        type: Number
    },
    type: {
        type: String
    },
    description: {
        type: String
    }

});
module.exports = mongoose.model('Mantenimiento', mantenimientoSchema);
