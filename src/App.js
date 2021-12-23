import './App.css';
import { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(0);

  const increment = () => {
    setLikes(likes + 1);
  };

  const decrement = () => {
    setLikes(likes - 1);
  };

  return (
    <div className="App">
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => increment()}>Increment</button>

      <h2>{likes}</h2>
    </div>
  );
}

export default App;
