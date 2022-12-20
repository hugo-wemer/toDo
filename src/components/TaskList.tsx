import { PlusCircle, Trash, Check  } from 'phosphor-react'

import styles from './TaskList.module.css';

export function TaskList() {
    return (
        <section className={styles.taskList}>
            <header>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa'
                    maxLength={156}
                />
                <button 
                    type="submit"
                >
                    Criar
                    <PlusCircle weight='bold'/>
                </button>
            </header>
            <main>
                <div>
                    <div >
                        <span>Tarefas Criadas:</span>
                        <strong>22</strong>
                    </div>
                    <div>
                        <span>Concluídas:</span>
                        <strong>9 de 22</strong>
                    </div>
                </div>
                <ul>
                    {/* MAP */}
                    <li>
                        <div className={"completed"}>
                            <label>
                                <input 
                                    type="checkbox"
                                    // readOnly
                                />
                                <span> {/*<Check />*/} </span>
                            </label>
                            <p>Hello World!</p>
                            <button
                                type='button'    
                            >
                                <Trash />
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className={"completed"}>
                            <label>
                                <input 
                                    type="checkbox"
                                    readOnly
                                />
                                <span></span>
                            </label>
                            <p>Hello World!</p>
                            <button
                                type='button'    
                            >
                                <Trash />
                            </button>
                        </div>
                    </li>
                </ul>
            </main>
        </section>
    )
}
