import { atom, selector } from 'recoil';

export interface ITodoTypes {
  id: number;
  title: string;
  completed: boolean;
}

// TodoInput에서 입력하는 값을 atom으로 관리
export const inputState = atom<string>({
  key: 'inputState',
  default: '',
});

// 업데이트 시킬 Todos atom 배열
export const todosState = atom<ITodoTypes[]>({
  key: 'todos',
  default: [],
});
