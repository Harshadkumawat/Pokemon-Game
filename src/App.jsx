import React from "react";

import { PokemonProvider } from "./Context/PokemonContext";
import PokemonGuessingGame from "./component/PokemonGuessingGame";

function App() {
  return (
    <PokemonProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-900">
        <PokemonGuessingGame />
      </div>
    </PokemonProvider>
  );
}

export default App;
