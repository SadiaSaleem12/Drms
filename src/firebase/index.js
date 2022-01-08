import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJvLhy3fSxVTHSOyT32X70UPTWK2UQHfM",
  authDomain: "firestore-app-3af45.firebaseapp.com",
  projectId: "firestore-app-3af45",
  storageBucket: "firestore-app-3af45.appspot.com",
  messagingSenderId: "617491569351",
  appId: "1:617491569351:web:5efa7bf5010a5c00fe7ce2",
  measurementId: "G-235WTYHX3D"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
