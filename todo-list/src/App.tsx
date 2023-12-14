import { useState } from 'react';
import './App.css';
import Divider from './Divider/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoList from './List/TodoList';
import TodoListTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';

export type TodoType = {
  id: number;
  text: string;
  isChecked: boolean;
};

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTextChange = (text: string) => {
    setText(text);
  };

  const handleSubmit = () => {
    // NOTE: 빈값이면 데이터 안보내기
    if (!text) return;

    // NOTE: 이전값을 유지하면서, 새로운 걸 추가하기
    // concat: 뒤에 있는 값을 array에 추가하고 새로운 array 반환
    const newTodos = todos.concat({
      id: Date.now(),
      text: text,
      isChecked: false,
    });

    setTodos(newTodos);
    // NOTE: 해야할 Todo 초기화
    setText('');
  };

  const handleToggle = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isChecked: !todo.isChecked,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleRemove = (id: number) => {
    const newTodos = todos.filter((todo) => {
      /* 선택한 id가 아닌것만 살려서 반환 */
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const isTodoAllChecked = () => {
    return todos.every((todo) => todo.isChecked);
  };

  const handleToggleAllClick = () => {
    // 하나라도 체크 되어 있으면, true가 나오기 때문에, 이걸로 검증을 우선 한다.
    // 전체완료 클릭했을 때, 그걸 뒤집는다.

    const isAllChecked = isTodoAllChecked();
    const newTodos = todos.map((todo) => {
      return {
        ...todo,
        isChecked: !isAllChecked,
      };
    });
    setTodos(newTodos);
  };
  const handleRemoveAllClick = () => {
    setTodos([]);
  };
  return (
    <main className='App'>
      {/* 완료한일을 빼고, ' false 갯수 '만 넘겨주기 */}
      <TodoHeader count={todos.filter((todo) => !todo.isChecked).length} />
      <TodoInput
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
        text={text}
      />
      <TodoListArea todoCount={todos.length}>
        <TodoListTools
          isAllChecked={isTodoAllChecked()}
          onToggleAllClick={handleToggleAllClick}
          onRemoveAllClick={handleRemoveAllClick}
        />
        <Divider />
        <TodoList
          todos={todos}
          onToggleClick={handleToggle}
          onRemoveClick={handleRemove}
        />
      </TodoListArea>
    </main>
  );
}

export default App;
