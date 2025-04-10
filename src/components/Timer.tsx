import React from 'react';

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  return (
    <div className="text-2xl font-bold mb-2">
      Time: {timeLeft}s
    </div>
  );
};

export default Timer;
