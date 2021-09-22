import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDEdWRnB-Vf4RJRCTwcWCcQ18pfkWyHogE",
    authDomain: "netflix-app-9bdb4.firebaseapp.com",
    projectId: "netflix-app-9bdb4",
    storageBucket: "netflix-app-9bdb4.appspot.com",
    messagingSenderId: "885981580326",
    appId: "1:885981580326:web:0fa7649a021af6c1636ae7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth }
  export default db; 