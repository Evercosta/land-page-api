const admin = require('firebase-admin');
let serviceAccount = require('../../keyfile.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// let db = admin.firestore();

module.exports = admin;