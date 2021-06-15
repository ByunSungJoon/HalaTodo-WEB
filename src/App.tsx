import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoApp from './views/todo/TodoApp';

function App() {
  return (
    <div className='m-auto antialiased font-sans font-serif font-mono text-center'>
      <React.StrictMode>
        <RecoilRoot>
          <TodoApp />
        </RecoilRoot>
      </React.StrictMode>
    </div>
  );
}

export default App;
