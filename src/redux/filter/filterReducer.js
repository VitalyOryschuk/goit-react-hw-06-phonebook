// toolkit
import { createReducer } from '@reduxjs/toolkit';
import * as types from './filterTypes';

const filterReducer = createReducer('', {
  [types.FILTERED]: (state, action) => {
    return action.payload;
  },
});

export default filterReducer;

// import * as types from './filterTypes';

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTERED:
//       return payload.filter;
//     default:
//       return state;
//   }
// };

// export default filterReducer;
