import React, { useCallback, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { ITodoTypes } from './recoil/atom';
import { SetterOrUpdater } from 'recoil';
import TodoModal from './TodoModal';

interface PropTypes {
  id: number;
  contents: string;
  isCompleted: boolean;

  onComplete: (id: number) => void;
  onDelete: (id: number) => void;

  todos: ITodoTypes[];
  setTodos: SetterOrUpdater<ITodoTypes[]>;
}
const TodoItem = ({
  id,
  contents,
  isCompleted,
  onComplete,
  onDelete,
  todos,
  setTodos,
}: PropTypes): JSX.Element => {
  const [modifyContents, setModifyContents] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onModify = useCallback((): void => {
    setOpen(true);
    setModifyContents(contents);
    //선택한 Todo의 내용을 default value로 지정하는 작업
  }, [contents]);

  const onModifyTodo = useCallback((): void => {
    if (!modifyContents.trim()) {
      return;
    }
    // Todo 업데이트 확인을 눌렀을대 객체 업데이트
    setTodos(
      todos.map((todo: ITodoTypes) => {
        console.log('asdf', todo);
        return todo.id === id ? { ...todo, title: modifyContents } : todo;
      }),
    );
    handleClose();
  }, [id, modifyContents, setTodos, todos]);
  return (
    <>
      <List className='border'>
        <ListItem
          className='pr-10 h-10'
          key={id}
          role={undefined}
          dense
          button
          onClick={() => onComplete(id)}
        >
          <ListItemText
            className={isCompleted ? 'line-through mr-10 ' : 'mr-10'}
            id={`checkbox-list-label-${id}`}
            primary={`${contents}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge='end' aria-label='comments' onClick={onModify}>
              <CreateIcon />
            </IconButton>
            <IconButton edge='end' aria-label='comments' onClick={() => onDelete(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <TodoModal
        modifyContents={modifyContents}
        setModifyContents={setModifyContents}
        onModifyTodo={onModifyTodo}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
};

export default TodoItem;
