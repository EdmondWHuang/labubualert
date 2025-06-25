import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  target: string; // ISO date string
}

function getCountdown(target: string) {
  const now = new Date();
  const end = new Date(target);
  const diff = end.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ target }) => {
  const [timeRemaining, setTimeRemaining] = useState(getCountdown(target));
  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeRemaining ?? {};

  useEffect(() => {
    if (!timeRemaining) {
      return;
    }

    const interval = setInterval(() => {
      const updated = getCountdown(target);
      setTimeRemaining(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, [target, timeRemaining]);

  return (
    <>
      {timeRemaining ? (
        <span>
          {`${days > 0 && `${days} Day: `}${hours} Hr: ${minutes} Min: ${seconds} Sec`}
        </span>
      ) : (
        <span>
          {new Date(target)
            .toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            .replace(/, (?=\d{2}:)/, " ")}
        </span>
      )}
    </>
  );
};

export default CountdownTimer;
