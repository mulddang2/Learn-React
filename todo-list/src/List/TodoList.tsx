import { TodoType } from '../App';
import TodoItem from '../ListItem/TodoItem';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: TodoType[]
}

const TodoList = ({todos}:TodoListProps) => {
  return (
    <section>
      <ol className={styles.olContainer}>
        {todos.map((todo, idx) => {
          return <TodoItem key={todo.id} text={todo.text} isChecked={todo.isChecked}/>;
        })}
      </ol>
    </section>
  );
};

export default TodoList;
