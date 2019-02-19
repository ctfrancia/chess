const defaultState = {

};

export default function dataReducers(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_NEW_TOURNAMENT':
      return state;

    default:
      return state;
  }
}
