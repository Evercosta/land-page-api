const admin = require('firebase-admin');
let serviceAccount = require('../../key/keyfile.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;