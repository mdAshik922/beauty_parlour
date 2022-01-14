// Initialize Firebase
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initialization = ()=>{
    initializeApp(firebaseConfig)
};


export default initialization;