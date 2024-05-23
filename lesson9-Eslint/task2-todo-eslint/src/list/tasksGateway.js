const baseUrl = 'https://663bb00efee6744a6ea2942e.mockapi.io/api/v1/tasks';

export const getTasksLists = () => fetch(baseUrl)
  .then((response) => response.json())
  .then((tasks) => tasks.map(({ _id, ...rest }) => ({ id: _id, ...rest })));

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updateTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
