import { RiChatNewLine } from 'react-icons/ri';
import styles from './TodoInput.module.css';
import { ChangeEvent, FormEvent } from 'react';
import {
  useInputTodoDispatch,
  useInputTodoState,
  useTodoDispatch,
} from '../Todo/TodoProvider';

const TodoInput = () => {
  const inputDispatch = useInputTodoDispatch();
  const inputState = useInputTodoState();
  const todoDispatch = useTodoDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: 'change',
      payload: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    // NOTE: form submit 시, 엔터누르면 url 주소 끝에 /? 생기면서 새로고침됨......... 이거 막으려고 e.preventDefault() 사용함
    e.preventDefault();
    if (!inputState.text) return;

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

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder='해야할 Todo'
          value={inputState.text}
          onChange={handleInputChange}
        />
        <button type='submit' className={styles.enter}>
          <RiChatNewLine />
        </button>
      </form>
    </section>
  );
};

export default TodoInput;
