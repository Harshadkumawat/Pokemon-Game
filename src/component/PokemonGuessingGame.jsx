import React, { useContext, useEffect } from "react";

import { actionTypes } from "../Context/PokemonReducer";
import { fetchRandomPokemon } from "../Context/PokemonService";
import { PokemonContext } from "../Context/PokemonContext";

const PokemonGuessingGame = () => {
  const { state, dispatch } = useContext(PokemonContext);

  useEffect(() => {
    fetchRandomPokemon(dispatch, actionTypes);
  }, []);

 

  const handleWrongGuess = () => {
    dispatch({
      type: actionTypes.SET_MESSAGE,
      payload: `❌ ! The correct answer was ${state.pokemon.name.toUpperCase()}`,
    });
    dispatch({ type: actionTypes.UPDATE_SCORE, payload: -1 });
    dispatch({ type: actionTypes.SET_REVEAL });
  };

  const checkGuess = () => {
    if (state.guess.toLowerCase() === state.pokemon.name) {
      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: "🎉 Correct! Well done!",
      });
      dispatch({ type: actionTypes.UPDATE_SCORE, payload: 1 });
      dispatch({ type: actionTypes.SET_REVEAL });

      // Play Pokémon voice
      const pokemonCry = new Audio(
        `https://play.pokemonshowdown.com/audio/cries/${state.pokemon.name}.mp3`
      );
      pokemonCry.play();
    } else {
      handleWrongGuess();
    }
  };

  const restartGame = () => {
    dispatch({ type: actionTypes.RESET_GAME });
    fetchRandomPokemon(dispatch, actionTypes);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6">
      <h1 className="text-5xl font-extrabold tracking-widest mb-8 text-yellow-400 drop-shadow-md">
        Who's That Pokémon?
      </h1>

      <p className="text-2xl bg-gray-800 rounded-lg px-6 py-2 shadow-md mb-6">
        Score: <span className="text-green-400 font-bold">{state.score}</span>
      </p>

      

      {state.pokemon && (
        <div className="relative w-60 h-60 bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <img
            src={state.pokemon.image}
            alt="Hidden Pokémon"
            className={`w-full h-full transition-all duration-500 ${
              state.reveal ? "brightness-100" : "brightness-0"
            }`}
          />
        </div>
      )}

      <input
        type="text"
        className="mt-6 w-80 p-3 rounded-full text-black border-2 border-gray-300"
        placeholder="Enter Pokémon name"
        value={state.guess}
        onChange={(e) =>
          dispatch({ type: actionTypes.SET_GUESS, payload: e.target.value })
        }
        disabled={state.reveal}
      />

      <button
        onClick={checkGuess}
        className="mt-6 bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full"
      >
        Submit Guess
      </button>

      <p className="mt-4 text-2xl font-semibold text-red-400">
        {state.message}
      </p>

      <button
        onClick={restartGame}
        className="mt-6 bg-red-500 text-white font-bold py-3 px-6 rounded-full"
      >
        Restart Game
      </button>
    </div>
  );
};

export default PokemonGuessingGame;
