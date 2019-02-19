const defaultState = {
  clubName: '',
  clubAddress: '',
};

export default function clubReducers(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_NEW_CLUB':
      return state;

    default:
      return state;
  }
}
