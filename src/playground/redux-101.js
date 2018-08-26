//Import redu to creat redux store and combine reducers
import { createStore, combineReducers } from 'redux';

const addSkill = ({ id = undefined, name = '', experience = '' } = {}) => ({
    type: 'ADD_SKILL',
    skill: {
        id,
        name,
        experience
    }
});

const removeSkill = ({ id } = {}) => ({
    type: 'REMOVE_SKILL',
    id
});

const sortById = ({ id } = {}) => ({
    type: 'SORT_BY_ID'
});


const skillsReducerDefaultState = [];
const skillsReducer = (state = skillsReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_SKILL':
        return [
            ...state,
            action.skill
        ]
        case 'REMOVE_SKILL':
        return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    sortBy: 'id'
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SORT_BY_ID':
        return {
            ...state,
            sortBy: 'id'
        }
        default:
            return state;
    }
};

const getSortedSkills = (skills, { sortBy }) => {
    return skills.sort((a, b) => {
        if(sortBy === 'id') {
            return a.id > b.id ? 1 : -1;
        }
    });
};

const store = createStore(
    combineReducers({
        skills: skillsReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(addSkill({ id: 1, name: 'ReactJS', experience: '123' }));
store.dispatch(addSkill({ id: 3, name: 'NodeJS', experience: '1a' }));
store.dispatch(addSkill({ id: 2, name: '.Net', experience: '1e' }));
store.dispatch(removeSkill({ id: 4 }));
const sorted =  getSortedSkills(store.getState().skills, store.getState().filters);
console.log('sorted',sorted);
store.dispatch(sortById());