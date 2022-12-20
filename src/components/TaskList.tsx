import { PlusCircle, Trash, Check  } from 'phosphor-react'
import { useState, useEffect } from 'react';


import styles from './TaskList.module.css';

export function TaskList() {

    interface Task {
        id: number;
        description: string;
        isComplete: boolean;
    }

    const [tasks, setTasks] = useState<Task[]>([])
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0)
    const [numberOfTasks, setnumberOfTasks] = useState(0)


    function handleCreateNewTask(){
        if(!newTaskTitle) return;

        const newTask = {
            id: Math.random(),
            description: newTaskTitle,
            isComplete: false
        }

        setTasks(oldTasks => [...oldTasks, newTask]);
        setNewTaskTitle('');

    }

    function handleToggleTaskCompletion(id: number) {
        const newTasks = tasks.map(task => task.id === id ? {
            ...task,
            isComplete: !task.isComplete
        } : task)

        setTasks(newTasks)
    }

    function handleRemoveTask(id: number) {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    }

    useEffect(() => {
        setnumberOfTasks(tasks.length);
        const completedTasks = tasks.filter(task => task.isComplete == true);
        setNumberOfCompletedTasks(completedTasks.length)
    }, [tasks])

  

    return (
        <section className={styles.taskList}>
            <header>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa'
                    maxLength={156}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    value={newTaskTitle}
                />
                <button 
                    type="submit"
                    onClick={handleCreateNewTask}
                >
                    Criar
                    <PlusCircle weight='bold'/>
                </button>
            </header>
            <main>
                <div>
                    <div >
                        <span>Tarefas Criadas:</span>
                        <strong>{numberOfTasks}</strong>
                    </div>
                    <div>
                        <span>Concluídas:</span>
                        <strong>{numberOfCompletedTasks} de {numberOfTasks}</strong>
                    </div>
                </div>
                <ul>
                    {tasks.map(task => (
                            <li key={task.id}>
                            <div className={task.isComplete ?  'completed' : ''}>
                                <label>
                                    <input 
                                        type="checkbox"
                                        readOnly
                                        checked={task.isComplete}
                                        onClick={()=> handleToggleTaskCompletion(task.id)}
                                    />
                                    <span> {/*<Check />*/} </span>
                                </label>
                                <p>{task.description}</p>
                                <button
                                    type='button'
                                    onClick={() => handleRemoveTask(task.id)}    
                                >
                                    <Trash />
                                </button>
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </main>
        </section>
    )
}
