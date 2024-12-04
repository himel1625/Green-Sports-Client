
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpQ5hvysUA1Vc2nL4PdtxSnCTeLN87c7Q",
  authDomain: "green-sports-4eb7c.firebaseapp.com",
  projectId: "green-sports-4eb7c",
  storageBucket: "green-sports-4eb7c.firebasestorage.app",
  messagingSenderId: "521988881383",
  appId: "1:521988881383:web:ccf08cd57f3c8101335b42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;