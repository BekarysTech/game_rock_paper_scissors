import { useState } from 'react';
import './index.css';

const CHOICES = ["Rock", "Paper", "Scissors"];

const beats = {
  0: 2,
  1: 0,
  2: 1, 
};

function App() {
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleClick = (playerIndex) => {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);

    setPlayerChoice(playerIndex);
    setComputerChoice(randomIndex);

    if (playerIndex === randomIndex) {
      setResult("draw");
    } else if (beats[playerIndex] === randomIndex) {
      setResult("win");
    } else {
      setResult("lose");
    }
  };

  const handleReset = () => {
    setComputerChoice(null);
    setPlayerChoice(null);
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-500 gap-6">
      <h1 className="text-3xl font-bold text-white">Тас - Қағаз - Қайшы</h1>

      {result === null && (
        <div className="flex gap-10">
          {CHOICES.map((text, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="bg-white text-black px-6 py-3 rounded-lg shadow-md
                         hover:bg-gray-200 transition duration-300"
            >
              {text}
            </button>
          ))}
        </div>
      )}

      {result !== null && (
        <div className="flex flex-col items-center gap-4">
          <p className="text-white text-lg">
            Сіз: <span className="font-semibold">{CHOICES[playerChoice]}</span>
            {"  vs  "}
            Компьютер: <span className="font-semibold">{CHOICES[computerChoice]}</span>
          </p>

          {result === "win" && (
            <p className="text-green-400 font-bold text-2xl">Сіз ұттыңыз! 🎉</p>
          )}
          {result === "lose" && (
            <p className="text-red-400 font-bold text-2xl">Сіз ұтылдыңыз 😢</p>
          )}
          {result === "draw" && (
            <p className="text-yellow-300 font-bold text-2xl">Тең ойын 🤝</p>
          )}

          <button
            onClick={handleReset}
            className="bg-white text-black px-6 py-2 rounded-lg shadow-md
                       hover:bg-gray-200 transition duration-300"
          >
            Қайта ойнау
          </button>
        </div>
      )}
    </div>
  );
}

export default App;