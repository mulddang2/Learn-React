import styles from './TodoItem.module.css';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

interface TodoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
  onToggleClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

const TodoItem = (props: TodoItemProps) => {
  const handleToggleClick = () => {
    props.onToggleClick(props.id);
  };
  const handleRemoveClick = () => {
    props.onRemoveClick(props.id);
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
      <span className={props.isChecked ? styles.lineThrough : ''}>{props.text}</span>
      <IoIosRemoveCircleOutline
        onClick={handleRemoveClick}
        className={styles.removeIcon}
      />
    </li>
  );
};

export default TodoItem;
