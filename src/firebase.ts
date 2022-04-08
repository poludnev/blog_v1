import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  QuerySnapshot,
  onSnapshot,
  query,
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

export const db = getFirestore(app);

const getDataFromSnapShot = (snapshot: QuerySnapshot) => {
  const data: { [id: string]: any } = {};
  snapshot.forEach((doc) => {
    const docData = doc.data();
    data[doc.id] = docData;
  });
  return data;
};

export const addDocument = async (collectionPath: string, data: Object) => {
  try {
    const docRef = await addDoc(collection(db, collectionPath), data);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

export const getDocuments = async (collectionPath: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionPath));
    return getDataFromSnapShot(querySnapshot);
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

export const listenUpdate = (
  collectionPath: string,
  setState: React.Dispatch<React.SetStateAction<any>>,
  processData: (data: unknown) => any,
) => {
  const unsubscribe = onSnapshot(
    query(collection(db, collectionPath)),
    (querySnapshot) => {
      const processedData = processData(getDataFromSnapShot(querySnapshot));
      setState(processedData);
    },
  );
  return unsubscribe;
};

export const auth = getAuth(app);

export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
