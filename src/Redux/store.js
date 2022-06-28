import {legacy_createStore,compose, applyMiddleware} from 'redux';
import reducer from './reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const customMiddleware=(dispatch)=>(next)=>(action)=>{
    if(typeof action === 'function'){
        return (dispatch)
    }else if(typeof action === 'object'){
        return next(action);
    }
};


const store = legacy_createStore(reducer,composeEnhancers(applyMiddleware(customMiddleware)))

export {store}