import { createStore, combineReducers } from 'redux';
import skillsReducer from '../reducers/skills';
import skillFilter from '../reducers/filters';
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