import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async (data) => {
  await setDoc(doc(firestore, "books", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getAllBooks = async () => {
  const books = await getDocs(
    query(collection(firestore, "books"), orderBy("id", "desc"))
  );
};
