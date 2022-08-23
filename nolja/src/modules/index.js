import {combineReducers} from 'redux';
import userReducer from './UserModule';
import recommendReducer from './RecommendModule';
import photokeyReducer  from "./PhotoModule";
import boardReducer from './boardReducer';

const rootReducer = combineReducers({
    userReducer,
    recommendReducer,
    photokeyReducer,
    boardReducer
});

export default rootReducer;