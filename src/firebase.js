import firebase from "./firebase";
// App's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCp0Rh06GL2d3S8Pg7wMitAZITB-wVquww",  
    authDomain: "disney-m-clone.firebaseapp.com",
    projectId: "disney-m-clone",
    storageBucket: "disney-m-clone.appspot.com",
    messagingSenderId: "525203454359",
    appId: "1:525203454359:web:09ea791c5023eb67bc6cd2",
    measurementId: "G-8M2S56K1R0"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};
  export default db;