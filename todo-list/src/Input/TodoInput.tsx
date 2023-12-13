import { RiChatNewLine } from 'react-icons/ri';
import styles from './TodoInput.module.css';
import { ChangeEvent, FormEvent } from 'react';

interface TodoInputProps {
  text: string;
  onTextChange: (text: string) => void;
  onSubmit: () => void;
}

const TodoInput = (props: TodoInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onTextChange(e.target.value);
  };

  const handleSubmit = (e:FormEvent) => {
    // NOTE: form submit 시, 엔터누르면 url 주소 끝에 /? 생기면서 새로고침됨......... 이거 막으려고 e.preventDefault() 사용함
    e.preventDefault();
    props.onSubmit()
  }

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder='해야할 Todo'
          value={props.text}
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
