import { useState } from 'react';

type WriteProps = {
  onAdd: (text: string) => void;
};

export default function Write({ onAdd }: WriteProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = text.trim();
    if (trimmed.length === 0) return;

    onAdd(trimmed);
    setText('');
  };

  return (
    <div>
      <input type="text" placeholder="할일 입력" onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={handleSubmit}>저장</button>
    </div>
  );
}
