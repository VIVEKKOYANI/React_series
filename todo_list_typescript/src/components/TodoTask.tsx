import React from "react";
import { Itask } from '../Interfaces';

interface Props {
    task: Itask;
    completeTask(taskNameToDelete: string): void;
}

function TodoTask({ task, completeTask }: Props) {
    return (
        <div className="task">
            <div className="content">
                {task.taskName}
                {task.deadline}
            </div>
            <button onClick={() => {completeTask(task.taskName)}}>X</button>
        </div>
    )
}

export default TodoTask;