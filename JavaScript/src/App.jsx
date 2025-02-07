import React, { useState, useEffect, useRef, createContext, useContext } from "react";

// 1. Skapa en Context för temat
const ThemeContext = createContext();

function App() {
  // 2. Håll reda på temat ("light" eller "dark")
  const [theme, setTheme] = useState("rosa");

  // 3. Timer: Växla mellan teman varje 5 sekunder
  useEffect(() => {
    const interval = setInterval(() => {
      setTheme((prevTheme) => (prevTheme === "rosa" ? "blått" : "rosa"));
    }, 5000);

    // Städa upp intervallet när komponenten tas bort
    return () => clearInterval(interval);
  }, []);

  // 4. Skapa en ref för att fokusera på input
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); // Sätter fokus på input-fältet
  };

  return (
    // 5. Ge temat till alla barnkomponenter via Context
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <h1>Temaväxling med React Hooks</h1>
        <p>
          Nu är det <ThemeDisplay /> tema!
        </p>

        {/* Knapp för att fokusera på input */}
        <button onClick={handleFocus}>Fokusera på input</button>
        <input ref={inputRef} placeholder="Skriv något..." />
      </div>
    </ThemeContext.Provider>
  );
}

// 6. En komponent som visar temat från Context
function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  return <strong>{theme}</strong>;
}

export default App;
