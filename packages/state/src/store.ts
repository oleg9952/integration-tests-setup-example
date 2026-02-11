import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api"; // Import your API

export const createStore = () => {
  const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer, // Add this!
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware), // Add this!
  });

  setupListeners(store.dispatch);

  return store;
};

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
