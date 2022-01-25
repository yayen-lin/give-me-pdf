import { useState, useEffect } from 'react';
import randomWords from 'random-words';

const NUM_OF_WORDS = 200;
const SECONDS = 60;

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  function generateWords() {
    return new Array(NUM_OF_WORDS).fill(null).map(() => randomWords());
  }

  return (
    <div className='App'>
      {words.map((words, i) => (
        <p>{words}</p>
      ))}
    </div>
  );
}

export default App;
