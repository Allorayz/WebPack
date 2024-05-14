import { initTodolistHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTasksLists } from './tasksGateway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
    getTasksLists().then(tasksList => {
        setItem('tasksList', tasksList);
        renderTasks();
    });

    initTodolistHandlers();
});

const onStorageChange = event => {
    if (event.key === 'tasksList') {
        renderTasks();
    }
};

window.addEventListener('storage', onStorageChange);
