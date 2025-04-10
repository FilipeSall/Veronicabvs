import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC_ad8ZPZCvfETe-_FUSHzZ8qIWHvHmn5U",
    authDomain: "veronicabvs-a7fac.firebaseapp.com",
    projectId: "veronicabvs-a7fac",
    storageBucket: "veronicabvs-a7fac.firebasestorage.app",
    messagingSenderId: "802935806062",
    appId: "1:802935806062:web:a03541a94058629399ae7f",
    measurementId: "G-LZ03MH1J26"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar serviços
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

// Exportar instâncias inicializadas
export { app, analytics, auth, db, storage, functions };