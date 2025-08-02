import { useState } from 'react';

type todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function Write() {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = text.trim();
    if (trimmed.length === 0) return;

    const newTodo: todo = {
      id: Date.now(),
      text: trimmed,
      done: false,
    };

    const stored = localStorage.getItem('todos');
    let todos: todo[] = [];

    try {
      todos = stored ? JSON.parse(stored) : [];
      if (!Array.isArray(todos)) {
        todos = [];
      }
    } catch {
      todos = [];
    }

    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));

    setText('');
  };
  return (
    <div>
      <input type="text" placeholder="할일 입력" onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={handleSubmit}>저장</button>
    </div>
  );
}
