import { ReactNode, useContext, useReducer } from 'react';
import { TodoActionType, TodoStateType, todoReducer } from './todoReducer';
import { createContext } from 'react';
import {
  TodoInputActionType,
  TodoInputStateType,
  todoInputReducer,
} from './TodoInputReducer';
import { loadTodos } from './todoStorage';

interface TodoProviderProps {
  children: ReactNode;
}

const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatchContext =
  createContext<React.Dispatch<TodoActionType> | null>(null);
const InputTodoContext = createContext<TodoInputStateType | null>(null);
const InputTodoDispatchContext =
  createContext<React.Dispatch<TodoInputActionType> | null>(null);

const TodoProvider = (props: TodoProviderProps) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: loadTodos() });
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    text: '',
  });

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
            {props.children}
          </InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const value = useContext(TodoStateContext);

  if (!value) {
    throw new Error('cannot find todoState');
  }

  return value;
};
export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext);

  if (!value) {
    throw new Error('cannot find todoDispatch');
  }

  return value;
};
export const useInputTodoState = () => {
  const value = useContext(InputTodoContext);

  if (!value) {
    throw new Error('cannot find inputTodoState');
  }

  return value;
};
export const useInputTodoDispatch = () => {
  const value = useContext(InputTodoDispatchContext);

  if (!value) {
    throw new Error('cannot find inputTodoDispatch');
  }

  return value;
};

export default TodoProvider;
