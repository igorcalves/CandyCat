import fakeDB from './fakeDB'
import { sortByDate } from '../../utils/date/convert'

export const addMoney = async (data) => {
  const timestamp = Math.floor(Date.now() / 1000)
  const newMoneySaved = {
    id: timestamp,
    title: data.title,
    date: new Date(),
    description: `Criado por ${data.email}`,
  }

  try {
    fakeDB.money.savedMoney.push(newMoneySaved)
    await depositMoney({ id: 1, value: data.title })
    return newMoneySaved
  } catch (e) {
    return false
  }
}

export const getData = async () => {
  try {
    const moneySavedList = fakeDB.money.savedMoney.map((moneySaved) => {
      return {
        ...moneySaved,
        date: new Date(moneySaved.date),
      }
    })
    return sortByDate(moneySavedList)
  } catch (error) {
    console.error('Error fetching money: ', error)
    return false
  }
}

export const deleteMoney = async (data) => {
  try {
    const index = fakeDB.money.savedMoney.findIndex(
      (money) => money.id === data.id
    )
    if (index !== -1) {
      fakeDB.money.savedMoney.splice(index, 1)
      await debitMoney({ id: data.id, value: data.title })
      return true
    } else {
      throw new Error('Money not found')
    }
  } catch (error) {
    console.log('Error removing document: ', error)
    return false
  }
}

export const getTotal = async (data) => {
  try {
    const total = fakeDB.money.total
    if (total) {
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
    const total = await getTotal(String(data.id))
    total.savedMoney += Number(data.value)
    return true
  } catch (error) {
    console.log('Error updating document:', error)
    return false
  }
}

export const debitMoney = async (data) => {
  try {
    const total = await getTotal(String(data.id))
    total.savedMoney -= Number(data.value)
    return true
  } catch (error) {
    console.log('Error updating document:', error)
    return false
  }
}
