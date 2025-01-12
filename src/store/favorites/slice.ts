import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Example } from "../../models/Example";

const initialState: Example[] = [];

const favoritesSlice = createSlice({
  initialState: initialState,
  name: "favorites",
  reducers: {
    addFavorite: (state, action: PayloadAction<Example>) => {
      if (state.some((f) => f.id == action.payload.id)) {
        return state;
      } else {
        return [...state, action.payload];
      }
    },

    toggleFavorite: (state, action: PayloadAction<Example>) => {
      if (state.some((f) => f.id == action.payload.id)) {
        return state.filter((p) => p.id !== action.payload.id);
      } else {
        return [...state, action.payload];
      }
    },

    removeFavorite: (state, action: PayloadAction<Example>) => {
      return state.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
