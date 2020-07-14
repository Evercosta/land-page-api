async function createLead(payload) {
    const firestore = new Firestore({
      projectId: 'lead-b14d7',
      keyFilename: 'keyfile.json'
    });

    await firestore.collection('leads').add(payload)
};

module.exports = createLead();
