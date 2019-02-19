const defaultState = {
  loading: true,
  auth_token: '',
  authenticated: false,
};

export default function pageReducers(state = defaultState, action) {
  switch (action.type) {
    case 'LOADING_TRUE':
      return state;

    default:
      return state;
  }
}
