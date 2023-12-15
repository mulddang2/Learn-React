import styles from './TodoItem.module.css';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { useTodoDispatch } from '../Todo/TodoProvider';

interface TodoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
}

const TodoItem = (props: TodoItemProps) => {
  const todoDispatch = useTodoDispatch();

  const handleToggleClick = () => {
    todoDispatch({
      type: 'checked',
      payload: {
        id: props.id,
      },
    });
  };
  const handleRemoveClick = () => {
    todoDispatch({
      type: 'remove',
      payload: {
        id: props.id,
      },
    });
  };

  return (
    <li className={styles.container}>
      <FaRegCircleCheck
        onClick={handleToggleClick}
        className={[
          styles.checkIcon,
          `${
            props.isChecked
              ? styles.checkedCircleIcon
              : styles.unCheckedCircleIcon
          }`,
        ].join(' ')}
      />
      <span className={props.isChecked ? styles.lineThrough : ''}>
        {props.text}
      </span>
      <IoIosRemoveCircleOutline
        onClick={handleRemoveClick}
        className={styles.removeIcon}
      />
    </li>
  );
};

export default TodoItem;
