'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Timer from '@/components/Timer';
import WordDisplay from '@/components/WordDisplay';
import GameOver from '@/components/GameOver';
import StartGame from '@/components/StartGame';

const words = ['typescript', 'javascript', 'nextjs', 'react', 'tailwind', 'component', 'state', 'props', 'hooks', 'router', 'async', 'promise', 'function', 'object', 'array'];

type GameStatus = 'start' | 'playing' | 'over';

export default function Home() {
  const [currentWord, setCurrentWord] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [gameStatus, setGameStatus] = useState<GameStatus>('start');
  const [highScore, setHighScore] = useState<number>(0);

  const startGame = useCallback(() => {
    setGameStatus('playing');
    setScore(0);
    setTimeLeft(60);
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    setUserInput('');
  }, []);

  useEffect(() => {
    const storedHighScore = localStorage.getItem('highScore');
    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore, 10));
    }
  }, []);

  useEffect(() => {
    if (gameStatus === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameStatus('over');
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('highScore', score.toString());
      }
    }
  }, [timeLeft, gameStatus, score, highScore]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);

    if (value === currentWord) {
      setScore(score + 1);
      setCurrentWord(words[Math.floor(Math.random() * words.length)]);
      setUserInput('');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Vibe Typing Game</h1>
      {gameStatus === 'start' && <StartGame onStart={startGame} />}
      {gameStatus === 'playing' && (
        <>
          <div className="mb-4">
            <Timer timeLeft={timeLeft} />
            <p className="text-xl">Score: {score}</p>
          </div>
          <WordDisplay word={currentWord} userInput={userInput} />
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            className="mt-4 p-2 text-xl bg-gray-800 border-2 border-gray-700 rounded"
            autoFocus
          />
        </>
      )}
      {gameStatus === 'over' && (
        <GameOver score={score} highScore={highScore} onRestart={startGame} />
      )}
    </main>
  );
}
