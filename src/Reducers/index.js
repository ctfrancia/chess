import { combineReducers } from 'redux';
import clubReducers from './club.reducers';
import playerReducers from './player.reducers';
import dataReducers from './data.reducers';
import pageReducers from './page.reducers';

export default combineReducers({
  clubState: clubReducers,
  playerState: playerReducers,
  pagesState: pageReducers,
  dataState: dataReducers,
});
