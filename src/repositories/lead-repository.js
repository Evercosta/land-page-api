'use strict';

exports.create = async(data) => {
    const admin = require('../services/firebase')
    let db = admin.firestore();
    const FieldValue = admin.firestore.FieldValue;
    await db.collection('leads').add({
        ...data,
        status: 0,
        created: FieldValue.serverTimestamp()
    });
}