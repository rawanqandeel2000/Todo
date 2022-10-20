import React from "react";
import {useSelector} from 'react-redux';
import './App.css';

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  return (
    <div className="m-16">
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => <div
          className="children-checkbox border-transparent bg-white ml-14 mr-14 mb-2 p-3">
          <input
            className=" check-with-label border-slate-300 font-bold shadow-md"
            type="checkbox"
            id="idinput"/>
          <label className="label-for-check ml-2 text-black font-semibold" for="idinput">{todo.title}</label><br/>
          <div className="text-gray-500 font-normal ml-5">{todo.description}</div>
        </div>)
        : 'no to do'}
    </div>
  );
}

export default AppContent;
