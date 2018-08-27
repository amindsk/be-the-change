//Importing redux to create store and combine reducers
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//Importing skills reducer
import skillsReducer from '../reducers/skills';
//Importing filters reducer
import skillFilter from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Creating redux store
export default () => {
    const store = createStore(
        combineReducers({
            skills: skillsReducer,
            filters: skillFilter
        }),
        //To enable redux thunk
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};