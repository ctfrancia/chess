const defaultState = {
  playerName: '',
};

export default function playerReducers(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_NEW_PLAYER':
      return state;

    default:
      return state;
  }
}
