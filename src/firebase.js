import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAOFPvKkZbjMeBw-HyGmEED7nBK8h5150Q",
  authDomain: "disneyplus-clone-4403e.firebaseapp.com",
  projectId: "disneyplus-clone-4403e",
  storageBucket: "disneyplus-clone-4403e.appspot.com",
  messagingSenderId: "569550982917",
  appId: "1:569550982917:web:6eeb6b5b3c3b5ffa59f16c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
