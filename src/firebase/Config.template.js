import firebase from 'firebase'
require('firebase/firestore');
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings( { timestampsInSnapshots: true } )
export default firebaseApp.firestore()