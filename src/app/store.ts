import { PokemonSlice } from "./slices/PokemonSlice";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { AppSlice } from "./slices/AppSLice";

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
    pokemon: PokemonSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
