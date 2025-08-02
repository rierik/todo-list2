import './App.css';
import Write from './components/Write';
import { useEffect, useState } from 'react';

type todo = {
  id: number;
  text: string;
  done: boolean;
};

function App() {
  const [todos, setTodos] = useState<todo[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setTodos(parsed);
      } catch {
        // JSON 파싱 에러 시 무시
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: todo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div className="App">
      <Write onAdd={addTodo} />
    </div>
  );
}

export default App;
