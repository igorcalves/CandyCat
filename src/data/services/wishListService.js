import app from '../services/firebaseApp'
import { sortByDate } from '../../utils/date/convert'

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore'

const db = getFirestore(app)

const dbName = 'wishList'

export const addToWishList = async (data) => {
  console.log(data)
  const timestamp = Math.floor(Date.now() / 1000)
  const newWish = {
    id: timestamp,
    title: data.title,
    date: new Date(),
    description: `Criado por ${data.email}`,
  }

  try {
    const wishListCollection = collection(db, dbName)
    const wishListRef = doc(wishListCollection, String(newWish.id))
    await setDoc(wishListRef, newWish)
    return newWish
  } catch (e) {
    return false
  }
}

export const getData = async () => {
  try {
    const WishListCollection = collection(db, dbName)
    const WishListSnapshot = await getDocs(WishListCollection)
    const WishListSavedList = WishListSnapshot.docs.map((doc) => {
      const WishListSaved = doc.data()
      WishListSaved.date = WishListSaved.date.toDate()
      return WishListSaved
    })
    return sortByDate(WishListSavedList)
  } catch (error) {
    console.error('Error fetching WishList: ', error)
    return false
  }
}
