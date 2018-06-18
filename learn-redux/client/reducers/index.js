// You can only use 1 reducer in Redux
// So you put all your reducers together in rootReducer

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// 3 things live in state: posts, comments, routes
// Create the rootReducer with those items:
const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;