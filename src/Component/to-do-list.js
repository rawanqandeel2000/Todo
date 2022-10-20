import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {addTodo} from "../slices/todoSlice";
import {v4 as uuid} from 'uuid';

const TodoList = () => {

  const [title,
    setTitle] = useState('');
  const [description,
    setDescription] = useState('');
  const [status,
    setStatus] = useState('incompete');

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    //   console.log({title,description, status});
    if (title && description && status) {
      dispatch(addTodo({id: uuid(), title, description, status}))
    }
  };
  return (
    <div className=" ml-32 mt-16 mr-32">
      <h1 className=" ml-96 mt-7  text-2xl text-blue-600 font-bold">To Do App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
        <br/>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
        <input
          type="text"
          id="des"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}/>
        <br/>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
}

export default TodoList;