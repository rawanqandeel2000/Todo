import React from 'react';
import './Component/App.css';
import AppContent from './Component/app-content';
import TodoList from './Component/to-do-list';

function App() {
  return (
    <div className="App">
      <TodoList/>
      <AppContent/>
    </div>
  );
}

export default App;
