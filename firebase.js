import { initializeApp } from "firebase/app";

import {
  ref,
  getStorage,
  uploadString,
  getDownloadURL,
} from "firebase/storage";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyAD2omPb7YfIIai6QyTUDzCd1zb3ooy1bw",
  authDomain: "cloneprojects-9a66b.firebaseapp.com",
  projectId: "cloneprojects-9a66b",
  storageBucket: "cloneprojects-9a66b.appspot.com",
  messagingSenderId: "583275696036",
  appId: "1:583275696036:web:4ec00c87efa4fe8eed3b31",
});

const fireStore = getFirestore(app);
const storage = getStorage(app);

const db = {
  addCollection: async function (collectionName, data) {
    const colRef = collection(fireStore, collectionName);
    return await addDoc(colRef, data);
  },

  uploadFile: async function (imageBase64, fileName) {
    var imageRef = ref(storage, `images/${fileName}`);
    return await uploadString(imageRef, imageBase64, "data_url");
  },
  alterCollection: async function (collectionName, docId, data) {
    const postRef = doc(collection(fireStore, collectionName), docId);
    await setDoc(postRef, data, { merge: true });
  },

  getCollection: function (collectionName) {
    return collection(fireStore, collectionName);
  },

  getPostImageUrl: async function (imageName) {
    return await getDownloadURL(ref(storage, `images/${imageName}`));
  },

  timestamp: serverTimestamp(),
};

export default db;
