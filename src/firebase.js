import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlWZnhzv7W329WM_5V0EtLNgZpQdQBobA",
    authDomain: "clone-amaze.firebaseapp.com",
    databaseURL: "https://clone-amaze.firebaseio.com",
    projectId: "clone-amaze",
    storageBucket: "clone-amaze.appspot.com",
    messagingSenderId: "143531801921",
    appId: "1:143531801921:web:843c3687883b71af14f5c0",
    measurementId: "G-K9QT2025NB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };