import { TodoType } from '../App';
import TodoItem from '../ListItem/TodoItem';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: TodoType[]
  onToggleClick: (id:number) => void
  onRemoveClick: (id:number) => void

}

const TodoList = ({todos, onToggleClick, onRemoveClick}:TodoListProps) => {
  return (
    <section>
      <ol className={styles.olContainer}>
        {todos.map((todo, idx) => {
          return <TodoItem key={todo.id} id={todo.id} text={todo.text} isChecked={todo.isChecked} onToggleClick={onToggleClick} onRemoveClick={onRemoveClick}/>;
        })}
      </ol>
    </section>
  );
};

export default TodoList;
