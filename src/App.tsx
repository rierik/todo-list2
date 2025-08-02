import { useState } from 'react';
import './App.css';
import Write from './components/Write';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Write />
    </div>
  );
}

export default App;
