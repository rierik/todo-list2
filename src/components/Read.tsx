import React, { useEffect, useState } from 'react';

type todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function Read() {
  const [todos, setTodos] = useState<todo[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('todos');
      const parsed = stored ? JSON.parse(stored) : [];

      if (Array.isArray(parsed)) {
        setTodos(parsed);
      }
    } catch {
      // 파싱 오류 시 빈 배열로 초기화
      setTodos([]);
    }
  }, []);

  return (
    <div>
      <div>
        {todos.length === 0 ? (
          <p>할 일이 없어요!</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text} {todo.done ? '(완료)' : '(미완료)'}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
