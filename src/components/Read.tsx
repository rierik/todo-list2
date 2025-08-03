type todo = {
  id: number;
  text: string;
  done: boolean;
};

type Props = {
  todos: todo[];
  deleteTodo: (id: number) => void;
};

export default function Read({ todos, deleteTodo }: Props) {
  const safeTodos = Array.isArray(todos) ? todos : [];

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };
  return (
    <ul>
      {safeTodos.length === 0 ? (
        <li>할 일이 없습니다.</li>
      ) : (
        safeTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text} {todo.done ? '(완료)' : '(미완료)'}
            <span onClick={() => handleDeleteTodo(todo.id)}>삭제</span>
          </li>
        ))
      )}
    </ul>
  );
}
