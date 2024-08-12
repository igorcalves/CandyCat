export default fakeDB = {
  tasks: [],
  users: [
    {
      id: 1,
      name: 'Teste 1',
      email: 'Teste1@gmail.com',
    },
    {
      id: 2,
      name: 'Teste 2',
      email: 'Teste2@Gmail.com',
    },
  ],
  money: {
    total: {
      userId: 1,
      savedMoney: 0,
      spentMoney: 0,
      wishList: 0,
    },
    savedMoney: [],
    spentMoney: [],
    wishList: [
      {
        id: 1,
        title: 100,
        date: new Date(),
        forMe: true,
        description: 'Presente',
      },
    ],
  },
}

for (let i = 1; i <= 10; i++) {
  const value = (i * 100).toFixed(2)
  fakeDB.money.savedMoney.push({
    id: i,
    title: value,
    date: new Date(),
    description: `Criado por ${i}`,
  })
  fakeDB.money.total.savedMoney += parseFloat(value)
}

for (let i = 2; i <= 6; i++) {
  fakeDB.money.spentMoney.push({
    id: i,
    title: 50 * i,
    date: new Date(),
    description: `Compra ${i}`,
  })

  fakeDB.money.wishList.push({
    id: i,
    title: 200 * i,
    date: new Date(),
    forMe: i % 2 === 0,
    description: `Carrinho de brinquedo ${i}`,
  })
}
