import { useState, useEffect } from 'react';




export default useTasks = () => {

    const [listTodo, setListTodo] = useState([]);
    const [listDone, setListDone] = useState([]);

    const listTodoFunction = (tasks) => {
        const todoTasks = tasks.filter((task) => !task.completed);
        setListTodo(sortByDate(todoTasks));
    }

    const listDoneFunction = (tasks) => {
        const doneTasks = tasks.filter((task) => task.completed);
        setListDone(sortByDate(doneTasks));
    }
 


    const sortByDate = (tasks) => {
        return tasks.sort((a, b) => b.date - a.date);
    }

    return { 
        listTodo,
        listTodoFunction,
        listDone,
        listDoneFunction,
      };
};