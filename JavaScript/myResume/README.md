# **Reactify Your Resume**

En interaktiv **Single Page Application (SPA)** byggd med  **React** , som fungerar som en personlig hemsida. Webbappen presenterar information om mig själv, mina färdigheter, erfarenheter, projekt och kontaktinformation.

## **Installation**
Följ dessa steg för att köra projektet lokalt:

**Klona repositoriet**
Klona projektet:

`git clone [https://github.com/JuliaRymem/SchoolProject/JavaScript/myResume](https://github.com/JuliaRymem/SchoolProject/tree/main/JavaScript/myResume))`

**Navigera till projektmappen**
Gå in i den klonade projektmappen:

`cd myResume`

**Installera nödvändiga beroenden**
Installera de nödvändiga paketen med:

`npm install`

**Starta utvecklingsservern**
Kör utvecklingsservern för att starta projektet:

`npm run dev`

**Öppna applikationen i webbläsaren**
Öppna din webbläsare och gå till 

`http://localhost:5173/` (eller den port som Vite specificerar) för att se projektet i drift.


## **Teknologier**

Projektet är byggt med följande teknologier:

* **React** – Ramverk för frontend
* **React Router** – Navigering mellan sidor
* **Redux Toolkit** – Hantering av global state
* **JavaScript (ES6+)** – Dynamisk funktionalitet
* **CSS** – Styling
* **Swiper.js** – Interaktiva bildkaruseller
* **useState Hook** – Hantering av komponentens lokala state
---------------------------------
  *Extra funktion*
  **useRef** **Hook**
  I applikationen används **useRef** för att automatiskt sätta fokus på det första inputfältet i kontaktformuläret när sidan laddas. När användaren besöker Kontakt-sidan, fokuserar applikationen automatiskt på fältet "Ditt namn", vilket förbättrar användarupplevelsen och gör det enklare att börja fylla i formuläret.
* Hur det fungerar:
1. En ref skapas med useRef(null) och kopplas till inputfältet för namn (<input>).
2. När komponenten renderas, används useEffect för att köra en funktion som sätter fokus på inputfältet med nameInputRef.current.focus().
3. Det sker direkt efter att komponenten har laddats, vilket gör att användaren direkt kan börja skriva utan att behöva klicka på fältet.

## **Funktionalitet**

✔ **Props** – Används för att skicka data mellan komponenter och säkerställa ett effektivt dataflöde.

✔ **Redux (Global State Management)** – Möjlighet att ändra färg på headern dynamiskt.

✔ **React Router** – Navigation mellan olika sektioner och sidor via **ReadMoreButton** (Exempel: "Om mig", "Projekt", "Kontakt").

✔ **useState Hook** – Används i kontaktformuläret där besökaren kan skicka ett interaktivt meddelande.

✔ **useRef Hook** – Sätter automatiskt fokus på det första inputfältet i kontaktformuläret vid sidladdning.


## **Kontakt**

📧 **E-post:** *[j]()uliakrasmusson@hotmail.com*
🔗 **LinkedIn:** [www.linkedin.com/in/juliarasmusson](#)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
