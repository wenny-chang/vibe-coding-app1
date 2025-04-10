import React from 'react';

interface WordDisplayProps {
  word: string;
  userInput: string;
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word, userInput }) => {
  return (
    <div className="text-3xl font-mono">
      {word.split('').map((char, index) => (
        <span
          key={index}
          className={
            index < userInput.length
              ? char === userInput[index]
                ? 'text-green-500'
                : 'text-red-500'
              : 'text-gray-500'
          }
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
