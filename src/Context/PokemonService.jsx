export const fetchRandomPokemon = async (dispatch, actionTypes) => {
  dispatch({ type: actionTypes.SET_REVEAL, payload: false });
  dispatch({ type: actionTypes.SET_GUESS, payload: "" });

  const randomId = Math.floor(Math.random() * 50) + 1;
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    const data = await response.json();
    dispatch({
      type: actionTypes.SET_POKEMON,
      payload: { name: data.name, image: data.sprites.front_default },
    });
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
  }
};
