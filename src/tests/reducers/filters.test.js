import filterReducer from '../../reducers/filters';

//If default state values for filter reducer added in the state
test('Should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        sortBy: 'id'
    });
});

//If state values for filter reducer updated in the state
test('Should set sortBy id', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_ID' });
    expect(state.sortBy).toBe('id');
});