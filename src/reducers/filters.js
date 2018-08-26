//Redux Reducer: Filters
//Initial/Default values for filters state
const filterReducerDefaultState = {
    sortBy: 'id'
};

//Embeding actions in redux filter's reducer
export default (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SORT_BY_ID':
            return {
                ...state,
                sortBy: 'id'
            };
        default:
            return state
    }
};