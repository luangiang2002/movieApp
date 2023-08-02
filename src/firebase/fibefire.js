
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD2wjlmJz89MhB2tF6K3LR1BqnXfrFcAOo",
    authDomain: "baocao-7cc26.firebaseapp.com",
    databaseURL: "https://baocao-7cc26-default-rtdb.firebaseio.com",
    projectId: "baocao-7cc26",
    storageBucket: "baocao-7cc26.appspot.com",
    messagingSenderId: "667123559270",
    appId: "1:667123559270:web:1b379fa7f430fc357ff6a7"
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db=getFirestore()
const storage=getFirestore()
export {auth,db,storage};
export const providerGoogle = new GoogleAuthProvider();
