import React, { ChangeEvent, useCallback, KeyboardEvent } from 'react';
import { FaPen } from 'react-icons/fa';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { inputState, todosState, ITodoTypes } from './recoil/atom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const TodoInput = (): JSX.Element => {
  const [title, setTitle] = useRecoilState<string>(inputState);

  const todos = useRecoilValue<ITodoTypes[]>(todosState);
  const setTodos = useSetRecoilState<ITodoTypes[]>(todosState);

  // useRecoilValue = get 변수
  // useSetRecoilState = setter 지정
  // 위와 같은형식으로 get과 setter를 분리하여 사용하는 방법도 있습니다.

  const addTodo = useCallback((): void => {
    if (!title.trim()) {
      // 빈칸 입력 방지
      return;
    }

    const nextId: number = todos.length > 0 ? todos[0].id + 1 : 0;
    // 배열에 값이 존재할시, 고유값은 마지막 인덱스에 위치한 id값에서 1을 늘려줘서 고유값 생성.
    // 만약 값이 존재하지 않을시 초기값은 0

    const todo: ITodoTypes = {
      id: nextId,
      title: title,
      completed: false,
    };

    setTodos([...todos, todo]);
    // 기존 객체들 복사 및 새로운 객체 추가

    setTitle('');
  }, [title, setTitle, setTodos, todos]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setTitle(value);
    },
    [setTitle],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter') {
        // 엔터키를 눌렀을때.
        addTodo();
      }
    },
    [addTodo],
  );

  return (
    <div className='flex mb-9 w-full'>
      <Input
        placeholder='Writing your todo 😝'
        className='w-9/12 ml-3 mr-5'
        inputProps={{ 'aria-label': 'description' }}
        onChange={onChange}
        value={title}
      />
      <Button variant='contained' onClick={addTodo}>
        Add
      </Button>
    </div>
  );
};

export default TodoInput;
