import { useState, useEffect } from 'react';
import fakeDB from '../db/fakeDB';
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc,
    updateDoc,
    setDoc,
    deleteDoc
} from "firebase/firestore";
import app from '../services/firebaseApp';


export const useTasks = () => {
    const db = getFirestore(app);

    const [tasks, setTasks] = useState([]);
    const [listTodo, setListTodo] = useState([]);
    const [listDone, setListDone] = useState([]);


    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "tasks"));
            const data = [];
            querySnapshot.forEach((doc) => {
                const task = doc.data();
                if (task.date) {
                    task.date = task.date.toDate();
                }
                data.push(task);
            });
            setTasks(sortByDate(data));
            setListTodo(sortByDate(data.filter((task) => !task.completed)));
            setListDone(sortByDate(data.filter((task) => task.completed))); 
        } catch (e) {

            console.error("Error fetching documents: ", e);
        }
    };
    
    useEffect(() => {
        getData();
    }, []);


    const sortByDate = (tasks) => {
        return tasks.sort((a, b) => b.date - a.date);
    }

    

    const deleteTask = async (id) => {
        await deleteDoc(doc(db, "tasks", String(id)));
    };


    const addTask = async (title, user) => {
    const timestamp = Math.floor(Date.now() / 1000);
    const newTask = {
        id: timestamp,
        title,
        date: new Date(),
        completed: false,
        description: `Criado por ${fakeDB.users[0].name}`
    };

    try {
        const tasksCollection = collection(db, "tasks");
        const taskRef = doc(tasksCollection, String(newTask.id)); 
        await setDoc(taskRef, newTask); 
    } catch (e) {
        console.error("Error saving task to Firestore: ", e);
    }
};



    const updateTaskToCompleted = async (id) => {
    try {
        const taskRef = doc(db, "tasks", String(id));

        await updateDoc(taskRef, {
            completed: true,
            date: new Date(),
        }); 

    } catch (error) {
        console.error("Error updating document: ", error);
        
    }
};

 const updateTaskName = async (newName, id) =>{
    try {
        const taskRef = doc(db, "tasks", String(id));

        await updateDoc(taskRef, {
            title: newName,
        }); 

    } catch (error) {
        console.error("Error updating document: ", error);
        
    }
    
}  

    const getUsers = () => {
        return fakeDB.users;
    }

    return { 
        tasks,
        listTodo,
        listDone, 
        addTask, 
        deleteTask,
        updateTaskToCompleted,
        updateTaskName,
        getData,

      };
};