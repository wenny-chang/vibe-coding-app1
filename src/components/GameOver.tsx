import React from 'react';

interface GameOverProps {
  score: number;
  highScore: number;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, highScore, onRestart }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
      <p className="text-xl mb-2">Your score: {score}</p>
      <p className="text-xl mb-4">High score: {highScore}</p>
      <button
        onClick={onRestart}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
