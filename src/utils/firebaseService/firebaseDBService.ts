import { FirebaseError } from 'firebase/app'
import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc } from 'firebase/firestore'

import { firebaseDBService } from './firebaseSetting'
import { firebaseDBUserType, tableInfoType } from 'types'

export const createInfoToFirebase = async (
  collectionName: string,
  docName: string,
  data: firebaseDBUserType | tableInfoType
) => {
  await setDoc(doc(firebaseDBService, collectionName, docName), data).catch((error) => {
    if (error instanceof FirebaseError) throw Error()
  })
}

export const updateDocsToFirebase = async (collectionName: string, docName: string, data: any) => {
  await updateDoc(doc(firebaseDBService, collectionName, docName), { data }).catch((error) => {
    if (error instanceof FirebaseError) throw new Error()
  })
}

export const getDocsFromFirebase = async (collectionName: string, docName: string) => {
  // const collectionQuery = query(collection(firebaseDBService, collectionName))
  // const docs = await getDocs(collectionQuery)
  const docRef = doc(firebaseDBService, collectionName, docName)
  const docs = await getDoc(docRef)

  return docs
}
