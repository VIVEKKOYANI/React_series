import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import {Itask} from './Interfaces';
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Itask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodoList([...todoList, newTask])
    setTask("");
    setDeadline(0);
  }

  const completetask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {return task.taskName != taskNameToDelete}))
  }
  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type="text" placeholder="task...." name='task' onChange={handleChange} value={task} />
          <input type="number" placeholder="Deadline(in Days)...." name='deadline' onChange={handleChange} value={deadline} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: Itask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completetask} />
        })}
      </div>
    </div>
  );
}

export default App;