


export default fakeDB = {
    tasks:[
    ],
    users: [
        {
            id: 1,
            name: 'Teste 1',
            email: 'Teste1@gmail.com'
        },
        {
            id: 2,
            name: 'Teste 2',
            email: 'Teste2@Gmail.com'
        }
    ]
            
}

for (let i = 0; i <= 15; i++) {
    fakeDB.tasks.push({
        id: i,
        iconId: i,
        userId: 1, 
        title: `Task ${i}`,
        completed: i % 2 === 0? true : false,
        date: new Date(),
        description: `Criado por ${fakeDB.users[0].name}`,
    });
}
