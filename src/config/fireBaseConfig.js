// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // iniciar aplicacion , similar a crear api / contexto
import {getFirestore} from "firebase/firestore"; //funcion para traer tus productos de tu base de datos (Segun)


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8dMt83Axw0Z0mjxFirL97gf582FdVl6g",
  authDomain: "e-comerse-coder-60995.firebaseapp.com",
  projectId: "e-comerse-coder-60995",
  storageBucket: "e-comerse-coder-60995.appspot.com",
  messagingSenderId: "1023425348948",
  appId: "1:1023425348948:web:2524e72e6ff29a63b834c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 