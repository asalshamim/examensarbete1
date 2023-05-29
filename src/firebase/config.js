import { initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore } from 'firebase/firestore';
//import { getStorage } from 'firebase/storage';
import 'firebase/compat/database';





// app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy7lwno7DHD0ZFAUhdjVbQTD5un9CV5Ck",
  authDomain: "shop-aee36.firebaseapp.com",
  projectId: "shop-aee36",
  storageBucket: "shop-aee36.appspot.com",
  messagingSenderId: "622410617261",
  appId: "1:622410617261:web:3c70ed226088be98cfd124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
//export const storage = getStorage(app);




export default db;