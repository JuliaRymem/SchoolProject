import '../styles/contact.css';
import { useState, useRef, useEffect } from "react"; // Importerar React Hooks
import BackToHomeButton from "../components/BackToHomeButton";

function Contact() {
  // Skapar ett state för formulärdata med tomma värden
  const [formData, setFormData] = useState({   
    name: "",
    email: "",
    message: "",
  });
// Skapar ett state för att hålla reda på om formuläret har skickats
  const [submitted, setSubmitted] = useState(false);

  // En useRef för att fokusera på namn-inputfältet
  const nameInputRef = useRef(null);

  // Sätter fokuset på namn-inputfältet när sidan laddas
  useEffect(() => {
    nameInputRef.current.focus();  // Fokus på inputfältet
  }, []); // Tom array betyder att det bara körs vid första renderingen

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData, // Behåller tidigare data
      [name]: value,
    }));
  };

   // Funktion som hanterar när formuläret skickas
  const handleSubmit = (event) => {
    event.preventDefault(); // Förhindrar att sidan laddas om
    console.log("Formulär skickat:", formData);
    setSubmitted(true); // Uppdaterar state för att visa bekräftelsemeddelandet
  };

  return (
    <section>
      <h1>Hör av dig till mig! :) </h1>

      {submitted ? (
        <p>Tack för ditt meddelande! Jag återkommer snart ♡</p>
      ) : (
        // Om formuläret inte är skickat, visa formuläret
        <form onSubmit={handleSubmit}>
          <label>
            Ditt namn
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              ref={nameInputRef} // Koppla ref här, så fokuset sätts på dettA inputfält
            />
          </label>
          <label>
            Din mail
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Vad har du på hjärtat? 
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" id="contact-submit" className="submit-button">
            Skicka meddelandet
          </button>
        </form>
      )}

      <BackToHomeButton />
    </section>
  );
}

export default Contact;
