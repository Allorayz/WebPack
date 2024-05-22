import { initTodolistHandlers } from './list/todoList.js';
import { renderTasks } from './list/renderer.js';
import { getTasksLists } from './list/tasksGateway.js';
import { setItem } from './list/storage.js';
import "./index.scss";


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
