const skillsReducerDefaultState = [];

export default (state = skillsReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_SKILL':
            return [
                ...state,
                action.skill
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(( { id } ) => id !== action.id);
        default:
        return state
    }
};