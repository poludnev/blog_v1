import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  QuerySnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAXrzngYGo2Y46PMBMk8Jd0Xen1OgDLBa4',
  authDomain: 'blog-c0acc.firebaseapp.com',
  projectId: 'blog-c0acc',
  storageBucket: 'blog-c0acc.appspot.com',
  messagingSenderId: '800181276923',
  appId: '1:800181276923:web:863b57f2fbe6c41b3aa05e',
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
