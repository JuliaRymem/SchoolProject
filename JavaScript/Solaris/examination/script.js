// API-endpoint för att hämta en API-nyckel
// API-endpoint för att hämta data om himlakroppar (planeter, månar etc.)
const API_ENDPOINT_KEYS =
  "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys";
const API_ENDPOINT_BODIES =
  "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies";

// Hämta API-nyckel från servern
async function fetchApiKey() {
  try {
    // Skickar en POST-begäran till API-nyckelns endpoint
    const response = await fetch(API_ENDPOINT_KEYS, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Anger JSON som datatyp
    });

    // Om svaret inte är OK, får man ett fel
    if (!response.ok)
      throw new Error(`API-nyckelhämtning misslyckades: ${response.status}`);

    // Hämtar svaret i JSON-format och returnerar nyckeln om den finns
    const data = await response.json();
    return data.key || null;
  } catch (error) {
    // Loggar fel i konsolen och returnerar null om något går fel
    console.error("Fel vid hämtning av API-nyckel:", error);
    return null;
  }
}

// Hämta och visa planeter när man söker
async function fetchAndDisplayPlanets(query) {
  try {
    // Hämtar API-nyckeln
    const apiKey = await fetchApiKey();
    if (!apiKey) throw new Error("API-nyckeln är inte tillgänglig");

    // Skickar en GET-begäran till API:et med API-nyckeln i headers
    const response = await fetch(API_ENDPOINT_BODIES, {
      method: "GET",
      headers: { "x-zocom": apiKey }, // API-nyckeln skickas i en anpassad header
    });

    // Om svaret inte är OK, får man ett fel
    if (!response.ok)
      throw new Error(`API-anropet misslyckades: ${response.status}`);

    // Hämtar svaret i JSON-format och skickar vidare till display-funktionen
    const { bodies } = await response.json();
    displayPlanets(bodies, query.toLowerCase()); // Skickar med sökfrågan (med små bokstäver)
  } catch (error) {
    // Loggar fel i konsolen och visar ett felmeddelande
    console.error("Ett fel inträffade:", error);
    document.getElementById("results").innerHTML =
      "<p>Ett fel inträffade vid hämtning av data.</p>";
  }
}

// Visa planeter som matchar sökningen
function displayPlanets(bodies, query) {
  // Hämtar elementet där resultaten ska visas
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Rensar tidigare resultat

  // Filtrerar planeter baserat på om deras namn innehåller "sökfrågan"
  const filteredBodies = bodies.filter((body) =>
    body.name.toLowerCase().includes(query)
  );

  // Om inga planeter matchar (om det inte finns någon planet med det namnet), visas ett meddelande
  // Styling med färg + text direkt i HTML-strängen (inte bästa sättet, men smidigt)
  if (filteredBodies.length === 0) {
    resultsContainer.innerHTML =
      "<p style='color: red;'><strong>Är det där verkligen en planet?</strong></p>";
    return;
  }

  // Skapar ett kort för varje matchande planet och lägger till
  filteredBodies.forEach((body) => {
    const bodyCard = document.createElement("div"); // Skapar ett nytt div-element
    bodyCard.classList.add("card"); // Lägger till CSS-klassen "card"

    // Fyller kortet med information om planeten och skapar en knapp för att stänga (X)
    // Fetare text på de små "rubrikerna"
    bodyCard.innerHTML = `
      <button class="close-btn">X</button>
      <h3>${body.name}</h3>
      <p><strong>Typ:</strong> ${body.type}</p>
      <p><strong>Latinskt namn:</strong> ${
        body.latinName || "Ej tillgängligt"
      }</p>
      <p><strong>Temperatur (dag):</strong> ${body.temp.day}°C</p>
      <p><strong>Temperatur (natt):</strong> ${body.temp.night}°C</p>
      <p><strong>Omloppsperiod:</strong> ${body.orbitalPeriod} dagar</p>
      <p><strong>Avstånd från solen:</strong> ${body.distance} km</p>
      <p><strong>Omkrets:</strong> ${body.circumference} km</p>
      <p><strong>Rotationstid:</strong> ${body.rotation} dagar</p>
      <p><strong>Beskrivning:</strong> ${body.desc || "Ej tillgänglig"}</p>
      <p><strong>Antal månar:</strong> ${body.moons ? body.moons.length : 0}</p>
    `;

    // Lägger till kortet i resultatcontainern
    resultsContainer.appendChild(bodyCard);

    // Lägger till en händelsehanterare för stängknappen
    bodyCard.querySelector(".close-btn").addEventListener("click", () => {
      bodyCard.style.display = "none"; // Dölj kortet när knappen klickas
    });
  });
}

// Lägger till en händelsehanterare som körs när sidan är laddad
document.addEventListener("DOMContentLoaded", () => {
  // Lägger till en klick-händelse på sökknappen
  document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("search").value.trim(); // Hämtar sökfrågan
    fetchAndDisplayPlanets(query); // Funktionen för att hämta och visa planeter
  });
});
