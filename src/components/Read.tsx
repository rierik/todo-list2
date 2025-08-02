type todo = {
  id: number;
  text: string;
  done: boolean;
};

type Props = {
  todos: todo[];
};

export default function Read({ todos }: Props) {
  const safeTodos = Array.isArray(todos) ? todos : [];
  return (
    <ul>
      {safeTodos.length === 0 ? (
        <li>할 일이 없습니다.</li>
      ) : (
        safeTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text} {todo.done ? '(완료)' : '(미완료)'}
          </li>
        ))
      )}
    </ul>
  );
}
