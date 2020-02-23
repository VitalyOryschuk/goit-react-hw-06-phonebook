// toolkit
import { createAction } from '@reduxjs/toolkit';
import * as types from './filterTypes';

const filterAction = createAction(types.FILTERED);
export default filterAction;

// import * as types from './filterTypes';

// const filterAction = value => ({
//   type: types.FILTERED,
//   payload: {
//     filter: value,
//   },
// });
// export default filterAction;
