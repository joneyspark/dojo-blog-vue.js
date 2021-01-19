import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCBUUsYvAFkbjL2XIuaUWh-201AVthHQsA",
    authDomain: "bojo-blog.firebaseapp.com",
    projectId: "bojo-blog",
    storageBucket: "bojo-blog.appspot.com",
    messagingSenderId: "508237578190",
    appId: "1:508237578190:web:9dc603ae1add620130b59f"
  };

//init firebase

firebase.initializeApp(firebaseConfig)

// init firestore service

const projectFirestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }