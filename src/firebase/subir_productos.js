const admin = require('firebase-admin')
const serviceAccount = require('./dtisk-59323-firebase-adminsdk-shfuh-1caec2be91.json')
const data = require('./data.json')
const collectionKey = "productos"
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
if(data && (typeof data === "object")){
    Object.keys(data).forEach(docKey =>{
        firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res)=>{
            console.log("documento " + docKey + " successfully written!");
        }).catch((err)=>{
            console.error("Error al escribir", err)
        })
    })
}