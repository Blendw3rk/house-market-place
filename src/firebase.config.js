import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWrzlTB8R1qCegTTTbyMlweLZiCZadJjU',
  authDomain: 'house-marketplace-app-bdd72.firebaseapp.com',
  projectId: 'house-marketplace-app-bdd72',
  storageBucket: 'house-marketplace-app-bdd72.appspot.com',
  messagingSenderId: '712279482437',
  appId: '1:712279482437:web:bdedaf8986db4382b4832c',
  measurementId: 'G-ZB9J41N9YR',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
