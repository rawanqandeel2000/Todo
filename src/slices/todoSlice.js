import {createSlice} from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodoList = window
    .localStorage
    .getItem('todoList');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window
    .localStorage
    .setItem('todoList', JSON.stringify([]));
  return [];
};

const initialValue = {
  todoList: getInitialTodo()
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state
        .todoList
        .push(action.payload);
    }
  }
});

export const {
  addTodo
} = todoSlice.actions;
export default todoSlice.reducer;