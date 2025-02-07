// Importerar createSlice från Redux Toolkit för att skapa en slice
import { createSlice } from "@reduxjs/toolkit";

// Skapar en slice för temat
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    color: "##d3beb5d8", // Standardfärgen för temat
  },
  reducers: {   // Skapar en reducer-funktion som växlar mellan två färger
    toggleColor: (state) => {
      // Färgerna som ska växla
      state.color = state.color === "#d3beb5d8" ? "#83a983c7" : "#d3beb5d8"; 
    },
  },
});

// Exporterar Redux Actions & Reducer 
export const { toggleColor } = themeSlice.actions;
export default themeSlice.reducer;
