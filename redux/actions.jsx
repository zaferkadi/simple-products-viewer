import * as types from './constants.jsx';

export function getProducts(name) {  
  return {
    type: types.GET_PRODUCTS,
    name
  };
}