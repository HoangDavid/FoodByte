// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc, deleteDo, doc, deleteDoc} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { query, where } from "firebase/firestore";
import { Item } from "../types/Item";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZF0g_-aUgrsw7pnsVMXAfyXCIGWIf6rc",
  authDomain: "foodbyte-a27b3.firebaseapp.com",
  projectId: "foodbyte-a27b3",
  storageBucket: "foodbyte-a27b3.appspot.com",
  messagingSenderId: "294529328744",
  appId: "1:294529328744:web:c75ce4a111ad3ef1d97ddd",
  measurementId: "G-NGYH1BQFRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };

export const  getItems = async(item_type: string, user_Id: string) => {
  const ref = collection(db, item_type);
  const q = query(ref, where("uid", "==", user_Id));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return data;
}

export const addItem = async (item: any, item_type: string, user_Id: string) => {
  const ref =  collection(db, item_type)

  await addDoc(ref, {
    uid: user_Id,
    name: item.name,
    quantity: item.quantity, 
    expireIn: item.expireIn,
    dateAdded: item.dateAdded
  })
}

export const deleteItem = async (item_id: string, item_type: string) => {
  const ref = doc(db, item_type, item_id)
  await deleteDoc(ref)
}
