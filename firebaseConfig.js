// firebaseConfig.js
const firebaseConfig = {
    apiKey: "AIzaSyBWQZQhNk8Sb9QRwagIPEJ7GhLg-p0_IVo",
    authDomain: "jess-d0e64.firebaseapp.com",
    databaseURL: "https://jess-d0e64-default-rtdb.firebaseio.com",
    projectId: "jess-d0e64",
    storageBucket: "jess-d0e64.firebasestorage.app",
    messagingSenderId: "1077483205609",
    appId: "1:1077483205609:web:0cc8729bad381958961178",
    measurementId: "G-6JYXZM80V4"
  };
  
  // Inicialización de Firebase
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  
  // Inicializa Firebase con la configuración
  const app = initializeApp(firebaseConfig);
  
  // Obtenemos la base de datos Firestore
  const db = getFirestore(app);
  