import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1hmTwv1ejtMp1gETx3kKRzrm2jBSSEVg",
  authDomain: "miniblog-13365.firebaseapp.com",
  projectId: "miniblog-13365",
  storageBucket: "miniblog-13365.appspot.com",
  messagingSenderId: "325938454973",
  appId: "1:325938454973:web:b4dabc73d0e26ff69b32d4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
