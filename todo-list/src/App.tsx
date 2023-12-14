import { useReducer } from 'react';
import './App.css';
import Divider from './Divider/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoList from './List/TodoList';
import TodoListTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';
import { todoInputReducer } from './Todo/TodoInputReducer';
import { todoReducer } from './Todo/todoReducer';

function App() {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    text: '',
  });
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });

  const handleTextChange = (text: string) => {
    inputDispatch({
      type: 'change',
      payload: text,
    });
  };

  const handleSubmit = () => {
    // NOTE: 빈값이면 데이터 안보내기
    if (!inputState.text) return;

    // NOTE: 이전값을 유지하면서, 새로운 걸 추가하기
    // concat: 뒤에 있는 값을 array에 추가하고 새로운 array 반환

    todoDispatch({
      type: 'add',
      payload: {
        text: inputState.text,
      },
    });
    // NOTE: 해야할 Todo 초기화
    inputDispatch({
      type: 'clear',
    });
  };

  const handleToggle = (id: number) => {
    todoDispatch({
      type: 'checked',
      payload: {
        id: id,
      },
    });
  };

  const handleRemove = (id: number) => {
    todoDispatch({
      type: 'remove',
      payload: {
        id: id,
      },
    });
  };

  const isTodoAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked);
  };

  const handleToggleAllClick = () => {
    // 하나라도 체크 되어 있으면, true가 나오기 때문에, 이걸로 검증을 우선 한다.
    // 전체완료 클릭했을 때, 그걸 뒤집는다.

    todoDispatch({
      type: 'allChecked',
      payload: isTodoAllChecked(),
    });
  };

  const handleRemoveAllClick = () => {
    todoDispatch({
      type: 'allRemove',
    });
  };
  return (
    <main className='App'>
      {/* 완료한일을 빼고, ' false 갯수 '만 넘겨주기 */}
      <TodoHeader
        count={todoState.todos.filter((todo) => !todo.isChecked).length}
      />
      <TodoInput
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
        text={inputState.text}
      />
      <TodoListArea todoCount={todoState.todos.length}>
        <TodoListTools
          isAllChecked={isTodoAllChecked()}
          onToggleAllClick={handleToggleAllClick}
          onRemoveAllClick={handleRemoveAllClick}
        />
        <Divider />
        <TodoList
          todos={todoState.todos}
          onToggleClick={handleToggle}
          onRemoveClick={handleRemove}
        />
      </TodoListArea>
    </main>
  );
}

export default App;
