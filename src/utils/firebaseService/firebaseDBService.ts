import { FirebaseError } from 'firebase/app'
import { doc, setDoc } from 'firebase/firestore'

import { firebaseDBService } from './firebaseSetting'
import { firebaseDBUserType } from 'types'

export const createInfoToFirebase = async (collectionName: string, docName: string, data: firebaseDBUserType) => {
  await setDoc(doc(firebaseDBService, collectionName, docName), { data }).catch((error) => {
    if (error instanceof FirebaseError) throw Error()
  })
}
