import {
  MODE_CHANGE,
  BACKGROUND_LAFALDZ_GANJIL,
  BACKGROUND_LAFALDZ_GENAP,
  TEXT_LAFALDZ,
} from '../actions/type';
import {combineReducers} from 'redux';

const initialState = {
  mode: false,
  backgroundLafaldzGanjil: 'rgba(255, 255, 153,0.3)',
  backgroundLafaldzGenap: 'white',
  textLafaldz: 'rgba(0,0,0,0.5)',
};

const reducers = (state = {initialState}, action) => {
  switch (action.type) {
    case MODE_CHANGE:
      return {...state, mode: action.payload};
    case BACKGROUND_LAFALDZ_GANJIL:
      return {...state, backgroundLafaldzGanjil: action.payload};
    case BACKGROUND_LAFALDZ_GENAP:
      return {...state, backgroundLafaldzGenap: action.payload};
    case TEXT_LAFALDZ:
      return {...state, textLafaldz: action.payload};
    default:
      return state;
  }
};

const appState = combineReducers({
  reducers,
});
export default appState;
