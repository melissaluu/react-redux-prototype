import { createStore } from 'redux';
import rootReducer from './reducer';

const initialState = {
    styles: {fontColor: '#ff0001'}
};

export default function configureStore() {
 return createStore(
  rootReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
 );
}