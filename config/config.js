// =========================
// Puerto
// =========================

process.env.PORT = process.env.PORT || 3000;



// =========================
// Entorno
// =========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';




// =========================
// Base de datos
// =========================

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/simulator'
} else {
    urlDB = process.env.MONGO_URI
};
process.env.URLDB = urlDB;