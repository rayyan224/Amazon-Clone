import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAA09iIZUwNTvX2RT-clKQUqp_sP-L60ZM",
  authDomain: "clone-b82b7.firebaseapp.com",
  databaseURL: "https://clone-b82b7.firebaseio.com",
  projectId: "clone-b82b7",
  storageBucket: "clone-b82b7.appspot.com",
  messagingSenderId: "852122882098",
  appId: "1:852122882098:web:887bd1772f232051ed6c2b",
  measurementId: "G-ZQ9BGL4LSN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
