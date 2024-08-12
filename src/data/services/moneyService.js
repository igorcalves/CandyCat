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
export const addMoney = async (data) => {
  const timestamp = Math.floor(Date.now() / 1000)
  const newMoneySaved = {
    id: timestamp,
    title: data.title,
    date: new Date(),
    description: `Criado por ${data.email}`,
  }

  try {
    const MoneyCollection = collection(db, 'money')
    const moneyRef = doc(MoneyCollection, String(newMoneySaved.id))
    await setDoc(moneyRef, newMoneySaved)
    await depositMoney({ id: 1, value: data.title })
    return newMoneySaved
  } catch (e) {
    return false
  }
}

export const getData = async () => {
  try {
    const moneyCollection = collection(db, 'money')
    const moneySnapshot = await getDocs(moneyCollection)
    const moneySavedList = moneySnapshot.docs.map((doc) => {
      const moneySaved = doc.data()
      moneySaved.date = moneySaved.date.toDate()
      return moneySaved
    })
    return sortByDate(moneySavedList)
  } catch (error) {
    console.error('Error fetching money: ', error)
    return false
  }
}

export const deleteMoney = async (data) => {
  try {
    const moneyRef = doc(db, 'money', String(data.id))
    await deleteDoc(moneyRef)
    await debitMoney({ id: data.id, value: data.title })
    return true
  } catch (error) {
    console.log('Error removing document: ', error)
    return false
  }
}

export const getTotal = async (data) => {
  try {
    const docRef = doc(db, 'total', '1')
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const total = docSnap.data()
      return total
    } else {
      return null
    }
  } catch (error) {
    console.log('Error getting document:', error)
  }
}

export const depositMoney = async (data) => {
  try {
    const docRef = doc(db, 'total', String(data.id))
    const total = await getTotal(String(data.id))
    await updateDoc(docRef, {
      savedMoney: total.savedMoney + Number(data.value),
    })
    return true
  } catch (error) {
    console.log('Error updating document:', error)
    return false
  }
}

export const debitMoney = async (data) => {
  try {
    const docRef = doc(db, 'total', '1')
    const total = await getTotal(String(data.id))
    await updateDoc(docRef, {
      savedMoney: total.savedMoney - Number(data.value),
    })
    return true
  } catch (error) {
    console.log('Error updating document:', error)
    return false
  }
}
