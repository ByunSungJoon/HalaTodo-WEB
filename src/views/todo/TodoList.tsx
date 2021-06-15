import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { todosState, ITodoTypes } from './recoil/atom';
import TodoItem from './TodoItem';
import Button from '@material-ui/core/Button';

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todosState);
  const [page, setPage] = useState<number>(5);

  useEffect(() => {
    axios
      .get<ITodoTypes[]>(`http://localhost:3001/todos?_limit=${page}&_sort=id&_order=desc`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.table(response.data);
        setTodos(response.data);
      });
  }, [page]);

  const onComplete = useCallback(
    (id: number): void => {
      setTodos(
        todos.map((todo: ITodoTypes) => {
          // 매개변수로 받은 id와 같은 객체만 완료상태 업데이트
          return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
        }),
      );
    },
    [setTodos, todos],
  );

  const onDelete = useCallback(
    (id: number) => {
      // 매개변수로 받은 id와 동일하지 않는 객체들만 필터링
      setTodos(todos.filter((todo: ITodoTypes) => todo.id !== id));
    },
    [setTodos, todos],
  );

  const moreTodo = useCallback((): void => {
    setPage(page + 5);
  }, [setPage, page]);

  return (
    <div className='TodoList'>
      {todos.length > 0 ? (
        todos.map((todo: ITodoTypes) => {
          const { id, title, completed } = todo;

          return (
            <TodoItem
              key={id}
              id={id}
              contents={title}
              isCompleted={completed}
              onComplete={onComplete}
              onDelete={onDelete}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })
      ) : (
        <div className='TodoList-NoList'>Todo가 없습니다. 자유롭게 추가해보세요!</div>
      )}
      <div className='mt-5'>
        <Button variant='contained' onClick={moreTodo}>
          more...
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
