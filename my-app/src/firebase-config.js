import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8AD93f5e3qzDhDT2eAifn0H-R3Zk1KAY",
  authDomain: "auth-project-ba776.firebaseapp.com",
  projectId: "auth-project-ba776",
  storageBucket: "auth-project-ba776.appspot.com",
  messagingSenderId: "285652232751",
  appId: "1:285652232751:web:4810b1b7236213a97174da",
  measurementId: "G-MXDY1V75ZD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
