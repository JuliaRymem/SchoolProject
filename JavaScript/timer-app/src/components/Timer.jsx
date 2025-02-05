import React, { useState, useEffect } from "react"; // Importerar React och två hooks: useState och useEffect.

const Timer = () => {
  // useState används för att skapa två state-variabler: 
  // `time` för att hålla reda på antalet sekunder och `isRunning` för att veta om timern är igång.
  const [time, setTime] = useState(0); // `time` börjar på 0.
  const [isRunning, setIsRunning] = useState(false); // `isRunning` börjar som false (timern är pausad).

  // useEffect används för att köra kod som reagerar på förändringar i `isRunning`.
  useEffect(() => {
    let timer; // Variabel för att lagra intervallet.
    if (isRunning) {
      // Om timern är igång, starta ett intervall som ökar `time` med 1 varje sekund.
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Uppdaterar tiden baserat på föregående värde.
      }, 1000); // Kör varje sekund (1000 ms).
    }
    return () => clearInterval(timer); // Rensar intervallet när timern pausas eller komponenten tas bort.
  }, [isRunning]); // Kör denna effekt varje gång `isRunning` ändras.

  // Funktion för att starta timern
  const startTimer = () => setIsRunning(true);

  // Funktion för att pausa timern
  const pauseTimer = () => setIsRunning(false);

  // Funktion för att nollställa timern
  const resetTimer = () => {
    setIsRunning(false); // Stoppar timern.
    setTime(0); // Sätter tiden till 0.
  };

  // JSX för att rendera gränssnittet.
  return (
    <div className="timer-container">
    <h1>Timer</h1>
    <div className="time-display">{time}s</div>
    <div className="button-group">
      <button className="btn start" onClick={startTimer} title="Start">
        Start
      </button>
      <button className="btn pause" onClick={pauseTimer} title="Pause">
        Paus
      </button>
      <button className="btn reset" onClick={resetTimer} title="Reset">
        Reset
      </button>
    </div>
  </div>
);
};

export default Timer; // Exporterar komponenten så att den kan användas i andra filer.
