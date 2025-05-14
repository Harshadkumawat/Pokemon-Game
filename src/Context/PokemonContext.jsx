import React, { createContext, useReducer } from "react";
import { initialState , pokemonReducer } from "./PokemonReducer";


export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {

     


  const [state, dispatch] = useReducer(pokemonReducer, initialState );

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};
