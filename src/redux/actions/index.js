import {
  MODE_CHANGE,
  BACKGROUND_LAFALDZ_GANJIL,
  BACKGROUND_LAFALDZ_GENAP,
  TEXT_LAFALDZ,
} from './type';

const modeChange = (params) => {
  return {
    type: MODE_CHANGE,
    payload: params,
  };
};
const backgroundLafaldzGanjilChange = (params) => {
  return {
    type: BACKGROUND_LAFALDZ_GANJIL,
    payload: params,
  };
};
const backgroundLafaldzGenapChange = (params) => {
  return {
    type: BACKGROUND_LAFALDZ_GENAP,
    payload: params,
  };
};
const textLafaldzChange = (params) => {
  return {
    type: TEXT_LAFALDZ,
    payload: params,
  };
};

export {
  modeChange,
  backgroundLafaldzGanjilChange,
  backgroundLafaldzGenapChange,
  textLafaldzChange,
};
