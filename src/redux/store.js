// before toolkit

// import { createStore } from 'redux';
// import rootReducer from './rootReducer';
// import { devToolsEnhancer } from 'redux-devtools-extension';

// const store = createStore(rootReducer, devToolsEnhancer());
// console.log(store);

// export default store;

// toolkit

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { saveToLS, loadStateFromLS } from '../services/LS';

const persistedState = loadStateFromLS();

const store = configureStore({ reducer: rootReducer, preloadedState: persistedState });
store.subscribe(() => saveToLS(store.getState()));

export default store;
