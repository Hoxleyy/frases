// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4ofSHCyJq6af4Hq97FksTOfAS-ZjU2BI",
  authDomain: "frases-40f1b.firebaseapp.com",
  projectId: "frases-40f1b",
  storageBucket: "frases-40f1b.appspot.com",
  messagingSenderId: "432915514955",
  appId: "1:432915514955:web:6b663356e054bb21a26fce",
  measurementId: "G-301ESYSGTQ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const db = firebase.firestore();

function adicionarFrase() {
    const fraseInput = document.getElementById('frase');
    const novaFrase = fraseInput.value;

    if (novaFrase.trim() !== '') {
        firebase.firestore().collection('frases').add({
            texto: novaFrase
        })
        .then(() => {
            fraseInput.value = '';
            carregarFrases();
        })
        .catch(error => console.error('Erro ao adicionar frase:', error));
    }
}

function carregarFrases() {
    const frasesContainer = document.getElementById('frasesContainer');

    // Limpa as frases anteriores
    frasesContainer.innerHTML = '';

    // Obtém e exibe as frases do Firestore
    firebase.firestore().collection('frases').get().then(snapshot => {
        snapshot.forEach(doc => {
            const frase = doc.data().texto;
            const fraseElement = document.createElement('p');
            fraseElement.textContent = frase;
            frasesContainer.appendChild(fraseElement);
        });
    });
}

// Carrega as frases ao carregar a página
document.addEventListener('DOMContentLoaded', carregarFrases);

// Carrega as frases ao carregar a página
document.addEventListener('DOMContentLoaded', carregarFrases);
