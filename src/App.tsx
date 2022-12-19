import {Header} from './components/Header';
import {TaskList} from './components/TaskList';
import './global.css'

import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <TaskList/>
    </div>
  )
}
