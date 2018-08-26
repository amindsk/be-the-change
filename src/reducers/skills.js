//Redux Reducer: Skills
//Initial/Default values for skills state
const skillsReducerDefaultState = [];
//Embedding actions to skill's reducer
export default (state = skillsReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_SKILL':
            return [
                ...state,
                action.skill
            ];
        case 'SET_SKILLS':
            return action.skills
        case 'REMOVE_SKILL':
            return state.filter(( { id } ) => id !== action.id);
        default:
        return state
    }
};