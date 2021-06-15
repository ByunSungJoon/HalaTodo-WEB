import React, { useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoTitle from './TodoTitle';

const TodoApp = (): JSX.Element => {
  return (
    <div className='flex justify-center items-center h-4/6'>
      <div className='flex flex-col w-6/12'>
        <TodoTitle />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoApp;
