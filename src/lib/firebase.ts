import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbMTCMDNc4F_oEAZ_DblyOLhxwPm83Qcw",
  authDomain: "allied-relic-keeper.firebaseapp.com",
  databaseURL: "https://allied-relic-keeper-default-rtdb.firebaseio.com",
  projectId: "allied-relic-keeper",
  storageBucket: "allied-relic-keeper.firebasestorage.app",
  messagingSenderId: "31579456575",
  appId: "1:31579456575:web:f22dbda8a548d5f66ba48a"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);