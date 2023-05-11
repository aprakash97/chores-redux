import { createSlice, nanoid } from '@reduxjs/toolkit';

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: ''
});

const initialState = [
  createTask('order more ..'),
  createTask('Drink water more ')
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  add: (state, action) => {
    const task = createTask(action.payload);
    state.push(task);
  }
});
