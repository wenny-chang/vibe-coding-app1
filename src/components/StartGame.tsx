import React from 'react';

interface StartGameProps {
  onStart: () => void;
}

const StartGame: React.FC<StartGameProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Type?</h2>
      <p className="text-xl mb-4">Type as many words as you can in 60 seconds!</p>
      <button
        onClick={onStart}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Game
      </button>
    </div>
  );
};

export default StartGame;
