// =============================
// Puerto
// =============================
process.env.PORT = process.env.PORT || 3000;

// =============================
// Entorno
// =============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================
// Vencimeinto del Token
// =============================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =============================
// SEED de autenticacion
// =============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// =============================
// Google Client ID
// =============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '134063358108-9mcuhopvr1oji3t67hlhpiet91944d8s.apps.googleusercontent.com';