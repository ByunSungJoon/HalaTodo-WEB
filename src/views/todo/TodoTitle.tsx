import React from 'react';
import CheckIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const TodoTitle = (): JSX.Element => {
  return (
    <div className='flex mb-3 mt-8 justify-center'>
      <div className='text-4xl'>
        <CheckCircleOutlineIcon />
      </div>
      <div className='text-xl ml-3 text-4xl'>TodoList</div>
    </div>
  );
};

export default TodoTitle;
