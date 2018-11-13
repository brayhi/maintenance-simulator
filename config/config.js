// =========================
// Puerto
// =========================

process.env.PORT = process.env.PORT || 3000;



// =========================
// Entorno
// =========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =========================
// vencimiento del token
// =========================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =========================
// SEED de autenticacion
// =========================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'


// =========================
// Base de datos
// =========================

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/simulator'
} else {
    urlDB = process.env.MONGO_URI
};
process.env.URLDB = urlDB;


// =========================
// Google Client ID
// =========================

process.env.CLIENT_ID = process.env.CLIENT_ID || '8481839293-ohf42hh8rekf21skitv2hgpogog6mbos.apps.googleusercontent.com';