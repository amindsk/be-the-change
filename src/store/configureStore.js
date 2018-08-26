//Importing redux to create store and combine reducers
import { createStore, combineReducers } from 'redux';
//Importing skills reducer
import skillsReducer from '../reducers/skills';
//Importing filters reducer
import skillFilter from '../reducers/filters';
//Creating redux store
export default () => {
    const store = createStore(
        combineReducers({
            skills: skillsReducer,
            filters: skillFilter
        }),
        //To enable redux dev tools
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};