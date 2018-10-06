const rootReducer = (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case 'LOGIN':
      return {
        uid: action.uid,
        user: action.user,
      };
    case 'LOGOUT':
      return { uid: null };
    default:
      return state;
  }
};

export default rootReducer;
