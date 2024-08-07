import app from '../services/firebaseApp'
import { sortByDate } from '../../utils/date/convert'

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore'

const db = getFirestore(app)

export const getData = async (completedStatus = false) => {
  try {
    const db = getFirestore()
    const tasksCollection = collection(db, 'tasks')
    const q = query(tasksCollection, where('completed', '==', completedStatus))
    const tasksSnapshot = await getDocs(q)
    const tasksList = tasksSnapshot.docs.map((doc) => {
      const task = doc.data()
      task.date = task.date.toDate()
      return task
    })
    return sortByDate(tasksList)
  } catch (error) {
    console.error('Error fetching tasks: ', error)
    return false
  }
}

export const addTask = async (data) => {
  const timestamp = Math.floor(Date.now() / 1000)
  const newTask = {
    id: timestamp,
    title: data.title,
    date: new Date(),
    completed: false,
    description: `Criado por ${data.email}`,
  }

  try {
    const tasksCollection = collection(db, 'tasks')
    const taskRef = doc(tasksCollection, String(newTask.id))
    await setDoc(taskRef, newTask)
    return newTask
  } catch (e) {
    return false
  }
}

export const deleteTask = async (data) => {
  try {
    const taskRef = doc(db, 'tasks', String(data))
    await deleteDoc(taskRef)
    return true
  } catch (error) {
    return false
  }
}

export const updateTaskToCompleted = async (data) => {
  try {
    const taskRef = doc(db, 'tasks', String(data.id))

    await updateDoc(taskRef, {
      completed: true,
      date: new Date(),
      description: `Concluído por ${data.email}`,
    })

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export const updateTaskName = async (data) => {
  try {
    const taskRef = doc(db, 'tasks', String(data.id))

    await updateDoc(taskRef, {
      title: data.title,
    })
    return true
  } catch (error) {
    return false
  }
}
