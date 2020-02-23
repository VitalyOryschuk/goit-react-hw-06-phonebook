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

const store = configureStore({ reducer: rootReducer });
console.log(store);

export default store;
