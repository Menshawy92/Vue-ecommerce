import { db } from '../index'

export const addToCollection = (collectionName, payload) => {
    return db.collection(collectionName).add(payload)
}
export const getToCollection = (collectionName) => {
    return db.collection(collectionName).get()
}
export const deleteToCollection = (collectionName, documentRef) => {
    return db.collection(collectionName).doc(documentRef).delete()
}
