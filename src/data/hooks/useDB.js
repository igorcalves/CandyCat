import { useState, useEffect } from 'react';
import fakeDB from '../db/fakeDB';
import moment from 'moment-timezone';
export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

 

    useEffect(() => {
        setTasks(fakeDB.tasks);
    }, [fakeDB.tasks]);
    
    

    const deleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        fakeDB.tasks = newTasks;
        setTasks(newTasks);
    };

    const addTask = (title, user) => {
        const newTask = {
            id: fakeDB.tasks.length + 1, 
            title,
            date: new Date(),
            completed: false,
            description: `Criado por ${fakeDB.users[0].name}`,
        };
        fakeDB.tasks.unshift(newTask);
        setTasks([...fakeDB.tasks]);
    }

    const updateTaskToCompleted = (id) => {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, 
                    completed: true, 
                    date: new Date(),
                    description: `Concluido Por ${fakeDB.users[0].name}`,
                };
            }
            return task;
        }).sort((a, b) => new Date(b.date) - new Date(a.date)); 
    
        fakeDB.tasks = newTasks;
        setTasks(newTasks);
    }

 const updateTaskName = (newName, id) =>{
    const newTasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, 
                title: newName, 
                date: new Date(),
            };
        }
        return task;
    }).sort((a, b) => new Date(a.date) - new Date(b.date)); 

    fakeDB.tasks = newTasks;
    setTasks(newTasks);
}  

    const getUsers = () => {
        return fakeDB.users;
    }

    return { 
        tasks, 
        addTask, 
        deleteTask,
        updateTaskToCompleted,
        updateTaskName
      };
};