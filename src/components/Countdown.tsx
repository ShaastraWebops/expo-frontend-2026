import { useState, useEffect } from "react";

function Countdown () {
  const targetDate = new Date("2026-01-02");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // Run once immediately
    const timer = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      <div className="p-4 text-center">
        <div className="flex justify-center gap-4 text-lg font-mono text-primary-yellow/50">
          <div>{timeLeft.days}d</div>
          <div>{timeLeft.hours}h</div>
          <div>{timeLeft.minutes}m</div>
          <div>{timeLeft.seconds}s</div>
        </div>
      </div>
    </>
  );
}

export default Countdown;
