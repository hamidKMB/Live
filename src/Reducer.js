import { combineReducers } from 'redux';

import darkModeReducer from './Redux-Reduce/features/darkModeSlice';

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
})

export default rootReducer;