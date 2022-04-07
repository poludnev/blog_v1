import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  QuerySnapshot,
} from 'firebase/firestore';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getDataFromSnapShot = (snapshot: QuerySnapshot) => {
  const data: { [id: string]: any } = {};
  snapshot.forEach((doc) => {
    const docData = doc.data();
    data[doc.id] = docData;
  });
  return data;
};

export const addDocument = async (
  collectionPath: string = 'track',
  data: Object,
) => {
  try {
    const docRef = await addDoc(collection(db, collectionPath), data);
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

export const getDocuments = async (collectionPath: string = 'track') => {
  const querySnapshot = await getDocs(collection(db, collectionPath));
  return getDataFromSnapShot(querySnapshot);
};

export const auth = getAuth(app);

export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
