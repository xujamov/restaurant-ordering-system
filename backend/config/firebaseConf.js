import admin from "firebase-admin";

import fs from "fs"

const serviceAccount =  JSON.parse(fs.readFileSync('/home/doniyor/IdeaProjects/restaurant-ordering-system/backend/config/key.json', 'utf-8'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin