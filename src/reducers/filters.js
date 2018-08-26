
//Filter Reducer
const filterReducerDefaultState = {
    sortBy: 'id'
};

export default (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SORT_BY_ID':
            return {
                ...state,
                sortBy: 'date'
            };
        default:
            return state
    }
};