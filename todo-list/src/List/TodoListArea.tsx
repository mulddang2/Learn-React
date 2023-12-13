import { ReactNode } from 'react';

interface TodoListAreaProps {
  children: ReactNode;
  todoCount: number;
}

// NOTE: HOC High order component : 상위에서 내용 결정해서, 하위에 넘겨주는 방식
const TodoListArea = (props: TodoListAreaProps) => {
  if (props.todoCount < 1) return null;
  return <>{props.children}</>;
};

export default TodoListArea;
