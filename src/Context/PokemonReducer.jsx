export const initialState = {
  pokemon: null,
  guess: "",
  message: "",
  reveal: false,
  score: 0,
};

export const actionTypes = {
  SET_POKEMON: "SET_POKEMON",
  SET_GUESS: "SET_GUESS",
  SET_MESSAGE: "SET_MESSAGE",
  SET_REVEAL: "SET_REVEAL",
  UPDATE_SCORE: "UPDATE_SCORE",
  RESET_GAME: "RESET_GAME",
};

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_POKEMON:
      return { ...state, pokemon: action.payload, reveal: false, message: "" };
    case actionTypes.SET_GUESS:
      return { ...state, guess: action.payload };
    case actionTypes.SET_MESSAGE:
      return { ...state, message: action.payload };
    case actionTypes.SET_REVEAL:
      return { ...state, reveal: true };
    case actionTypes.UPDATE_SCORE:
      return { ...state, score: state.score + action.payload };

    case actionTypes.RESET_GAME:
      return initialState;
    default:
      return state;
  }
};
