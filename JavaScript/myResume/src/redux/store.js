// Importerar configureStore från Redux Toolkit för att skapa Redux store
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"; // Importera reducer

// Skapar Redux store med configureStore
const store = configureStore({
  reducer: {
    theme: themeReducer, // Lägg till themeReducer i store, vilket hanterar "theme"-delen av tillståndet
  },
});

export default store;
