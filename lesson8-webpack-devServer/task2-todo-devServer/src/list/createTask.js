import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksLists } from './tasksGateway.js';

export const onCreateTask = () => {
    const inputElem = document.querySelector('.task-input');
    const text = inputElem.value;
    if (text === '') {
        return;
    }

    inputElem.value = '';

    const taskElem = {
        text,
        done: false,
    };

    createTask(taskElem)
        .then(response => response.json())
        .then(({ _id, ...rest }) => {
            const tasksList = getItem('tasksList') || [];
            tasksList.push({ id: _id, ...rest });
            setItem('tasksList', tasksList);
            renderTasks();
        });
};

